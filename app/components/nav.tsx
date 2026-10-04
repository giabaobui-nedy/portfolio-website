import { ThemeToggle } from './theme-toggle'
import { NavLinks } from './nav-links'

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  )
}
