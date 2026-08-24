import type { Metadata } from 'next'
import { QuarterNote } from 'app/components/music'
import { Timeline, TimelineItem } from 'app/components/timeline'

export const metadata: Metadata = {
  title: 'Work Experience',
  description:
    'Professional experience as a Software Engineer across full-stack development, lab automation, and cloud-native systems.',
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}

type Role = {
  title: string
  company: string
  location: string
  period: string
  stack: string[]
  bullets: string[]
}

const roles: Role[] = [
  {
    title: 'Junior Software Engineer',
    company: 'SONIQ Digital',
    location: 'Richmond, VIC',
    period: 'Feb 2026 — Present',
    stack: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Vite',
      'NestJS',
      'Python (FastAPI)',
      'AWS',
      'Docker',
      'Git/GitHub',
      'CI/CD',
      'GitHub Actions',
    ],
    bullets: [
      'Contributing to frontend (React) and backend services (microservices-based and event-driven) within a production digital signage and content management platform (CMS) operating in a cloud-native AWS environment as a SaaS product.',
      'Diagnosed and resolved production issues across frontend and backend systems, ensuring reliability and minimal disruption to live digital signage deployments.',
      'Collaborated with product managers and engineers to define system requirements, workflows, and edge cases across multiple features in a distributed microservice environment.',
      'Designed and implemented a media transcoding pipeline to automatically convert 4K video assets into optimised Full HD outputs for a legacy CMS, improving playback compatibility and reducing asset delivery overhead across client deployments.',
      'Delivered a responsive redesign across multiple web pages by introducing mobile-first layout adjustments and reusable UI patterns, improving cross-device consistency and reducing duplicated styling logic.',
      'Analysed and visualised existing AWS infrastructure and service interactions to support a large-scale TypeScript migration (.js → .ts, .jsx → .tsx), improving type safety and long-term maintainability.',
      'Authored comprehensive technical documentation and system architecture diagrams for a complex microservice ecosystem, formalising design patterns and service flows to streamline engineering onboarding.',
      'Improved delivery workflow by restructuring Jira epics into smaller, iterative tasks, increasing progress visibility and supporting more continuous delivery practices within the team.',
      'Implemented subscription-tier enforcement across distributed microservices by fixing entitlement inconsistencies, ensuring reliable behaviour for free-tier users across interconnected services.',
      'Investigated and resolved a production scheduling defect where enabling monthly recurrence caused timeline events to disappear, reproducing the issue through targeted test scenarios, which were later integrated into the CI/CD pipeline, and correcting timezone-sensitive scheduling logic.',
      'Engineered the migration of device communication protocols to a modern cloud-native synchronisation service, improving real-time data reliability and system scalability across distributed signage displays.',
      'Implemented responsive layout support for portrait (1080×1920) and landscape (1920×1080) digital signage displays, ensuring consistent rendering across different screen orientations used in real-world deployments.',
      'Participated in debugging and resolving production issues as reported during QA, ensuring system reliability and minimal disruption to live deployments and improving UX.',
      'Engineered a scalable user inquiry and notification routing service using AWS Lambda, integrating with HubSpot CRM to automate and streamline customer feedback workflows.',
      'Designed and deployed an event-driven infrastructure scheduling service (AWS Lambda + EventBridge) to automatically shut down non-production environments, reducing development costs by 10–12% and staging costs by 33% through time-based optimisation.',
      'Analysed an existing data integration architecture and proposed a simplified serverless alternative to achieve eventual consistency while reducing system complexity and infrastructure cost.',
      'Led a TypeScript migration and architected a scalable frontend system: standardised core React Context providers (authentication, theme, layout) for cross-cutting state management, and established a layered data-flow pattern (DTO → mapper → domain → API → TanStack → manager/state hook) enforcing separation of concerns and strict type-safe boundaries.',
      'Built automated validation tooling to enforce architectural constraints, reducing coupling and ensuring consistent code quality, particularly for AI-assisted development.',
      'Implemented an event-driven integration pipeline connecting Shopify webhooks to internal microservices (EventBridge + SQS), enabling automated CMS trial activation flows and reducing customer onboarding friction between hardware purchases and software usage.',
      'Conducted a structured discovery phase with the managing director and engineering team to surface business context, define feature scope, and align on UX constraints and implementation best practices for a Shopify-to-CMS trial activation system — converting ambiguous requirements into a clear specification before development began.',
      'Implemented a no-payment Stripe trial subscription activation flow within the billing service, creating a Business Tier trial subscription at claim time without capturing payment details, and engineered deterministic idempotency key handling to safely prevent duplicate Stripe customer creation between the signup and activation flows.',
      'Designed and built the CMS activation claim page and end-to-end customer claim flow, handling token validation, authentication round-trips, account eligibility enforcement, and trial confirmation UI — connecting Shopify hardware purchasers to an active CMS Business Tier trial in a single email-driven interaction, successfully deployed to the development environment.',
      'Leveraged Claude Code with Jira MCP connectors to translate post-discussion engineering decisions into structured, PR-ready implementation plans with sequenced Jira tasks and delivery timelines, preserving decision context and enabling clearer team coordination.',
      "Diagnosed a silent CMS activation failure while end-to-end testing as a newly onboarded customer — hardware purchased on Shopify, activation code received, claim flow silently non-functional — inspecting CloudWatch logs across the billing and IAM microservices to trace the root cause to a JWT minter re-architecture that renamed the IAM identity-sync event topic, severing billing's subscription and blocking customer identity from syncing, then updated the billing service's event subscription and flagged event topic renames as a contract-breaking class requiring explicit versioning.",
      'Delivered an end-to-end device grouping feature: extended the FastAPI data model with a group association field, built group CRUD and bulk assign/unassign APIs, and shipped the complete React UI — a GroupsRail filter lens, color-coded GroupChip primitives, contextual action bars, bulk multi-select, and a React Table-based device grid redesign.',
      'Implemented a priority-based content fallback system: removed server-side conflict checking, built event-priority playback resolution and a per-schedule dedicated fallback field (FastAPI), and delivered the schedule editor UI — event priority selector, fallback-create affordance with informational banner, and soft-warning dialog for overlapping events.',
      'Authored a production-ready frontend design-system layer: established Apple-inspired semantic type and colour token systems, standardised control and icon sizes via CVA, extracted shared presentational primitives (Badge, EmptyState, StatusDot, list shell), and built opinionated form layout components (Field, Stack) to enforce consistent visual hierarchy across the codebase.',
      'Delivered UI improvements and accessibility upgrades for a client-facing hospital directory application (AWS Amplify): applied WCAG colour-contrast best practices, introduced alternating-row colour coding for readability, standardised typography and spacing across multi-level directory views, and added touch-interaction affordances — driven by iterative client and management feedback.',
      "Cut total non-production cloud spend by ~33% month-over-month (measured: 31–36% across dev, ~50% in staging) by re-architecting the transactional-outbox pipeline — replacing a managed DMS → Kinesis → Lambda fan-out with a poller sidecar co-located on each microservice's underutilised Fargate task and centralising the polling and EventBridge PutEvents logic into a shared library.",
      'Completed the transactional-outbox teardown by unifying three drifted vendored poller copies into a single versioned shared package across four microservices, and collapsing per-worker Fargate tasks behind a config-driven async supervisor.',
      'Migrated a production React codebase off freehand styling onto a centralised token system by building a custom check-styling lint guard — shipped advisory-first with an allowlist of existing offenders so CI stayed green — then eliminating inline styles, raw hex literals and arbitrary pixel utilities feature-by-feature until both allowlists were empty and the guard was promoted to a merge-blocking check.',
      'Collapsed two parallel React component libraries into a single barrel-exported hierarchy (primitives / composites / dialogs), retiring six duplicated components across ~80 files in sequential behaviour-neutral slices, and encoded the layering contract as ESLint rules escalated from warning to error once the last compatibility shim was deleted.',
      'Centralised the frontend data layer across four microservices — generating types directly from each service\'s live OpenAPI spec, consolidating DTO mappers, typed API functions and TanStack query/mutation hooks with query-key factories into per-service shared modules, then repointing every feature and deleting its per-feature plumbing — reducing a backend contract change to a one-place edit.',
      'Collaborated with a teammate on requirements analysis and domain modelling for a two-tier tenancy feature separating organisations (collections of people) from workspaces (collections of resources), then designed and built the frontend interface for managing both — turning an open-ended product concept into a defined scope and a working UI.',
    ],
  },
  {
    title: 'Software Engineering Intern / Casual Software Engineer',
    company: 'CSIRO',
    location: 'Clayton, VIC',
    period: 'Mar 2024 — Jun 2025',
    stack: [
      'Python (Flask, threading)',
      'JavaScript/TypeScript (Vue, Nuxt, Node)',
      'React Native',
      'Tailwind CSS',
      'PostgreSQL',
      'InfluxDB',
      'Modbus',
      'Docker Compose',
      'Git/GitHub',
      'Linux',
      'Azure Entra ID (SSO)',
      'ECharts',
      'WebSockets',
    ],
    bullets: [
      'Architected and delivered a production-grade lab automation system integrating real-time telemetry, firmware control, and secure user authentication, transforming a traditionally manual experimental workflow into a safe, automated and traceable research platform, working within a multi-disciplinary team of engineers to build the facility for a group of research scientists.',
      'Led full-stack development across Vue/Nuxt frontend, Node-based services, firmware interface, and SQL/InfluxDB databases, enabling remote hardware control and live monitoring in a production laboratory environment.',
      'Designed a scalable firmware abstraction layer bridging UI → server → firmware → Modbus hardware, replacing rigid single hardware bindings with configuration-driven patterns to support evolving multi-column setups without major refactors.',
      "Chose to invest in a reusable, configuration-driven hardware interface over a faster hardcoded API when a second control-box configuration arrived, trading longer initial delivery for unblocking the team's electronics engineer to continue R&D on the control box without repeat rework.",
      'Refactored a large Vue.js frontend by enforcing a presentational/container pattern — isolating API logic to page-level components and keeping UI components as pure, prop-driven skeletons — significantly improving maintainability and developer experience for the team, commended by a fellow software engineer.',
      'Redesigned and normalised the relational database schema to accurately model experiment lifecycles, user roles, and audit-ready comment versioning, improving data integrity, traceability, and long-term extensibility.',
      'Integrated real-time InfluxDB telemetry with dynamic ECharts visualisations and WebSocket updates via custom SVG components, enabling efficient time-range filtering and accurate experiment monitoring without page reload.',
      'Applied OOP principles (inheritance and abstraction) to reuse hardware communication logic and extend software classes for different hardware configurations, improving scalability across multiple control systems.',
      'Implemented safe, correct lock mechanisms to prevent concurrent access to the hardware and firmware-level caching to minimise hardware interference, contributing to stable three-month continuous production operation in a live laboratory setting.',
      'Improved long-term system reliability through ongoing maintenance — refining API design, introducing structured logging, and adding defensive error handling — sustaining stability across iterative production usage in a live laboratory setting.',
      'Implemented Azure Entra ID SSO and middleware-based role authorisation to enforce secure access control across the application, aligning the platform with institutional security standards.',
      'Containerised services using Docker and deployed to CSIRO\'s internal hosting environment via SSH, ensuring reproducible builds and consistent runtime configuration.',
      'Led the UI/UX redesign and domain analysis for a real-time refinery operations platform, translating operator requirements into a mobile-first React Native prototype to optimise industrial workflows and on-site monitoring.',
      'Conducted structured evaluation of cross-platform technologies (Flutter, .NET MAUI, React Native), guiding architectural decisions based on performance, maintainability, and alignment with the existing tech stacks.',
      'Applied end-to-end SDLC practices including requirements analysis, iterative prototyping, Jira-based task tracking, Git version control, formal SRS/SDD documentation, commissioning support, and knowledge transfer to ensure sustainable long-term maintenance.',
      'Collaborated closely with researchers, electronics engineers, and external vendors to align software behaviour with hardware capabilities, supporting commissioning activities, safe laboratory handover, and strengthened industry partnerships.',
      'Led technical demonstrations for internal leadership, visiting industry partners, and national intern cohorts, effectively communicating architectural decisions and the strategic value of applied software engineering within mineral processing research.',
      'Produced a structured handover suite at system completion — maintained SRS/SDD documentation spanning frontend to backend, built UML architecture diagrams used to brief a mechatronics engineer with adjacent software experience as a relay for future onboarding, and co-recorded a step-by-step deployment tutorial with the team lead to ensure the system was fully reproducible end-to-end.',
      'Improved platform accessibility and UI consistency across web and mobile interfaces by introducing ARIA labels, enforcing colour-contrast standards, and standardising typography, component styling, and interactive element patterns — aligning the system with web accessibility best practices.',
      'Designed a Figma prototype with variable-driven state management and dynamic view transitions to distil the most operationally critical data from an existing desktop system into a mobile-first interface for operators working in a constrained, hazardous on-site environment, clarifying scope and aligning the industry partner on layout and data load before React Native development began.',
      'Received a complimentary message from the Research Director from CSIRO. "It stimulated a great conversation at lunch about how compelling the solution is as well as the value of the great voice of customer work and how the user interfaces address the changing way people work."',
    ],
  },
]

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
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {role.company} · {role.location}
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {role.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

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
