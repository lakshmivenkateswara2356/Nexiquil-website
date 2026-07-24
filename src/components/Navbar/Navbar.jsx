import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__badge">NiQ</span>
      </div>
      <nav className="navbar__menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/directors">Directors</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="navbar__action" to="/contact">
        Get Started
      </Link>
    </header>
  )
}

export default Navbar
