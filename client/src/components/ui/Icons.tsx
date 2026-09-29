import React from 'react'

interface IconProps {
  size?:  number
  style?: React.CSSProperties
}

interface CompanyIconProps extends IconProps {
  company: string
}

export function CompanyIcon({ company, size = 14, style = {} }: CompanyIconProps) {
  switch (company) {
    case 'Google':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      )
    case 'Amazon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    case 'Meta':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
          <path d="M12 12c-2-3-4.5-5-7-5C2.5 7 1 9 1 11.5S2.5 16 5 16c2.5 0 5-2 7-5m0 0c2 3 4.5 5 7 5 2.5 0 4-2 4-4.5S21.5 7 19 7c-2.5 0-5 2-7 5"/>
        </svg>
      )
    case 'Microsoft':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }}>
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022"/>
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00"/>
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF"/>
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900"/>
        </svg>
      )
    case 'Apple':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: '#A2AAAD', ...style }}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-.99 2.96 1.07.08 2.15-.55 2.8-1.36z"/>
        </svg>
      )
    case 'Netflix':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#E50914" style={{ flexShrink: 0, ...style }}>
          <path d="M5.398 0v24h4.425V12.185l6.398 11.815h4.381V0h-4.425v11.815L9.779 0z"/>
        </svg>
      )
    case 'Uber':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--white-90)', ...style }}>
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v10M7 12h10"/>
        </svg>
      )
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, ...style }}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
  }
}

interface TopicIconProps {
  topicId?: string
  color?:   string
  size?:    number
}

export function TopicIcon({ topicId, color = 'currentColor', size = 20 }: TopicIconProps) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth: '2',
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  }

  if (topicId?.includes('basic00')) return <svg {...props}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  if (topicId?.includes('array') || topicId?.includes('topic01')) return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
  if (topicId?.includes('pointers') || topicId?.includes('topic02')) return <svg {...props}><path d="M18 8L22 12L18 16M6 8L2 12L6 16M2 12H22"/></svg>
  if (topicId?.includes('sliding') || topicId?.includes('topic03')) return <svg {...props}><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M7 6v12M13 6v12M2 12h20"/></svg>
  if (topicId?.includes('stack') || topicId?.includes('topic04')) return <svg {...props}><path d="M4 19h16M4 14h16M4 9h16M4 4h16"/></svg>
  if (topicId?.includes('binary') || topicId?.includes('topic05')) return <svg {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6M8 11h6"/></svg>
  if (topicId?.includes('link') || topicId?.includes('topic06')) return <svg {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  if (topicId?.includes('tree') || topicId?.includes('topic07')) return <svg {...props}><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M12 12L6 16M12 12l6 4"/></svg>
  if (topicId?.includes('trie') || topicId?.includes('topic08')) return <svg {...props}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  if (topicId?.includes('heap') || topicId?.includes('topic09')) return <svg {...props}><path d="m12 3-9 5 9 5 9-5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>
  if (topicId?.includes('backtrack') || topicId?.includes('topic10')) return <svg {...props}><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
  if (topicId?.includes('graph') || topicId?.includes('topic11') || topicId?.includes('topic12')) return <svg {...props}><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8.5" y1="7.5" x2="15.5" y2="7.5"/><line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/><line x1="16.5" y1="8.5" x2="13.5" y2="15.5"/></svg>
  if (topicId?.includes('dp') || topicId?.includes('topic13') || topicId?.includes('topic14')) return <svg {...props}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4"/></svg>
  if (topicId?.includes('greedy') || topicId?.includes('topic15')) return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  if (topicId?.includes('interval') || topicId?.includes('topic16')) return <svg {...props}><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 8 3 12 8 16"/><polyline points="16 8 21 12 16 16"/></svg>
  if (topicId?.includes('bit') || topicId?.includes('topic17')) return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="10" cy="18" r="2" fill="currentColor"/></svg>

  return <svg {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
}

export function FlameIcon({ size = 16, color = '#f59e0b', style = {} }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/>
    </svg>
  )
}

export function SparklesIcon({ size = 16, color = 'var(--green)', style = {} }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>
    </svg>
  )
}
