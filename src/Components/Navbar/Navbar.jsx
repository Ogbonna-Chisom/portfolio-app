
import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h1 className="logo">GB</h1>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to={routes.home}>Home</Link>
          {/* <AnchorLink href="#home" onClick={() => setMenuOpen(false)}>Home</AnchorLink> */}
        </li>
        <li>
          {/* <AnchorLink href="#about" onClick={() => setMenuOpen(false)}>About Me</AnchorLink> */}
          <Link to={routes.about}>About</Link>
        </li>
        <li>
          {/* <AnchorLink href="#project" onClick={() => setMenuOpen(false)}>Project</AnchorLink> */}
          <Link to={routes.project}>Project</Link>
        </li>
        <li>
          {/* <AnchorLink href="#service" onClick={() => setMenuOpen(false)}>Service</AnchorLink> */}
          <Link to={routes.service}>Service</Link>
        </li>
        <li>
          {/* <AnchorLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</AnchorLink> */}
          <Link to={routes.contact}>Contact</Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
