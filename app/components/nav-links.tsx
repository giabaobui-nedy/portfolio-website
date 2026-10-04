'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
}

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex flex-row space-x-0 pr-10">
      {Object.entries(navItems).map(([path, { name }]) => {
        const active =
          path === '/' ? pathname === '/' : pathname.startsWith(path)
        return (
          <Link
            key={path}
            href={path}
            aria-current={active ? 'page' : undefined}
            className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
              active
                ? 'text-accent font-medium'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            {name}
          </Link>
        )
      })}
    </div>
  )
}
