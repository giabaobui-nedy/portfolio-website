import Link from 'next/link'
import Image from 'next/image'
import { BlogPostsTimeline } from 'app/components/posts'
import { Timeline, TimelineItem } from 'app/components/timeline'
import {
  SheetMusicBackdrop,
  SectionBreak1,
  SectionBreak2,
  SectionBreak3,
  SectionBreak4,
  EighthNote,
} from 'app/components/music'

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline ml-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <section className="relative">
      <SheetMusicBackdrop />

      <div className="relative z-10">
        {/* Hero */}
        <div className="flex items-center gap-5 mb-6">
          <Image
            src="/images/avatar-2026.jpeg"
            alt="Gia Bao Bui"
            width={80}
            height={80}
            className="rounded-full object-cover w-20 h-20 border-2 border-neutral-200 dark:border-neutral-700"
            priority
          />
          <div>
            <h1 className="mb-1 text-3xl font-semibold tracking-tight">
              Gia Bao Bui
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
              Software Engineer
              <EighthNote className="w-2.5 h-auto text-neutral-400 dark:text-neutral-600 sway" />
            </p>
          </div>
        </div>

        <p className="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
          Software Engineer and Highest Achieving Graduate in Computer Science
          with experience building production systems used in real-world
          environments.
        </p>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
          I work across the full system, from frontend interfaces to backend
          services and data flow, with a focus on making complex behaviour more
          understandable, reliable, and maintainable.
        </p>
        <p className="mb-8 text-neutral-800 dark:text-neutral-200 leading-relaxed">
          I tend to gravitate towards messy problems where requirements are still
          evolving and thoughtful engineering can bring structure, clarity, and
          confidence to the way a system operates.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>TypeScript</Badge>
          <Badge>Python</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Vue / Nuxt</Badge>
          <Badge>Node.js</Badge>
          <Badge>AWS</Badge>
          <Badge>Docker</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>CI/CD</Badge>
        </div>

        <div className="mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
          <h2 className="mb-3 text-base font-semibold tracking-tight">
            Recently Focused On
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              Re-architecting the frontend codebase to centralise API call logic
              across layers and enable stricter TypeScript typing around domain
              models and API data structures
            </li>
            <li>
              Investigating the current dev and staging AWS environments,
              including infrastructure shape and cost, to identify practical
              optimisation opportunities
            </li>
          </ul>
        </div>

        <SectionBreak1 />

        {/* Experience highlights */}
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Experience</h2>
        <Timeline>
          <TimelineItem date="Feb 2026 — Present">
            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Junior Full-Stack Developer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  Feb 2026 — Present
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                SONIQ Digital · Richmond, VIC
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Working across a cloud-native digital signage platform,
                contributing to both frontend (React/Next.js) and backend
                services in an event-driven AWS environment. Key work includes
                designing media transcoding pipelines for legacy CMS
                compatibility, leading responsive redesigns across multiple
                pages, and driving a large-scale TypeScript migration to improve
                maintainability.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem date="Mar 2024 — Jun 2025">
            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Software Engineering Intern / Casual Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  Mar 2024 — Jun 2025
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                CSIRO · Clayton, VIC
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Architected and delivered a lab automation system connecting
                real-time telemetry, firmware control, and secure user
                authentication. The work turned a manual experimental process
                into a safe, production-grade research platform used by 15-20
                active scientists.
              </p>
            </div>
          </TimelineItem>
        </Timeline>
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mt-4 mb-4"
        >
          View full experience
          <ArrowRightIcon />
        </Link>

        <SectionBreak2 />

        {/* Featured projects */}
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Featured Projects
        </h2>
        <div className="grid gap-4 mb-6">
          <Link
            href="/projects"
            className="piano-card group block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              Logistics Company Platform
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Cloud-native full-stack platform with Terraform-provisioned
              infrastructure (ECR, ECS Fargate, ALB) and CI/CD via GitHub Actions.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge>Next.js</Badge>
              <Badge>GraphQL</Badge>
              <Badge>Terraform</Badge>
              <Badge>AWS</Badge>
            </div>
          </Link>
          <Link
            href="/projects"
            className="piano-card group block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              Battery Manufacturing Digital Twin
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Modular, event-driven backend system with clear API boundaries,
              containerised with Docker and orchestrated with Docker Compose.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge>Python</Badge>
              <Badge>FastAPI</Badge>
              <Badge>WebSockets</Badge>
              <Badge>Docker</Badge>
            </div>
          </Link>
          <Link
            href="/projects"
            className="piano-card group block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              Traffic-based Route Guidance System
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Deep learning integrated with graph search algorithms for intelligent
              route planning with real-time traffic visualisation.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge>Python</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>NetworkX</Badge>
            </div>
          </Link>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-4"
        >
          View all projects
          <ArrowRightIcon />
        </Link>

        <SectionBreak3 />

        {/* Education */}
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Education</h2>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
              Bachelor of Computer Science (Professional)
            </h3>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              2022 — 2025
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            Swinburne University of Technology · GPA: 3.88 / 4.0
          </p>
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1 list-disc pl-5">
            <li>
              Recognised as Highest Achieving Graduate in the Bachelor of Computer
              Science (Professional) cohort
            </li>
            <li>
              Received lecturer compliment on the best undergraduate paper in
              Database Systems
            </li>
            <li>
              Swinburne Excellence International Scholarship (50%)
            </li>
          </ul>
        </div>

        <SectionBreak4 />

        {/* Blog */}
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Blog</h2>
        <div className="mb-8">
          <BlogPostsTimeline />
        </div>
      </div>
    </section>
  )
}
