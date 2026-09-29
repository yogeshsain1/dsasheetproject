// ============================================================
// DSA Mastery Sheet — Application Logic
// ============================================================

'use strict';

// ── State ──────────────────────────────────────────────────
const state = {
  solved:      JSON.parse(localStorage.getItem('dsa_solved')      || '{}'),
  lmSolved:    JSON.parse(localStorage.getItem('dsa_lm_solved')   || '{}'),
  theme:       localStorage.getItem('dsa_theme') || 'dark',
  expanded:    {},
  search:      '',
  diffFilter:  [],
  topicFilter: [],
  currentTab:  'pattern',
};

// ── DOM Refs ────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const topicsContainer  = $('topics-container');
const lastminContainer = $('lastmin-container');
const searchInput      = $('searchInput');
const modal            = $('problemModal');
const modalTitle       = $('modal-title');
const modalSubtitle    = $('modal-subtitle');
const modalBadges      = $('modal-badges');
const problemsList     = $('problems-list');
const modalProgressFill = $('modal-progress-fill');
const modalProgressLabel = $('modal-progress-label');
const themeToggle      = $('themeToggle');
const navProgressText  = $('nav-progress-text');
const statSolved       = $('stat-solved');
const statPercent      = $('stat-percent');

let currentSubtopic    = null;

// ── Theme ───────────────────────────────────────────────────
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  state.theme = t;
  localStorage.setItem('dsa_theme', t);
}
applyTheme(state.theme);

themeToggle.addEventListener('click', () =>
  applyTheme(state.theme === 'dark' ? 'light' : 'dark')
);

// ── Helpers ─────────────────────────────────────────────────
function totalProblems() {
  return DSA_DATA.reduce((a, t) =>
    a + t.subtopics.reduce((b, s) => b + s.problems.length, 0), 0);
}

function countSolved() {
  return Object.values(state.solved).filter(Boolean).length;
}

function countSubtopicSolved(sub) {
  return sub.problems.filter(p => state.solved[p.id]).length;
}

function diffClass(d) {
  if (d === 'Easy')   return 'badge-easy';
  if (d === 'Medium') return 'badge-medium';
  return 'badge-hard';
}

function saveSolved() {
  localStorage.setItem('dsa_solved',    JSON.stringify(state.solved));
  localStorage.setItem('dsa_lm_solved', JSON.stringify(state.lmSolved));
}

function updateGlobalStats() {
  const total  = totalProblems();
  const solved = countSolved();
  const pct    = total ? Math.round(solved / total * 100) : 0;

  navProgressText.textContent = `${solved} / ${total} solved`;
  statSolved.textContent      = solved;
  statPercent.textContent     = pct + '%';

  // nav pill color feedback
  const pill = document.querySelector('.total-progress-pill');
  if (pct >= 80) pill.style.borderColor = '#22c55e';
  else if (pct >= 40) pill.style.borderColor = '#f59e0b';
  else pill.style.borderColor = '';
}

// ── Build Topic Filter dropdown ─────────────────────────────
function buildTopicDropdown() {
  const menu = $('topicDropMenu');
  DSA_DATA.forEach(topic => {
    const label = document.createElement('label');
    label.className = 'dropdown-item';
    label.innerHTML = `<input type="checkbox" value="${topic.id}" class="topic-check" />
      <span>${topic.icon} ${topic.name}</span>`;
    menu.appendChild(label);
  });
}

