export function QuarterNote({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="9" cy="34" rx="8" ry="5.5" transform="rotate(-15 9 34)" />
      <rect x="15" y="2" width="2.2" height="32" rx="1" />
    </svg>
  )
}

export function EighthNote({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="9" cy="36" rx="8" ry="5.5" transform="rotate(-15 9 36)" />
      <rect x="15" y="4" width="2.2" height="32" rx="1" />
      <path
        d="M17.2 4 C20 6, 24 10, 24 16 C23 13, 20 10, 17.2 9"
        fill="currentColor"
      />
    </svg>
  )
}

export function BeamedNotes({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="8" cy="36" rx="7" ry="4.5" transform="rotate(-15 8 36)" />
      <ellipse cx="30" cy="33" rx="7" ry="4.5" transform="rotate(-15 30 33)" />
      <rect x="13.5" y="4" width="2" height="32" rx="1" />
      <rect x="35.5" y="2" width="2" height="31" rx="1" />
      <rect x="13.5" y="4" width="24" height="2.5" rx="1" />
      <rect x="13.5" y="9" width="24" height="2.5" rx="1" />
    </svg>
  )
}

export function TrebleClef({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 75 C18 73, 12 68, 12 62 C12 56, 18 52, 22 52 C26 52, 30 55, 30 59 C30 63, 26 65, 23 65 C20 65, 18 63, 18 60 C18 58, 20 56, 22 56 L22 10 C22 6, 18 3, 16 3 C14 3, 12 5, 12 8 C12 12, 16 16, 20 20 L22 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── Large backdrop sheet music ── */

export function SheetMusicBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[140%] max-w-[900px] h-auto text-neutral-200/60 dark:text-neutral-800/50 drift-staff"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Stave group 1 — top, gentle S-curve */}
        <g strokeWidth="0.8" stroke="currentColor">
          <path d="M-20 80 C120 50, 280 110, 400 80 S580 50, 720 80" />
          <path d="M-20 92 C120 62, 280 122, 400 92 S580 62, 720 92" />
          <path d="M-20 104 C120 74, 280 134, 400 104 S580 74, 720 104" />
          <path d="M-20 116 C120 86, 280 146, 400 116 S580 86, 720 116" />
          <path d="M-20 128 C120 98, 280 158, 400 128 S580 98, 720 128" />
        </g>

        {/* Stave group 2 — reversed wave */}
        <g strokeWidth="0.7" stroke="currentColor">
          <path d="M-20 280 C150 310, 300 250, 450 280 S620 310, 720 280" />
          <path d="M-20 292 C150 322, 300 262, 450 292 S620 322, 720 292" />
          <path d="M-20 304 C150 334, 300 274, 450 304 S620 334, 720 304" />
          <path d="M-20 316 C150 346, 300 286, 450 316 S620 346, 720 316" />
          <path d="M-20 328 C150 358, 300 298, 450 328 S620 358, 720 328" />
        </g>

        {/* Stave group 3 — deeper wave */}
        <g strokeWidth="0.7" stroke="currentColor">
          <path d="M-20 500 C100 470, 250 540, 380 500 S560 460, 720 500" />
          <path d="M-20 512 C100 482, 250 552, 380 512 S560 472, 720 512" />
          <path d="M-20 524 C100 494, 250 564, 380 524 S560 484, 720 524" />
          <path d="M-20 536 C100 506, 250 576, 380 536 S560 496, 720 536" />
          <path d="M-20 548 C100 518, 250 588, 380 548 S560 508, 720 548" />
        </g>

        {/* Stave group 4 — loose wave */}
        <g strokeWidth="0.6" stroke="currentColor">
          <path d="M-20 720 C180 690, 320 760, 500 720 S650 690, 720 720" />
          <path d="M-20 732 C180 702, 320 772, 500 732 S650 702, 720 732" />
          <path d="M-20 744 C180 714, 320 784, 500 744 S650 714, 720 744" />
          <path d="M-20 756 C180 726, 320 796, 500 756 S650 726, 720 756" />
          <path d="M-20 768 C180 738, 320 808, 500 768 S650 738, 720 768" />
        </g>

        {/* Stave group 5 — bottom, gentle */}
        <g strokeWidth="0.6" stroke="currentColor">
          <path d="M-20 940 C140 970, 300 910, 420 940 S600 970, 720 940" />
          <path d="M-20 952 C140 982, 300 922, 420 952 S600 982, 720 952" />
          <path d="M-20 964 C140 994, 300 934, 420 964 S600 994, 720 964" />
          <path d="M-20 976 C140 1006, 300 946, 420 976 S600 1006, 720 976" />
          <path d="M-20 988 C140 1018, 300 958, 420 988 S600 1018, 720 988" />
        </g>
      </svg>
    </div>
  )
}

