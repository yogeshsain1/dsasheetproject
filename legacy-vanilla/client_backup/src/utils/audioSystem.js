// ============================================================================
// CYBERPUNK WEB AUDIO API SYNTHESIZER — Dynamic Realtime SFX (Zero Latency)
// ============================================================================

let audioCtx = null
let soundEnabled = true

// Initialize Mute State from LocalStorage
try {
  const savedState = localStorage.getItem('dsa_sound_enabled')
  if (savedState !== null) {
    soundEnabled = JSON.parse(savedState)
  }
} catch {}

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export function isSoundEnabled() {
  return soundEnabled
}

export function toggleSound() {
  soundEnabled = !soundEnabled
  try {
    localStorage.setItem('dsa_sound_enabled', JSON.stringify(soundEnabled))
  } catch {}
  if (soundEnabled) {
    playCheckSound()
  }
  return soundEnabled
}

// 1. Cyberpunk Dual-Tone Check Sound (Problem Solved)
export function playCheckSound() {
  if (!soundEnabled) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime

  // Tone 1: High synth chime
  const osc1 = ctx.createOscillator()
  const gain1 = ctx.createGain()
  osc1.type = 'sine'
  osc1.frequency.setValueAtTime(587.33, now) // D5
  osc1.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12) // D6

  gain1.gain.setValueAtTime(0.18, now)
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25)

  osc1.connect(gain1)
  gain1.connect(ctx.destination)

  osc1.start(now)
  osc1.stop(now + 0.25)

  // Tone 2: Harmonic glow
  const osc2 = ctx.createOscillator()
  const gain2 = ctx.createGain()
  osc2.type = 'triangle'
  osc2.frequency.setValueAtTime(880, now + 0.05) // A5
  osc2.frequency.exponentialRampToValueAtTime(1760, now + 0.18) // A6

  gain2.gain.setValueAtTime(0.12, now + 0.05)
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3)

  osc2.connect(gain2)
  gain2.connect(ctx.destination)

  osc2.start(now + 0.05)
  osc2.stop(now + 0.3)
}

// 2. Low Decay Uncheck Sound (Problem Unchecked)
export function playUncheckSound() {
  if (!soundEnabled) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'sine'
  osc.frequency.setValueAtTime(320, now)
  osc.frequency.exponentialRampToValueAtTime(120, now + 0.12)

  gain.gain.setValueAtTime(0.15, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.12)
}

// 3. Cyberpunk Fanfare Arpeggio (Subtopic 100% Complete)
export function playCompleteSound() {
  if (!soundEnabled) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6

  notes.forEach((freq, idx) => {
    const startTime = now + idx * 0.08
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(freq, startTime)

    gain.gain.setValueAtTime(0.2, startTime)
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(startTime)
    osc.stop(startTime + 0.3)
  })
}

// 4. Crisp Futuristic Micro-Click (Tabs, Accordions, Buttons)
export function playClickSound() {
  if (!soundEnabled) return
  const ctx = getAudioContext()
  if (!ctx) return

  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'sine'
  osc.frequency.setValueAtTime(1200, now)
  osc.frequency.exponentialRampToValueAtTime(600, now + 0.04)

  gain.gain.setValueAtTime(0.08, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.04)
}