// ── Render Topics (Pattern View) ────────────────────────────
function renderTopics() {
  topicsContainer.innerHTML = '';

  const query     = state.search.trim().toLowerCase();
  const diffSet   = new Set(state.diffFilter);
  const topicSet  = new Set(state.topicFilter);

  let anyVisible  = false;

  DSA_DATA.forEach((topic, topicIdx) => {
    // Apply topic filter
    if (topicSet.size && !topicSet.has(topic.id)) return;

    const topicEl = document.createElement('div');
    topicEl.className = `topic-section topic-color-${topic.colorIdx}`;
    topicEl.id = `topic-${topic.id}`;

    // Topic header
    topicEl.innerHTML = `
      <div class="topic-header">
        <h2 class="topic-name">
          <span class="topic-name-icon">${topic.icon}</span>
          ${topic.name}
        </h2>
        <p class="topic-desc">${topic.desc}</p>
      </div>
      <div class="subtopics-list" id="stlist-${topic.id}"></div>
    `;

    topicsContainer.appendChild(topicEl);
    const subList = topicEl.querySelector(`#stlist-${topic.id}`);

    let topicVisible = false;

    topic.subtopics.forEach(sub => {
      // Filter problems
      const visibleProblems = sub.problems.filter(p => {
        const matchDiff  = !diffSet.size || diffSet.has(p.difficulty);
        const matchQuery = !query ||
          p.name.toLowerCase().includes(query) ||
          sub.name.toLowerCase().includes(query) ||
          topic.name.toLowerCase().includes(query);
        return matchDiff && matchQuery;
      });

      if (!visibleProblems.length) return;

      topicVisible = true;
      anyVisible   = true;

      const solved = visibleProblems.filter(p => state.solved[p.id]).length;
      const total  = visibleProblems.length;
      const pct    = total ? Math.round(solved / total * 100) : 0;
      const isExpanded = state.expanded[sub.id] || false;

      const card = document.createElement('div');
      card.className = `subtopic-card${isExpanded ? ' expanded' : ''}`;
      card.id = `subtopic-${sub.id}`;

      card.innerHTML = `
        <button class="subtopic-header" aria-expanded="${isExpanded}" aria-controls="body-${sub.id}">
          <div class="subtopic-left">
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <div class="subtopic-info">
              <div class="subtopic-name">${sub.name}</div>
              <div class="subtopic-desc">${sub.desc}</div>
            </div>
          </div>
          <div class="subtopic-right">
            <div class="subtopic-count">
              <span>${solved}</span>/${total}
            </div>
            <div class="progress-bar-mini" aria-label="${pct}% complete">
              <div class="progress-bar-fill" style="width:${pct}%"></div>
            </div>
          </div>
        </button>
        <div class="subtopic-body" id="body-${sub.id}" role="region">
          <div class="subtopic-divider"></div>
          <div class="problems-inline" id="pinline-${sub.id}"></div>
        </div>
      `;

      subList.appendChild(card);

      // Render inline problems
      renderInlineProblems(sub, visibleProblems, `pinline-${sub.id}`);

      // Toggle expand
      card.querySelector('.subtopic-header').addEventListener('click', () => {
        const exp = card.classList.toggle('expanded');
        state.expanded[sub.id] = exp;
        card.querySelector('.subtopic-header').setAttribute('aria-expanded', exp);
      });
    });

    if (!topicVisible) {
      topicEl.classList.add('hidden');
    }
  });

  if (!anyVisible) {
    topicsContainer.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <h3>No problems found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>`;
  }

  updateGlobalStats();
}

// ── Render problems inline (inside expanded subtopic) ───────
function renderInlineProblems(sub, problems, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  problems.forEach(p => {
    const isSolved = !!state.solved[p.id];
    const item = document.createElement('div');
    item.className = `problem-item${isSolved ? ' solved' : ''}`;
    item.id = `pi-${p.id}`;

    item.innerHTML = `
      <div class="problem-checkbox" role="checkbox" aria-checked="${isSolved}" aria-label="Mark as solved" tabindex="0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="problem-info">
        <div class="problem-name">${p.name}</div>
        <div class="problem-meta">
          <span class="badge ${diffClass(p.difficulty)}">${p.difficulty}</span>
        </div>
      </div>
      <div class="problem-actions">
        <a href="${p.lc}" target="_blank" rel="noopener" class="problem-link lc-link" onclick="event.stopPropagation()" aria-label="Open ${p.name} on LeetCode">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
          Solve
        </a>
      </div>
    `;

    // Toggle solved
    const checkbox = item.querySelector('.problem-checkbox');
    const toggleSolve = () => {
      state.solved[p.id] = !state.solved[p.id];
      saveSolved();
      // Animate
      checkbox.classList.add('checkbox-pop');
      setTimeout(() => checkbox.classList.remove('checkbox-pop'), 300);
      // Update this item
      item.classList.toggle('solved', state.solved[p.id]);
      checkbox.setAttribute('aria-checked', state.solved[p.id]);
      // Update subtopic progress bar
      updateSubtopicProgress(sub);
      updateGlobalStats();
    };

    checkbox.addEventListener('click', e => { e.stopPropagation(); toggleSolve(); });
    checkbox.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleSolve(); } });
    item.addEventListener('click', toggleSolve);
    item.querySelector('.problem-link').addEventListener('click', e => e.stopPropagation());

    container.appendChild(item);
  });
}

// ── Update subtopic progress bar after toggle ───────────────
function updateSubtopicProgress(sub) {
  const card = document.getElementById(`subtopic-${sub.id}`);
  if (!card) return;
  const solved = sub.problems.filter(p => state.solved[p.id]).length;
  const total  = sub.problems.length;
  const pct    = total ? Math.round(solved / total * 100) : 0;

  const fill = card.querySelector('.progress-bar-fill');
  const count = card.querySelector('.subtopic-count');
  if (fill)  fill.style.width = pct + '%';
  if (count) count.innerHTML  = `<span>${solved}</span>/${total}`;
}

// ── Render Last Minute 100 ──────────────────────────────────
function renderLastMin() {
  lastminContainer.innerHTML = '';

  const query   = state.search.trim().toLowerCase();
  const diffSet = new Set(state.diffFilter);

  const filtered = LAST_MINUTE_100.filter(p => {
    const matchDiff  = !diffSet.size || diffSet.has(p.difficulty);
    const matchQuery = !query ||
      p.name.toLowerCase().includes(query) ||
      p.topic.toLowerCase().includes(query);
    return matchDiff && matchQuery;
  });

  if (!filtered.length) {
    lastminContainer.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <h3>No problems found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>`;
    return;
  }

  filtered.forEach((p, i) => {
    const isSolved = !!state.lmSolved[p.id];
    const item = document.createElement('div');
    item.className = `lm-problem${isSolved ? ' solved' : ''}`;
    item.id = `lm-${p.id}`;

    item.innerHTML = `
      <div class="lm-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="lm-info">
        <div class="lm-name">${p.name}</div>
        <div class="lm-topic">${p.topic}</div>
      </div>
      <div class="lm-right">
        <span class="badge ${diffClass(p.difficulty)}">${p.difficulty}</span>
        <a href="${p.lc}" target="_blank" rel="noopener" class="problem-link lc-link" onclick="event.stopPropagation()" aria-label="Open on LeetCode">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
          Solve
        </a>
        <div class="lm-checkbox" role="checkbox" aria-checked="${isSolved}" aria-label="Mark as solved" tabindex="0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
    `;

    const checkbox = item.querySelector('.lm-checkbox');
    const toggleSolve = () => {
      state.lmSolved[p.id] = !state.lmSolved[p.id];
      saveSolved();
      item.classList.toggle('solved', state.lmSolved[p.id]);
      checkbox.setAttribute('aria-checked', state.lmSolved[p.id]);
      checkbox.classList.add('checkbox-pop');
      setTimeout(() => checkbox.classList.remove('checkbox-pop'), 300);
    };
    checkbox.addEventListener('click',   e => { e.stopPropagation(); toggleSolve(); });
    checkbox.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleSolve(); } });
    item.addEventListener('click', toggleSolve);
    item.querySelector('.problem-link').addEventListener('click', e => e.stopPropagation());

    lastminContainer.appendChild(item);
  });
}

