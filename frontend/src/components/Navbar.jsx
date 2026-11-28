import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const underlineClasses =
  "relative after:pointer-events-none after:absolute after:bottom-[0.35rem] after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-amber-400 after:content-[''] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.2,0.75,0.3,1)] motion-reduce:after:transition-none"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="animate-[navbar-enter_500ms_cubic-bezier(0.2,0.75,0.3,1)_both] sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/3 backdrop-blur-xl motion-reduce:animate-none">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-18 max-w-8xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10"
      >
        <NavLink
          to="/"
          end
          aria-label="Campus Resource Hub home"
          onClick={closeMenu}
          className="shrink-0 rounded-lg transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 motion-reduce:transition-none"
        >
          <img
            src={logo}
            alt="Campus Resource Hub"
            className="h-10 w-auto scale-280 sm:h-12"
          />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-full px-4 py-2 text-md font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-full px-4 py-2 text-md font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-full px-4 py-2 text-md font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) => `${underlineClasses} ml-3 inline-flex items-center justify-center rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-900/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-700 active:translate-y-0 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
          >
            Connect Us
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full text-slate-700 transition-colors duration-200 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`mobile-menu motion-reduce:transition-none md:hidden ${menuOpen ? 'mobile-menu-open' : ''}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-slate-100 px-5 pb-5 pt-3 sm:px-8">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              onClick={closeMenu}
              className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
            >
              Explore
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => `${underlineClasses} inline-flex items-center rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
            >
              About
            </NavLink>
            <NavLink
              to="/connect"
              onClick={closeMenu}
              className={({ isActive }) => `${underlineClasses} mt-2 inline-flex items-center justify-center rounded-xl bg-blue-800 px-5 py-3 text-base font-semibold text-white shadow-md shadow-blue-900/15 transition duration-200 hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none ${isActive ? 'after:scale-x-100' : ''}`}
            >
              Connect Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar