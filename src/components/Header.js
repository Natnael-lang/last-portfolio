// header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <header className="header">
      <p className="portfolio"><span className="port">Port</span>folio</p>

      <nav className={`header-nav ${menuClicked ? 'active' : ''}`}>
        <ul>
          <li><Link to="#Home" className="nav-link" onClick={() => handleScroll('Home')}>Home</Link></li>
          <li><Link className="nav-link" to="#Experiance" onClick={() => handleScroll('Experiance')}>Experience</Link></li>
          <li><Link className="nav-link" to="#Project" onClick={() => handleScroll('Project')}>Projects</Link></li>
          <li><Link className="nav-link" to="#contacts" onClick={() => handleScroll('contacts')}>Contacts</Link></li>
        </ul>
      </nav>

      <div className="humberger">
        <button onClick={() => setMenuClicked(!menuClicked)}>
          <FontAwesomeIcon icon={menuClicked ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;