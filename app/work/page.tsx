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
    title: 'Junior Full-Stack Developer',
    company: 'SONIQ Digital',
    location: 'Richmond, VIC',
    period: 'Feb 2026 — Present',
    stack: [
      'TypeScript',
      'React',
      'NestJS',
      'Python (FastAPI)',
      'AWS',
      'Docker',
      'Git/GitHub',
      'CI/CD',
      'GitHub Actions',
    ],
    bullets: [
      'Contributing to frontend (React/Next.js) and backend services (microservices-based and event-driven) within a production digital signage and content management platform operating in a cloud-native AWS environment.',
      'Designed and implemented a media transcoding pipeline to automatically convert 4K video assets into optimised Full HD outputs for a legacy CMS, improving playback compatibility and reducing asset delivery overhead across client deployments.',
      'Led responsive redesign across multiple web pages by introducing mobile-first layout adjustments and reusable UI patterns, improving cross-device consistency and reducing duplicated styling logic.',
      'Analysed and visualised existing AWS infrastructure and service interactions to support a large-scale TypeScript migration (.js → .ts, .jsx → .tsx), improving type safety and long-term maintainability.',
      'Authored comprehensive technical documentation and system architecture diagrams for a complex microservice ecosystem, formalising design patterns and service flows to streamline engineering onboarding.',
      'Improved delivery workflow by restructuring Jira epics into smaller, iterative tasks, increasing progress visibility and supporting more continuous delivery practices within the team.',
      'Implemented subscription-tier enforcement across distributed microservices by fixing entitlement inconsistencies, ensuring reliable behaviour for free-tier users across interconnected services.',
      'Investigated and resolved a production scheduling defect where enabling monthly recurrence caused timeline events to disappear, reproducing the issue through exact mapped backend test scenarios and correcting timezone-sensitive scheduling logic.',
      'Engineered the migration of device communication protocols to a modern cloud-native synchronisation service, improving real-time data reliability and system scalability across distributed signage displays.',
      'Implemented responsive layout support for portrait (1080×1920) and landscape (1920×1080) digital signage displays, ensuring consistent rendering across different screen orientations used in real-world deployments.',
      'Participated in debugging and resolving production issues as reported during QA, ensuring system reliability and minimal disruption to live deployments and improving UX.',
      'Designed and implemented a scalable user inquiry service enabling automated feedback routing to support teams (Lambda → AWS SES).',
      'Performed a comprehensive infrastructure audit and cost-analysis of cloud environments, developing data-driven strategies to reduce operational overhead and optimise AWS resource allocation.',
      'Performed infrastructure audits to identify and implement cloud cost-optimisation deployment strategies.',
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
      'Architected and delivered a production-grade lab automation system integrating real-time telemetry, firmware control, and secure user authentication, transforming a traditionally manual experimental workflow into a safe, automated and traceable research platform supporting a multi-disciplinary team of research scientists.',
      'Led full-stack development across Vue/Nuxt frontend, Node-based services, firmware interface, and SQL/InfluxDB databases, enabling remote hardware control and live monitoring in a production laboratory environment.',
      'Refactored the frontend in Vue.js to follow a component-based architecture by identifying common UI elements and defining clear properties, which improved codebase extensibility, maintainability, and consistency, commended by a fellow software engineer.',
      'Designed a scalable firmware abstraction layer bridging UI → server → firmware → Modbus hardware, replacing rigid single hardware bindings with configuration-driven patterns to support evolving multi-column setups without major refactors.',
      'Redesigned and normalised the relational database schema to accurately model experiment lifecycles, user roles, and audit-ready comment versioning, improving data integrity, traceability, and long-term extensibility.',
      'Integrated real-time InfluxDB telemetry with dynamic ECharts visualisations and WebSocket updates via custom SVG components, enabling efficient time-range filtering and accurate experiment monitoring without page reload.',
      'Applied OOP principles (inheritance and abstraction) to reuse hardware communication logic and extend software classes for different hardware configurations, improving scalability across multiple control systems.',
      'Implemented safe, correct lock mechanisms to prevent multithread access to the hardware and firmware-level caching to minimise hardware interference, contributing to stable three-month continuous production operation in a live laboratory setting.',
      'Improved system reliability by refining API design, introducing structured logging and defensive error handling, and implementing firmware-level caching to minimise hardware interference, contributing to stable three-month continuous production operation in a live laboratory setting.',
      'Implemented Azure Entra ID SSO and middleware-based role authorisation to enforce secure access control across the application, aligning the platform with institutional security standards.',
      'Containerised services using Docker and deployed to CSIRO\'s internal hosting environment via SSH, ensuring reproducible builds and consistent runtime configuration.',
      'Led the UI/UX redesign and domain analysis for a real-time refinery operations platform, translating operator requirements into a mobile-first React Native prototype to optimise industrial workflows and on-site monitoring.',
      'Conducted structured evaluation of cross-platform technologies (Flutter, .NET MAUI, React Native), guiding architectural decisions based on performance, maintainability, and alignment with existing tech stacks.',
      'Applied end-to-end SDLC practices including requirements analysis, iterative prototyping, Jira-based task tracking, Git version control, formal SRS/SDD documentation, commissioning support, and knowledge transfer to ensure sustainable long-term maintenance.',
      'Collaborated closely with researchers, electronics engineers, and external vendors to align software behaviour with hardware capabilities, supporting commissioning activities, safe laboratory handover, and strengthened industry partnerships.',
      'Led technical demonstrations for internal leadership, visiting industry partners, and national intern cohorts, effectively communicating architectural decisions and the strategic value of applied software engineering within mineral processing research.',
      'Received a complimentary message from the Research Director from CSIRO. "It stimulated a great conversation at lunch about how compelling the solution is as well as the value of the great voice of customer work and how the user interfaces address the changing way people work."'
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
