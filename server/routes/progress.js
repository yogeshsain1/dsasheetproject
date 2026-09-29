const router = require('express').Router();
const requireAuth = require('../middleware/auth');
const { readProgress, writeProgress } = require('../db');

const emptyProgress = () => ({ solved: {}, lmSolved: {}, activityLog: {}, notes: {}, starred: {}, srs: {} });
const getTodayStr = () => new Date().toISOString().split('T')[0];
const validKey = (value) => typeof value === 'string' && /^[A-Za-z0-9_-]+$/.test(value);
const getProgress = async (userId) => ({ ...emptyProgress(), ...readProgress(userId) });
const saveProgress = async (userId, data) => writeProgress(userId, { ...emptyProgress(), ...data });

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try { res.json(await getProgress(req.user.id)); } catch (error) { next(error); }
});

router.post('/toggle', async (req, res, next) => {
  const { id, type = 'solved' } = req.body;
  if (!validKey(id) || !['solved', 'lmSolved'].includes(type)) return res.status(400).json({ error: 'id and a valid type are required' });
  try {
    const today = getTodayStr();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString();
    
    const data = await getProgress(req.user.id);
    const nextValue = !data[type][id];
    data[type][id] = nextValue;
    if (type === 'solved') {
      data.activityLog[today] = Math.max(0, (data.activityLog[today] || 0) + (nextValue ? 1 : -1));
      if (nextValue) data.srs[id] = { step: 0, nextReviewDate: tomorrowStr };
      else delete data.srs[id];
    }
    await saveProgress(req.user.id, data);
    res.json({ id, solved: data[type][id], type, todayCount: data.activityLog?.[today] || 0, srs: data.srs?.[id] });
  } catch (error) { next(error); }
});

router.post('/srs/review', async (req, res, next) => {
  if (!validKey(req.body.id)) return res.status(400).json({ error: 'id required' });
  try {
    const id = req.body.id;
    const data = await getProgress(req.user.id);
    let srsData = data.srs[id];
    if (!srsData) {
      srsData = { step: 0 };
    }
    const intervals = [1, 3, 7, 15, 30];
    let nextStep = srsData.step + 1;
    if (nextStep >= intervals.length) nextStep = intervals.length - 1;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervals[nextStep]);
    srsData = { step: nextStep, nextReviewDate: nextDate.toISOString() };
    
    data.srs[id] = srsData;
    await saveProgress(req.user.id, data);
    res.json({ id, srs: srsData });
  } catch (error) { next(error); }
});

router.post('/star', async (req, res, next) => {
  if (!validKey(req.body.id)) return res.status(400).json({ error: 'id required' });
  try {
    const id = req.body.id;
    const data = await getProgress(req.user.id);
    data.starred[id] = !data.starred[id];
    await saveProgress(req.user.id, data);
    res.json({ id, starred: data.starred[id] });
  } catch (error) { next(error); }
});

router.get('/notes/:id', async (req, res, next) => {
  try {
    const data = await getProgress(req.user.id);
    res.json(data.notes[req.params.id] || { text: '', code: '', lang: 'cpp' });
  } catch (error) { next(error); }
});

router.post('/notes/:id', async (req, res, next) => {
  try {
    const data = await getProgress(req.user.id);
    const { text, code, lang } = req.body;
    data.notes[req.params.id] = { text: text || '', code: code || '', lang: lang || 'cpp', updatedAt: new Date() };
    await saveProgress(req.user.id, data);
    res.json({ success: true, notes: data.notes[req.params.id] });
  } catch (error) { next(error); }
});

router.post('/import', async (req, res, next) => {
  const backup = req.body;
  if (!backup || typeof backup !== 'object') return res.status(400).json({ error: 'invalid data' });
  try {
    await saveProgress(req.user.id, {
      solved: backup.solved || {}, lmSolved: backup.lmSolved || {}, activityLog: backup.activityLog || {},
      notes: backup.notes || {}, starred: backup.starred || {},
    });
    res.json({ message: 'Backup imported successfully' });
  } catch (error) { next(error); }
});

router.delete('/reset', async (req, res, next) => {
  try { await saveProgress(req.user.id, emptyProgress()); res.json({ message: 'Progress reset successfully' }); } catch (error) { next(error); }
});

router.get('/analytics', async (req, res, next) => {
  try {
    const data = await getProgress(req.user.id);
    const activityLog = data.activityLog;
    const dates = Object.keys(activityLog).filter(date => activityLog[date] > 0).sort();
    let currentStreak = 0;
    let longestStreak = 0;
    let temporaryStreak = 0;
    const todayStr = getTodayStr();
    let checkDate = new Date();

    while (true) {
      const date = checkDate.toISOString().split('T')[0];
      if (activityLog[date] > 0) { currentStreak++; checkDate.setDate(checkDate.getDate() - 1); }
      else if (date === todayStr) checkDate.setDate(checkDate.getDate() - 1);
      else break;
    }
    dates.forEach((date, index) => {
      if (index === 0) temporaryStreak = 1;
      else {
        const difference = Math.round((new Date(date) - new Date(dates[index - 1])) / (1000 * 60 * 60 * 24));
        temporaryStreak = difference === 1 ? temporaryStreak + 1 : 1;
      }
      longestStreak = Math.max(longestStreak, temporaryStreak);
    });
    res.json({ activityLog, currentStreak, longestStreak, totalSolved: Object.values(data.solved).filter(Boolean).length, lmSolved: Object.values(data.lmSolved).filter(Boolean).length });
  } catch (error) { next(error); }
});

module.exports = router;
