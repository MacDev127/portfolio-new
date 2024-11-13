import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
            <a
              href="/"
              onClick={() => closeMenu('Home')}
              className={active === 'Home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => closeMenu('About')}
              className={active === 'About' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              onClick={() => closeMenu('Skills')}
              className={active === 'Skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => closeMenu('Portfolio')}
              className={active === 'Portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => closeMenu('Contact')}
              className={active === 'Contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