// ── Tabs ────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentTab = btn.dataset.tab;

    $('view-pattern').className = state.currentTab === 'pattern' ? 'view-active' : 'view-hidden';
    $('view-lastmin').className = state.currentTab === 'lastmin' ? 'view-active' : 'view-hidden';

    if (state.currentTab === 'lastmin') renderLastMin();
  });
});

// ── Search ──────────────────────────────────────────────────
let searchDebounce;
searchInput.addEventListener('input', e => {
  clearTimeout(searchDebounce);
  state.search = e.target.value;
  searchDebounce = setTimeout(() => {
    if (state.currentTab === 'pattern') renderTopics();
    else renderLastMin();
  }, 180);
});

// Cmd+K / Ctrl+K focus
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (e.key === 'Escape') {
    if (modal.classList.contains('open')) closeModal();
    else { searchInput.value = ''; state.search = ''; renderTopics(); }
  }
});

// ── Difficulty Filter ───────────────────────────────────────
const diffDropBtn  = $('diffDropBtn');
const diffDropMenu = $('diffDropMenu');
const diffDropWrap = $('diffDropWrap');

diffDropBtn.addEventListener('click', e => {
  e.stopPropagation();
  diffDropMenu.classList.toggle('open');
  $('topicDropMenu').classList.remove('open');
});
diffDropMenu.addEventListener('change', () => {
  state.diffFilter = [...document.querySelectorAll('.diff-check:checked')].map(c => c.value);
  diffDropBtn.classList.toggle('active-filter', state.diffFilter.length > 0);
  if (state.currentTab === 'pattern') renderTopics();
  else renderLastMin();
});

