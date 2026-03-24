'use client'

import { useState, useId, type ReactNode } from 'react'
import { BeamedNotes, EighthNote, QuarterNote } from 'app/components/music'

/* ── Small note SVGs for flying effect ── */

function QuarterNoteSm() {
  return (
    <svg viewBox="0 0 24 40" fill="currentColor" className="w-2.5 h-auto">
      <ellipse cx="9" cy="34" rx="8" ry="5.5" transform="rotate(-15 9 34)" />
      <rect x="15" y="2" width="2.2" height="32" rx="1" />
    </svg>
  )
}

function EighthNoteSm() {
  return (
    <svg viewBox="0 0 28 42" fill="currentColor" className="w-2.5 h-auto">
      <ellipse cx="9" cy="36" rx="8" ry="5.5" transform="rotate(-15 9 36)" />
      <rect x="15" y="4" width="2.2" height="32" rx="1" />
      <path d="M17.2 4 C20 6, 24 10, 24 16 C23 13, 20 10, 17.2 9" fill="currentColor" />
    </svg>
  )
}

function BeamedSm() {
  return (
    <svg viewBox="0 0 40 42" fill="currentColor" className="w-3.5 h-auto">
      <ellipse cx="8" cy="36" rx="7" ry="4.5" transform="rotate(-15 8 36)" />
      <ellipse cx="30" cy="33" rx="7" ry="4.5" transform="rotate(-15 30 33)" />
      <rect x="13.5" y="4" width="2" height="32" rx="1" />
      <rect x="35.5" y="2" width="2" height="31" rx="1" />
      <rect x="13.5" y="4" width="24" height="2.5" rx="1" />
      <rect x="13.5" y="9" width="24" height="2.5" rx="1" />
    </svg>
  )
}

function FlyingNotes({ trigger }: { trigger: number }) {
  if (trigger === 0) return null
  return (
    <div key={trigger} className="absolute inset-0 pointer-events-none">
      <span className="absolute left-1/2 top-1/2 text-neutral-400 dark:text-neutral-500 fly-out-1">
        <QuarterNoteSm />
      </span>
      <span className="absolute left-1/2 top-1/2 text-neutral-400 dark:text-neutral-500 fly-out-2">
        <EighthNoteSm />
      </span>
      <span className="absolute left-1/2 top-1/2 text-neutral-400 dark:text-neutral-500 fly-out-3">
        <BeamedSm />
      </span>
      <span className="absolute left-1/2 top-1/2 text-neutral-400 dark:text-neutral-500 fly-out-4">
        <QuarterNoteSm />
      </span>
    </div>
  )
}

/* ── Deterministic seed from date string ── */

function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++)
    h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

const FLOATING_ANIMS = ['float-note', 'drift-note', 'sway'] as const

function motionStyle(seed: number) {
  return {
    animationDelay: `${((seed * 0.37) % 3.5).toFixed(2)}s`,
  }
}

/* ── Main timeline marker ── */

function TimelineMarker({ date, seed }: { date?: string; seed: number }) {
  const [hoverCount, setHoverCount] = useState(0)
  const [show, setShow] = useState(false)
  const variant = seed % 3
  const motionClass = FLOATING_ANIMS[seed % FLOATING_ANIMS.length]

  const iconClassName = `h-auto transition-all duration-200 cursor-pointer ${
    show
      ? 'text-neutral-800 dark:text-neutral-200 scale-[1.35]'
      : 'text-neutral-400 dark:text-neutral-500'
  }`

  const icon =
    variant === 1 ? (
      <EighthNote className={`w-4 ${iconClassName}`} />
    ) : variant === 2 ? (
      <BeamedNotes className={`w-5 ${iconClassName}`} />
    ) : (
      <QuarterNote className={`w-4 ${iconClassName}`} />
    )

  return (
    <div
      className="absolute left-[-22px] top-0 z-10"
      onMouseEnter={() => {
        setShow(true)
        setHoverCount((c) => c + 1)
      }}
      onMouseLeave={() => setShow(false)}
    >
      <div className="relative">
        <span className={`block origin-center ${motionClass}`} style={motionStyle(seed)}>
          {icon}
        </span>
        <FlyingNotes trigger={hoverCount} />
        {show && date && (
          <div className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black text-xs font-medium px-2 py-1 rounded shadow-lg z-20">
            {date}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Timeline Item ── */

type TimelineItemProps = {
  date?: string
  children: ReactNode
}

function BulletNote({ seed }: { seed: number }) {
  const className = 'h-auto text-neutral-400 dark:text-neutral-500'

  const note =
    seed % 3 === 1 ? (
      <EighthNote className={`w-4 ${className}`} />
    ) : seed % 3 === 2 ? (
      <BeamedNotes className={`w-5 ${className}`} />
    ) : (
      <QuarterNote className={`w-4 ${className}`} />
    )

  return note
}

type TimelineListProps = {
  items: ReactNode[]
  className?: string
  itemClassName?: string
}

export function TimelineList({
  items,
  className = '',
  itemClassName = '',
}: TimelineListProps) {
  return (
    <ul className={`list-none pl-0 space-y-2 ${className}`.trim()}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-none marker:content-none flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 ${itemClassName}`.trim()}
        >
          <span className="mt-0.5 shrink-0" aria-hidden="true">
            <BulletNote seed={hashStr(`${index}-${String(item)}`)} />
          </span>
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function TimelineItem({ date, children }: TimelineItemProps) {
  const seed = hashStr(date ?? 'item')

  return (
    <div className="relative">
      <TimelineMarker date={date} seed={seed} />
      <div>{children}</div>
    </div>
  )
}

/* ── Timeline wrapper with curvy staff ── */

export function Timeline({ children }: { children: ReactNode }) {
  const id = useId()
  const sid = `staff${id.replace(/:/g, '')}`

  return (
    <div className="relative ml-3">
      {/* Curvy vertical music staff lines */}
      <svg
        className="absolute left-[-10px] top-0 h-full w-[22px] text-neutral-200 dark:text-neutral-800 pointer-events-none"
        width="22"
        height="100%"
        viewBox="0 0 22 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={sid} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <g stroke={`url(#${sid})`} fill="none" className="drift-staff [animation-delay:0.4s]">
          <path d="M2 0 C8 10, -2 22, 6 34 C14 46, -1 58, 7 70 C15 82, 1 92, 6 100" strokeWidth="0.75" />
          <path d="M6 0 C12 12, 2 24, 10 36 C18 48, 4 60, 12 72 C19 84, 7 94, 10 100" strokeWidth="0.75" />
          <path d="M10 0 C16 9, 6 21, 14 33 C21 45, 8 57, 16 69 C22 81, 10 92, 14 100" strokeWidth="0.75" />
          <path d="M14 0 C20 11, 10 23, 18 35 C25 47, 12 59, 20 71 C26 83, 14 94, 18 100" strokeWidth="0.75" />
          <path d="M18 0 C24 8, 14 20, 21 32 C27 44, 16 56, 22 68 C28 80, 17 91, 20 100" strokeWidth="0.75" />
        </g>
        <g stroke="currentColor" fill="none" className="float-staff opacity-60 [animation-delay:1.2s]">
          <path d="M2 0 C6 14, 0 25, 5 38 C10 51, 1 63, 6 76 C11 88, 3 96, 5 100" strokeWidth="0.35" />
          <path d="M18 0 C22 13, 16 24, 20 37 C24 50, 15 62, 20 75 C25 88, 17 96, 19 100" strokeWidth="0.35" />
        </g>
      </svg>

      <div className="ml-7 space-y-8">{children}</div>
    </div>
  )
}
