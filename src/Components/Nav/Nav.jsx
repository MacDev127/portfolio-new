import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Nav.css';

const Nav = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState('Home'); // Track the active nav item

  const handleClick = () => setClick(!click);

  const closeMenu = (item) => {
    setClick(false);
    setActive(item); // Set the clicked item as active
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          Sean.
        </a>
        <div className="burger_menu" onClick={handleClick}>
          {click ? (
            <FaTimes size={26} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={26} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              offset={-160} // Adjust for fixed header height
              duration={400}
              onClick={() => closeMenu('Home')}
              className={active === 'Home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              offset={-160}
              duration={400}
              onClick={() => closeMenu('About')}
              className={active === 'About' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              offset={-160}
              duration={400}
              onClick={() => closeMenu('Skills')}
              className={active === 'Skills' ? 'active' : ''}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="portfolio"
              smooth={true}
              offset={-160}
              duration={400}
              onClick={() => closeMenu('Portfolio')}
              className={active === 'Portfolio' ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              offset={-160}
              duration={400}
              onClick={() => closeMenu('Contact')}
              className={active === 'Contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