// ── Topic Filter ────────────────────────────────────────────
const topicDropBtn  = $('topicDropBtn');
const topicDropMenu = $('topicDropMenu');

topicDropBtn.addEventListener('click', e => {
  e.stopPropagation();
  topicDropMenu.classList.toggle('open');
  diffDropMenu.classList.remove('open');
});
topicDropMenu.addEventListener('change', () => {
  state.topicFilter = [...document.querySelectorAll('.topic-check:checked')].map(c => c.value);
  topicDropBtn.classList.toggle('active-filter', state.topicFilter.length > 0);
  renderTopics();
});

document.addEventListener('click', e => {
  if (!diffDropWrap.contains(e.target))  diffDropMenu.classList.remove('open');
  if (!$('topicDropWrap').contains(e.target)) topicDropMenu.classList.remove('open');
});

// ── Modal ───────────────────────────────────────────────────
function openModal(sub, topicName) {
  currentSubtopic = sub;
  modalTitle.textContent    = sub.name;
  modalSubtitle.textContent = sub.desc;
  modalBadges.innerHTML = `<span class="badge badge-topic">${topicName}</span>`;

  renderModalProblems(sub);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentSubtopic = null;
}

function renderModalProblems(sub) {
  const solved = sub.problems.filter(p => state.solved[p.id]).length;
  const total  = sub.problems.length;
  const pct    = total ? Math.round(solved / total * 100) : 0;

  modalProgressFill.style.width = pct + '%';
  modalProgressLabel.textContent = `${solved} / ${total} problems solved`;

  problemsList.innerHTML = '';
  sub.problems.forEach(p => {
    const isSolved = !!state.solved[p.id];
    const item = document.createElement('div');
    item.className = `problem-item${isSolved ? ' solved' : ''}`;
    item.id = `modal-pi-${p.id}`;

    item.innerHTML = `
      <div class="problem-checkbox" role="checkbox" aria-checked="${isSolved}" tabindex="0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="problem-info">
        <div class="problem-name">${p.name}</div>
        <div class="problem-meta">
          <span class="badge ${diffClass(p.difficulty)}">${p.difficulty}</span>
        </div>
      </div>
      <div class="problem-actions">
        <a href="${p.lc}" target="_blank" rel="noopener" class="problem-link lc-link" onclick="event.stopPropagation()">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
          Solve
        </a>
      </div>
    `;

    const checkbox = item.querySelector('.problem-checkbox');
    const toggleSolve = () => {
      state.solved[p.id] = !state.solved[p.id];
      saveSolved();
      item.classList.toggle('solved', state.solved[p.id]);
      checkbox.setAttribute('aria-checked', state.solved[p.id]);
      checkbox.classList.add('checkbox-pop');
      setTimeout(() => checkbox.classList.remove('checkbox-pop'), 300);
      // Refresh modal progress
      const s2 = sub.problems.filter(q => state.solved[q.id]).length;
      const pct2 = Math.round(s2 / sub.problems.length * 100);
      modalProgressFill.style.width = pct2 + '%';
      modalProgressLabel.textContent = `${s2} / ${sub.problems.length} problems solved`;
      // Refresh topic card
      updateSubtopicProgress(sub);
      updateGlobalStats();
    };
    checkbox.addEventListener('click',   e => { e.stopPropagation(); toggleSolve(); });
    checkbox.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleSolve(); } });
    item.addEventListener('click', toggleSolve);
    item.querySelector('.problem-link').addEventListener('click', e => e.stopPropagation());

    problemsList.appendChild(item);
  });
}

$('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

// ── Intersection Observer for scroll-in animation ───────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// ── Init ────────────────────────────────────────────────────
function init() {
  buildTopicDropdown();
  renderTopics();
  updateGlobalStats();

  // Animate stat cards on load
  document.querySelectorAll('.stat-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = `opacity 0.4s ${i * 0.08}s ease, transform 0.4s ${i * 0.08}s ease`;
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + i * 80);
  });

  // Fix stat total
  $('stat-total').textContent = totalProblems() + '+';
}

init();