/* ── Spontaneous section breaks ── */

export function SectionBreak1() {
  return (
    <div className="relative my-12 h-16 pointer-events-none select-none" aria-hidden="true">
      <svg viewBox="0 0 400 50" fill="none" className="absolute left-[-10%] top-0 w-[70%] h-auto text-neutral-200 dark:text-neutral-800 sway [animation-delay:0.5s]">
        <path d="M0 12 C60 4, 140 22, 200 12 S320 4, 400 14" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 22 C60 14, 140 32, 200 22 S320 14, 400 24" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 32 C60 24, 140 42, 200 32 S320 24, 400 34" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 42 C60 34, 140 52, 200 42 S320 34, 400 44" stroke="currentColor" strokeWidth="0.9" />
      </svg>
      <QuarterNote className="absolute left-[15%] top-[10%] w-3.5 h-auto text-neutral-300 dark:text-neutral-700 float-note [animation-delay:1s]" />
      <EighthNote className="absolute right-[30%] top-[20%] w-3 h-auto text-neutral-300 dark:text-neutral-700 drift-note [animation-delay:0.3s]" />
      <BeamedNotes className="absolute right-[10%] top-[5%] w-6 h-auto text-neutral-200 dark:text-neutral-800 wander [animation-delay:2s]" />
    </div>
  )
}

export function SectionBreak2() {
  return (
    <div className="relative my-12 h-16 pointer-events-none select-none" aria-hidden="true">
      <svg viewBox="0 0 350 45" fill="none" className="absolute right-[-8%] top-1 w-[60%] h-auto text-neutral-200 dark:text-neutral-800 rotate-[-2deg] drift-staff [animation-delay:1s]">
        <path d="M0 8 C70 18, 150 0, 220 10 S300 18, 350 8" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 18 C70 28, 150 10, 220 20 S300 28, 350 18" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 28 C70 38, 150 20, 220 30 S300 38, 350 28" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 38 C70 48, 150 30, 220 40 S300 48, 350 38" stroke="currentColor" strokeWidth="0.9" />
      </svg>
      <TrebleClef className="absolute left-[8%] top-[-5%] w-5 h-auto text-neutral-300 dark:text-neutral-700 sway [animation-delay:2.5s] opacity-70" />
      <EighthNote className="absolute left-[40%] top-[25%] w-3 h-auto text-neutral-300 dark:text-neutral-700 wander [animation-delay:0.8s]" />
      <QuarterNote className="absolute right-[15%] top-[15%] w-3 h-auto text-neutral-300 dark:text-neutral-700 float-note [animation-delay:1.5s]" />
    </div>
  )
}

export function SectionBreak3() {
  return (
    <div className="relative my-12 h-16 pointer-events-none select-none" aria-hidden="true">
      <svg viewBox="0 0 300 50" fill="none" className="absolute left-[10%] top-0 w-[50%] h-auto text-neutral-200 dark:text-neutral-800 rotate-[1.5deg] float-staff [animation-delay:3s]">
        <path d="M0 10 C50 20, 120 2, 180 12 S260 22, 300 10" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 20 C50 30, 120 12, 180 22 S260 32, 300 20" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 30 C50 40, 120 22, 180 32 S260 42, 300 30" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 40 C50 50, 120 32, 180 42 S260 52, 300 40" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 50 C50 60, 120 42, 180 52 S260 62, 300 50" stroke="currentColor" strokeWidth="0.8" />
      </svg>
      <BeamedNotes className="absolute left-[5%] top-[10%] w-5 h-auto text-neutral-300 dark:text-neutral-700 drift-note [animation-delay:0.5s]" />
      <QuarterNote className="absolute right-[25%] top-[0%] w-3 h-auto text-neutral-300 dark:text-neutral-700 sway [animation-delay:3s]" />
      <EighthNote className="absolute right-[5%] top-[30%] w-4 h-auto text-neutral-200 dark:text-neutral-800 float-note [animation-delay:1.8s]" />
      <TrebleClef className="absolute left-[55%] top-[-10%] w-4 h-auto text-neutral-200 dark:text-neutral-800 wander [animation-delay:4s] opacity-50" />
    </div>
  )
}

