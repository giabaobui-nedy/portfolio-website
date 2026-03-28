import type { Metadata } from 'next'
import { BeamedNotes } from 'app/components/music'
import { Timeline, TimelineItem } from 'app/components/timeline'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Personal and academic projects spanning cloud-native platforms, AI systems, mobile apps, and decentralised applications.',
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline ml-1 opacity-50"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

type Project = {
  title: string
  subtitle: string
  year: string
  stack: string[]
  bullets: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Logistics Company Platform',
    subtitle: 'Cloud-Native Full Stack',
    year: '2025',
    stack: ['Next.js', 'GraphQL', 'Terraform', 'GitHub Actions', 'AWS'],
    bullets: [
      'Designed and implemented a containerised full-stack platform with infrastructure provisioned using Terraform (ECR, ECS Fargate, ALB, IAM, CloudWatch).',
      'Built CI/CD pipelines using GitHub Actions to automate linting, type checking, Docker image builds, and conditional production deployments with OIDC-based AWS authentication.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/giabaobui-nedy/Dad-Project',
      },
    ],
  },
  {
    title: 'Weekly Planner',
    subtitle: 'Clean Architecture System',
    year: '2024',
    stack: ['Java', 'JavaFX', 'SQLite', 'ORMLite', 'JUnit'],
    bullets: [
      'Designed and implemented a layered system using Clean Architecture (Ports & Adapters), separating domain logic from infrastructure to ensure testability, extensibility, and maintainability.',
      'Developed a rule-based weekly planning algorithm to schedule tasks based on priority, constraints, and user-defined working hours, supporting deterministic and scalable planning behaviour.',
      'Implemented repository and DAO layers with ORMLite, and validated the system\u2019s core use cases and data mapping through comprehensive JUnit integration and unit testing suites.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/giabaobui-nedy/WeeklyPlanner',
      },
    ],
  },
  {
    title: 'Battery Manufacturing Digital Twin',
    subtitle: 'Capstone Project',
    year: '2025',
    stack: ['Python', 'FastAPI', 'WebSockets', 'Docker', 'PostgreSQL'],
    bullets: [
      'Designed a modular, event-driven backend system with clear API boundaries to support extensibility and correctness as system requirements evolved.',
      'Collaborated with frontend and data teams to define API contracts and support end-to-end system integration.',
      'Containerised system components using Docker and orchestrated multi-service deployments with Docker Compose to support repeatable development and testing environments.',
    ],
    links: [
      {
        label: 'Demo',
        href: 'https://youtu.be/Zto54hkfC2M',
      },
    ],
  },
  {
    title: 'Traffic-based Route Guidance System',
    subtitle: 'AI / Deep Learning',
    year: '2024',
    stack: ['Python', 'TensorFlow', 'NetworkX'],
    bullets: [
      'Integrated Deep Learning models with graph search algorithms and a GUI, delivering intelligent route planning that informs users of the optimal path between two intersections and the ETA.',
      'Visualised map routing data and coordinate traversal algorithms using NetworkX, simulating real-world network topographies akin to lat/long mapping systems.',
      'Enforced effective OOP to abstract different stages of developing a DL model, creating a reusable BaseModel interface and delegating each model\u2019s specific implementation in its subclass.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/giabaobui-nedy/COS30019-TBRGS',
      },
      {
        label: 'Demo',
        href: 'https://youtu.be/iLoNkyOPR7Y',
      },
    ],
  },
  {
    title: 'Planner & Diary',
    subtitle: 'Android App',
    year: '2023',
    stack: ['Kotlin', 'Android Jetpack', 'Room', 'LiveData'],
    bullets: [
      'Built an Android planner with auto-generated diary logs, enabling full CRUD operations on tasks and a clear separation of concerns by applying the Repository pattern with Android Room, ViewModel, and LiveData.',
      'Achieved faster app startup and responsiveness — reduced startup timing and frame timing by 7.1% on startup, 4.56% on scrolling, and 3.52% on navigating by adding Baseline Profiles, verified using Macrobenchmark tests.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/giabaobui-nedy/COS30017-HD-Mobile-Application/tree/level3-stage2',
      },
      {
        label: 'Demo',
        href: 'https://youtu.be/y-l_yVBvjus',
      },
    ],
  },
  {
    title: 'Decentralised Trading Platform',
    subtitle: 'Blockchain / Web3',
    year: '2023',
    stack: ['Python', 'React', 'Ganache', 'MySQL', 'FastAPI'],
    bullets: [
      'Designed a system with two databases aiming to improve data security and integrity by classifying which data to be stored on-chain (Ganache) or off-chain (MySQL), and how to link related records across databases.',
      'Integrated both databases behind a FastAPI service layer, enabling core bidding UI flows — list, bid, and settle assets — by exposing validated REST endpoints that coordinate business logic on on- or off-chain data.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/giabaobui-nedy/COS30049-Innovation-Project',
      },
      {
        label: 'Demo',
        href: 'https://youtu.be/C8dyaWJs_uQ',
      },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight flex items-center gap-3">
        Projects
        <BeamedNotes className="w-6 h-auto text-neutral-300 dark:text-neutral-700 sway" />
      </h1>
      <p className="mb-10 text-neutral-600 dark:text-neutral-400">
        A collection of personal and academic projects spanning cloud-native
        platforms, AI systems, mobile apps, and more.
      </p>

      <Timeline>
        {projects.map((project) => (
          <TimelineItem key={project.title} date={project.year}>
            <article className="piano-card p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {project.subtitle}
                </span>
              </div>

              <ul className="space-y-1.5 my-3">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </article>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
