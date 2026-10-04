import type { Metadata } from 'next'
import { QuarterNote } from 'app/components/music'
import { Timeline, TimelineItem } from 'app/components/timeline'
import { Badge } from 'app/components/badge'

export const metadata: Metadata = {
  title: 'Work Experience',
  description:
    'Professional experience as a Software Engineer across full-stack development, lab automation, and cloud-native systems.',
}

type Role = {
  title: string
  company: string
  location: string
  period: string
  stack: string[]
  intro: string
  highlights: string[]
  groups: { title: string; bullets: string[] }[]
  quote?: { text: string; source: string }
}

const roles: Role[] = [
  {
    title: "Junior Software Engineer",
    company: "SONIQ Digital",
    location: "Richmond, VIC",
    period: "Feb 2026 — Present",
    stack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "NestJS",
      "Python (FastAPI)",
      "AWS",
      "Docker",
      "Git/GitHub",
      "CI/CD",
      "GitHub Actions",
    ],
    intro: "Build the React frontend and the event-driven backend microservices behind a live digital signage and content management platform (CMS), sold as a SaaS product and running on AWS.",
    highlights: [
      "Re-architected the transactional-outbox pipeline across three environments, replacing a managed DMS → Kinesis → Lambda fan-out with a small poller running on each microservice's already-underused Fargate task that publishes straight to EventBridge. This removed the recurring DMS and Kinesis spend entirely and cut total cloud cost by ~26% month-over-month (trending to ~40% once the teardown finished).",
      "Indexed a bloated 1.7 GB outbox table to clear an RDS cost regression: a once-per-second ORDER BY created_at claim query was scanning the whole table with no index to help it, doubling an Aurora Serverless cluster's daily compute bill for six weeks. Shipped a composite (created_at, id) index as a schema migration across four services and twelve databases, returning spend to its pre-regression baseline, and documented it in the shared poller package to stop the same failure at production scale.",
      "Built a TypeScript CLI to move customers off a legacy CMS one account at a time. It pulls media, templates, campaigns and schedules through Playwright (skipping expired schedules), recreates them through the new platform's APIs, and can dry-run, verify and roll back each load. On staging it moved enterprise accounts with 8 to 10 GB of media in about an hour each, and 189 Vitest tests cover it.",
      "Cut development costs by ~20% and staging costs by 33%, by building an event-driven scheduling service (AWS Lambda + EventBridge) that shuts non-production environments down overnight and at weekends, and by fixing a cron bug that had left weekends running around the clock.",
      "Reduced a backend contract change to a one-place edit instead of scattered fixes across every feature, by generating TypeScript types from four microservices' live OpenAPI specs and grouping DTO mappers, typed API functions and TanStack hooks into per-service shared modules.",
    ],
    groups: [
      {
        title: "Cloud cost and infrastructure",
        bullets: [
          "Consolidated three copies of the outbox poller that had drifted apart into one versioned shared package used by four microservices, and collapsed per-worker Fargate tasks behind a config-driven async supervisor, finishing the transactional-outbox teardown.",
          "Worked hands-on in AWS infrastructure as code across three systems: wrote the environment scheduler (Lambda + EventBridge) as its own CDK stack, wrote the Terraform for the Shopify integration's EventBridge resources, and tore down the CDK stacks behind a retired DMS → Kinesis pipeline.",
          "Unblocked a large TypeScript migration (.js → .ts, .jsx → .tsx) that made the codebase type-safe and easier to maintain, by mapping and diagramming the existing AWS infrastructure and how each service talks to the others.",
          "Routed user inquiries and notifications straight into HubSpot CRM with a serverless AWS Lambda service, taking manual handling out of the customer feedback loop.",
        ],
      },
      {
        title: "Event-driven backend and integrations",
        bullets: [
          "Wired Shopify webhooks into internal microservices (EventBridge + SQS) so a hardware purchase activates a CMS trial on its own, with no manual setup between buying the device and using the software.",
          "Built the Stripe trial activation flow in the billing service so customers can start a Business Tier trial without entering card details, using deterministic idempotency keys to stop a duplicate Stripe customer being created between signup and activation.",
          "Migrated device communication onto a cloud-native synchronisation service, so data syncs reliably in real time across distributed signage displays and more displays can be added.",
          "Aligned free-tier limits across distributed microservices, by fixing entitlement checks that disagreed with each other from service to service.",
          "Automated 4K-to-Full-HD transcoding for a legacy CMS by building a media pipeline, so client uploads play back correctly and less video data ships to each site.",
        ],
      },
      {
        title: "Frontend architecture and design system",
        bullets: [
          "Led a TypeScript migration that gave a React frontend strict type-safe boundaries and one clear path for data, by standardising core Context providers (authentication, theme, layout) for shared state and setting a layered data flow (DTO → mapper → domain → API → TanStack → state hook).",
          "Standardised how the UI looks and behaves across the codebase with a design-system layer: Apple-inspired semantic type and colour tokens, fixed control and icon sizes via CVA, shared presentational primitives (Badge, EmptyState, StatusDot, list shell), and form layout components (Field, Stack).",
          "Led a production React codebase's move off ad-hoc styling onto a central token system by writing a custom check-styling lint guard, shipping it advisory-first with an allowlist so CI stayed green, then stripping inline styles, raw hex colours and arbitrary pixel utilities feature by feature. Adoption sped up as more base components landed, since each new one cut the friction for the next.",
          "Merged two parallel React component libraries into one barrel-exported hierarchy (primitives / composites / dialogs), retiring six duplicated components across ~80 files in small steps that changed no behaviour, and locked the layering in as ESLint rules raised from warning to error once the last compatibility shim was deleted.",
          "Continued the design-system consistency effort past the styling-token migration: retokenised the route-fallback loading screen off hardcoded hex values, and migrated seven resource-list pages off duplicated first-run empty-state markup onto one shared component with consistent copy.",
          "Rebuilt several web pages mobile-first with reusable UI patterns, so they work on any screen size and no longer carry duplicated CSS.",
          "Added layout support for portrait (1080×1920) and landscape (1920×1080) screens, so signage renders correctly in both orientations customers mount displays in.",
          "Reworked a client-facing hospital directory app (AWS Amplify) for readability and touch use: applied WCAG colour-contrast rules, added alternating row colours, standardised type and spacing across multi-level directory views, and added touch affordances, all shaped by rounds of client and management feedback.",
        ],
      },
      {
        title: "Product features",
        bullets: [
          "Turned a Shopify hardware purchase into an active CMS Business Tier trial in one email-driven step, by building the claim page and the flow behind it: token validation, authentication round-trips, account eligibility checks and trial confirmation UI. Deployed to the development environment.",
          "Shipped device grouping end to end, so users can filter and manage devices in bulk by group, by adding a group field to the FastAPI data model, building group CRUD and bulk assign/unassign APIs, and building the React UI: a group filter rail, colour-coded chips, contextual action bars, multi-select, and a React Table device grid.",
          "Kept screens from going blank when schedules overlap or run out, by replacing server-side conflict checking with priority-based playback resolution and a per-schedule fallback field (FastAPI), and building the schedule editor UI: priority selector, fallback-create prompt with an explanatory banner, and a soft warning on overlapping events.",
          "Designed and built the frontend for a two-tier tenancy feature separating organisations (groups of people) from workspaces (groups of resources), after pairing with a teammate on requirements and domain modelling to turn an open-ended product concept into a defined scope.",
          "Reworked the schedule editor's week view so events can be dragged and resized directly on the calendar grid instead of only through the event dialog.",
          "Diagnosed an N+1 request pattern on the media root and dashboard: 14 folders triggered 15 requests, and one end-to-end test spent 75s across 28 requests. Fixed it by replacing whole-library fetching with per-directory and per-ID reads, and cut a redundant per-folder mediaCount request. Rebuilt the page as a Drive-style browser (unified New menu, sortable table, type-filtered grid, root-level uploads), then brought back account-wide browsing by content type as an explicit opt-in mode instead of the old first-load fan-out.",
        ],
      },
      {
        title: "Debugging and reliability",
        bullets: [
          "Caught a silently broken customer activation flow in the development environment before it reached production, by tracing CloudWatch logs across the billing and IAM microservices to a renamed event topic that had cut a service's subscription, then got event-topic renames treated as a breaking change that needs explicit versioning.",
          "Found why 30 of 1,153 videos stayed stuck in processing during a staging migration: upload bursts throttled an endpoint lookup that the media worker never cached. Traced it through the dead-letter queue, MediaConvert jobs and worker logs, filed the cause with a proposed fix, and paced uploads with crash recovery so the migration could keep going.",
          "Fixed a production bug where switching on monthly recurrence made timeline events disappear, by reproducing it with targeted tests and correcting timezone-sensitive scheduling logic, then added those tests to the CI/CD pipeline so it cannot come back unnoticed.",
          "Cleared production issues as QA reported them across billing, scheduling and configuration screens (entitlement values disagreeing across widgets, missing form validation, an unsurfaced tier-downgrade rejection), keeping live deployments stable and the UI predictable for customers.",
        ],
      },
      {
        title: "Collaboration and delivery",
        bullets: [
          "Scoped features with product managers and engineers before any code was written, agreeing requirements, user workflows and edge cases so work spanning several microservices started from one shared spec.",
          "Converted a vague request into a written spec before any code was written, by running a discovery phase with the managing director and the engineering team on the business context, the scope and the UX limits of a Shopify-to-CMS trial activation system.",
          "Documented the architecture of a large microservice system in writing and diagrams, capturing the service flows and design patterns that until then lived only in people's heads, so new engineers could get up to speed on their own.",
          "Split large Jira epics into small tasks that each ship on their own, making team progress visible week to week and letting work land continuously instead of in one lump.",
          "Translated decisions from engineering discussions into PR-ready plans with ordered Jira tasks and delivery dates, using Claude Code with Jira MCP connectors, so the reasoning behind each decision stayed attached to the work.",
        ],
      },
    ],
  },
  {
    title: "Software Engineering Intern / Casual Software Engineer",
    company: "CSIRO",
    location: "Clayton, VIC",
    period: "Mar 2024 — Jun 2025",
    stack: [
      "Python (Flask, threading)",
      "JavaScript/TypeScript (Vue, Nuxt, Node)",
      "React Native",
      "Tailwind CSS",
      "PostgreSQL",
      "InfluxDB",
      "Modbus",
      "Docker Compose",
      "Git/GitHub",
      "Linux",
      "Azure Entra ID (SSO)",
      "ECharts",
      "WebSockets",
    ],
    intro: "Architected and delivered a production-grade lab automation system integrating real-time telemetry, firmware control, and secure user authentication, transforming a traditionally manual experimental workflow into a safe, automated and traceable research platform, working within a multi-disciplinary team of engineers to build the facility for a group of research scientists.",
    highlights: [
      "Enabled remote hardware control and live monitoring in a production laboratory, by leading full-stack development across a Vue/Nuxt frontend, Node-based services, a firmware interface, and SQL/InfluxDB databases.",
      "Designed a scalable firmware abstraction layer bridging UI → server → firmware → Modbus hardware, replacing rigid single hardware bindings with configuration-driven patterns to support evolving multi-column setups without major refactors.",
      "Implemented safe, correct lock mechanisms to prevent concurrent access to the hardware and firmware-level caching to minimise hardware interference, contributing to stable three-month continuous production operation in a live laboratory setting.",
      "Integrated real-time InfluxDB telemetry with dynamic ECharts visualisations and WebSocket updates via custom SVG components, enabling efficient time-range filtering and accurate experiment monitoring without page reload.",
      "Led the UI/UX redesign and domain analysis for a real-time refinery operations platform, translating operator requirements into a mobile-first React Native prototype to optimise industrial workflows and on-site monitoring.",
    ],
    groups: [
      {
        title: "Architecture and backend",
        bullets: [
          "Chose to invest in a reusable, configuration-driven hardware interface over a faster hardcoded API when a second control-box configuration arrived, trading longer initial delivery for unblocking the team's electronics engineer to continue R&D on the control box without repeat rework.",
          "Applied OOP principles (inheritance and abstraction) to reuse hardware communication logic and extend software classes for different hardware configurations, improving scalability across multiple control systems.",
          "Redesigned and normalised the relational database schema to accurately model experiment lifecycles, user roles, and audit-ready comment versioning, improving data integrity, traceability, and long-term extensibility.",
          "Improved long-term system reliability through ongoing maintenance (refining API design, introducing structured logging, and adding defensive error handling), sustaining stability across iterative production usage in a live laboratory setting.",
          "Implemented Azure Entra ID SSO and middleware-based role authorisation to enforce secure access control across the application, aligning the platform with institutional security standards.",
          "Containerised services using Docker and deployed to CSIRO's internal hosting environment via SSH, for reproducible builds and consistent runtime configuration.",
        ],
      },
      {
        title: "Frontend and UX",
        bullets: [
          "Refactored a large Vue.js frontend into a structure a fellow engineer commended for its maintainability and developer experience, by enforcing a presentational/container pattern that isolated API logic to page-level components and kept UI components pure and prop-driven.",
          "Aligned web and mobile interfaces with web accessibility best practices and a consistent UI, by introducing ARIA labels, enforcing colour-contrast standards, and standardising typography, component styling, and interactive element patterns.",
          "Designed a Figma prototype with variable-driven state management and dynamic view transitions to distil the most operationally critical data from an existing desktop system into a mobile-first interface for operators working in a constrained, hazardous on-site environment, clarifying scope and aligning the industry partner on layout and data load before React Native development began.",
          "Conducted structured evaluation of cross-platform technologies (Flutter, .NET MAUI, React Native), guiding architectural decisions based on performance, maintainability, and alignment with the existing tech stacks.",
        ],
      },
      {
        title: "Delivery and communication",
        bullets: [
          "Applied end-to-end SDLC practices including requirements analysis, iterative prototyping, Jira-based task tracking, Git version control, formal SRS/SDD documentation, commissioning support, and knowledge transfer to ensure sustainable long-term maintenance.",
          "Collaborated closely with researchers, electronics engineers, and external vendors to align software behaviour with hardware capabilities, supporting commissioning activities, safe laboratory handover, and strengthened industry partnerships.",
          "Led technical demonstrations for internal leadership, visiting industry partners, and national intern cohorts, effectively communicating architectural decisions and the strategic value of applied software engineering within mineral processing research.",
          "Produced a structured handover suite at system completion: maintained SRS/SDD documentation spanning frontend to backend, built UML architecture diagrams used to brief a mechatronics engineer with adjacent software experience as a relay for future onboarding, and co-recorded a step-by-step deployment tutorial with the team lead to ensure the system was fully reproducible end-to-end.",
        ],
      },
    ],
    quote: {
      text: "It stimulated a great conversation at lunch about how compelling the solution is as well as the value of the great voice of customer work and how the user interfaces address the changing way people work.",
      source: 'Research Director, CSIRO',
    },
  },
]

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 marker:text-neutral-400 dark:marker:text-neutral-600">
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  )
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform duration-200 group-open:rotate-90"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight flex items-center gap-3">
        Work Experience
        <QuarterNote className="w-4 h-auto text-neutral-300 dark:text-neutral-700 sway" />
      </h1>
      <p className="mb-10 text-neutral-600 dark:text-neutral-400">
        Building production systems across frontend, backend, and cloud
        infrastructure.
      </p>

      <Timeline>
        {roles.map((role) => (
          <TimelineItem key={role.company} date={role.period}>
            <article>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {role.title}
                </h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {role.company} · {role.location}
              </p>
              <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 mb-4">
                {role.intro}
              </p>

              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                Highlights
              </h3>
              <div className="mb-4">
                <BulletList bullets={role.highlights} />
              </div>

              <div className="mb-4 divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
                {role.groups.map((group) => (
                  <details key={group.title} className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-2 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-accent transition-colors [&::-webkit-details-marker]:hidden">
                      <ChevronIcon />
                      {group.title}
                      <span className="ml-auto text-xs font-normal text-neutral-500 dark:text-neutral-400">
                        {group.bullets.length}
                      </span>
                    </summary>
                    <div className="pb-3 pl-5">
                      <BulletList bullets={group.bullets} />
                    </div>
                  </details>
                ))}
              </div>

              {role.quote && (
                <blockquote className="mb-4 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                  “{role.quote.text}”
                  <footer className="mt-1 not-italic text-xs text-neutral-500 dark:text-neutral-400">
                    {role.quote.source}
                  </footer>
                </blockquote>
              )}

              <div className="flex flex-wrap gap-1.5">
                {role.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </article>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