export function SectionBreak4() {
  return (
    <div className="relative my-12 h-14 pointer-events-none select-none" aria-hidden="true">
      <svg viewBox="0 0 280 40" fill="none" className="absolute right-[5%] top-2 w-[45%] h-auto text-neutral-200 dark:text-neutral-800 rotate-[-3deg] sway [animation-delay:2s]">
        <path d="M0 6 C40 14, 100 0, 160 8 S240 16, 280 6" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 14 C40 22, 100 8, 160 16 S240 24, 280 14" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 22 C40 30, 100 16, 160 24 S240 32, 280 22" stroke="currentColor" strokeWidth="0.9" />
        <path d="M0 30 C40 38, 100 24, 160 32 S240 40, 280 30" stroke="currentColor" strokeWidth="0.9" />
      </svg>
      <svg viewBox="0 0 200 35" fill="none" className="absolute left-[0%] top-0 w-[35%] h-auto text-neutral-200 dark:text-neutral-800 rotate-[2deg] drift-staff [animation-delay:4s] opacity-60">
        <path d="M0 8 C30 2, 80 14, 120 8 S170 2, 200 8" stroke="currentColor" strokeWidth="0.7" />
        <path d="M0 16 C30 10, 80 22, 120 16 S170 10, 200 16" stroke="currentColor" strokeWidth="0.7" />
        <path d="M0 24 C30 18, 80 30, 120 24 S170 18, 200 24" stroke="currentColor" strokeWidth="0.7" />
      </svg>
      <EighthNote className="absolute left-[20%] top-[5%] w-3 h-auto text-neutral-300 dark:text-neutral-700 wander [animation-delay:1s]" />
      <QuarterNote className="absolute left-[50%] top-[20%] w-3 h-auto text-neutral-300 dark:text-neutral-700 drift-note [animation-delay:2.5s]" />
      <BeamedNotes className="absolute right-[8%] top-[5%] w-5 h-auto text-neutral-300 dark:text-neutral-700 float-note [animation-delay:0.5s]" />
    </div>
  )
}

/* ── Global floating notes (edges of viewport) ── */

const NOTE_LIGHT = 'text-neutral-300'
const NOTE_DARK = 'dark:text-neutral-600'
const NOTE_CLS = `${NOTE_LIGHT} ${NOTE_DARK}`

export function GlobalFloatingNotes() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <QuarterNote className={`absolute top-[8%] left-[5%] w-4 h-auto ${NOTE_CLS} float-note`} />
      <EighthNote className={`absolute top-[14%] left-[12%] w-3 h-auto ${NOTE_CLS} drift-note [animation-delay:2s]`} />
      <BeamedNotes className={`absolute top-[6%] right-[8%] w-7 h-auto ${NOTE_CLS} sway [animation-delay:1s]`} />
      <QuarterNote className={`absolute top-[18%] right-[4%] w-3.5 h-auto ${NOTE_CLS} wander [animation-delay:3.5s]`} />
      <EighthNote className={`absolute top-[35%] left-[3%] w-3.5 h-auto ${NOTE_CLS} wander [animation-delay:0.5s]`} />
      <TrebleClef className={`absolute top-[42%] left-[8%] w-5 h-auto ${NOTE_CLS} sway [animation-delay:4s] opacity-60`} />
      <QuarterNote className={`absolute top-[38%] right-[6%] w-3 h-auto ${NOTE_CLS} float-note [animation-delay:2.5s]`} />
      <BeamedNotes className={`absolute top-[50%] right-[3%] w-6 h-auto ${NOTE_CLS} drift-note [animation-delay:1.5s]`} />
      <EighthNote className={`absolute top-[65%] left-[6%] w-4 h-auto ${NOTE_CLS} drift-note [animation-delay:3s]`} />
      <QuarterNote className={`absolute top-[78%] left-[10%] w-3 h-auto ${NOTE_CLS} float-note [animation-delay:5s]`} />
      <BeamedNotes className={`absolute top-[70%] right-[7%] w-5 h-auto ${NOTE_CLS} wander [animation-delay:4.5s]`} />
      <EighthNote className={`absolute top-[85%] right-[5%] w-3.5 h-auto ${NOTE_CLS} sway [animation-delay:2s]`} />
      <TrebleClef className={`absolute top-[90%] left-[4%] w-4 h-auto ${NOTE_CLS} sway [animation-delay:6s] opacity-50`} />
      <QuarterNote className={`absolute top-[55%] right-[10%] w-2.5 h-auto ${NOTE_CLS} float-note [animation-delay:3.5s]`} />
    </div>
  )
}
