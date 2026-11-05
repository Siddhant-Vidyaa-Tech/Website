// Service icons as inline SVGs – no external dependencies needed
const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  curriculum: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  content: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  assessment: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  elearning: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  editorial: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  accessibility: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="5" r="1.5" />
      <path d="M6 12l2-4h8l2 4M9 12l1 7m4-7l-1 7m-2-7h2" />
    </svg>
  ),
  interactive: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  video: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  ),
  migration: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  qa: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  it: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  staffing: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  // Industry icons
  publishers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  ),
  school: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  edtech: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  university: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
};

interface ServiceIconProps {
  name: keyof typeof icons;
  className?: string;
}

export default function ServiceIcon({ name, className = "w-6 h-6" }: ServiceIconProps) {
  const Icon = icons[name] || icons.content;
  return <Icon className={className} aria-hidden="true" />;
}

export { icons };

export type DeliverableIconName =
  | "curriculum"
  | "sequence"
  | "progression"
  | "lesson"
  | "mapping"
  | "integration";

const deliverableIcons: Record<
  DeliverableIconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  curriculum: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 7.5c4-2.2 8-.8 11 1.2v16c-3-2-7-3.4-11-1.2zM27 7.5c-4-2.2-8-.8-11 1.2v16c3-2 7-3.4 11-1.2z" />
      <path d="M8 11c2-.7 4-.4 5.8.4M8 15c2-.7 4-.4 5.8.4M24 11c-2-.7-4-.4-5.8.4M24 15c-2-.7-4-.4-5.8.4" />
      <path d="M16 8.7v15.8" stroke="#c62626" />
      <path d="M8 20c2-.5 4-.2 5.8.6M24 20c-2-.5-4-.2-5.8.6" stroke="#c62626" />
    </svg>
  ),
  sequence: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="5.5" width="19" height="23" rx="3" />
      <path d="M12 4h9a2 2 0 012 2v2H10V6a2 2 0 012-2z" />
      <path d="M15 14h7M15 20h7M15 25h7" />
      <path d="m10 14 1.3 1.3 2.2-2.5M10 20l1.3 1.3 2.2-2.5M10 25l1.3 1.3 2.2-2.5" stroke="#c62626" />
    </svg>
  ),
  progression: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 27h23M7 27v-7h5v7M15 27V14h5v13M23 27V8h5v19" />
      <path d="m6 15 8-5 6 1 8-7M22 4h6v6" stroke="#c62626" />
    </svg>
  ),
  lesson: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4.5" y="5" width="23" height="20" rx="2.5" />
      <path d="M5 10h22M9 15h9M9 19h7" />
      <path d="m17 22 5-3 5 3-5 3zM22 25v3" stroke="#c62626" />
      <circle cx="8" cy="7.5" r=".6" fill="#c62626" stroke="#c62626" />
      <circle cx="11" cy="7.5" r=".6" fill="#c62626" stroke="#c62626" />
    </svg>
  ),
  mapping: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 4 12 6-12 6L4 10zM4 16l12 6 12-6M4 22l12 6 12-6" />
      <path d="m4 16 12 6 12-6" stroke="#c62626" />
    </svg>
  ),
  integration: (props) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="16" cy="16" r="4" />
      <circle cx="16" cy="5" r="2.5" stroke="#c62626" />
      <circle cx="6" cy="23" r="2.5" stroke="#c62626" />
      <circle cx="26" cy="23" r="2.5" stroke="#c62626" />
      <path d="m16 8 0 4M8.2 21.5l4.4-3M23.8 21.5l-4.4-3" />
      <path d="m12.5 15.5 3.5-2 3.5 2v3l-3.5 2-3.5-2z" stroke="#c62626" />
    </svg>
  ),
};

export function DeliverableIcon({
  name,
  className = "",
}: {
  name: DeliverableIconName;
  className?: string;
}) {
  const Icon = deliverableIcons[name];
  return <Icon className={className} aria-hidden="true" />;
}
