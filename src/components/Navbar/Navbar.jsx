import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/directors', label: 'Directors' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__top">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <span className="navbar__badge">NiQ</span>
        </Link>

        <div className="navbar__controls">
        
          <button
            className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`navbar__menu ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

        <Link className="navbar__action" to="/contact" onClick={closeMenu}>
            Get Started
          </Link>

    </header>
  )
}

export default Navbar
