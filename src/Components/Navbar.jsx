import React, { useState } from 'react';
import '../nav.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfoCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">My App</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} color='white' />
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faImages} color='white' />
          <a href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faEnvelope} color='white' />
          <a href="#">Contact</a>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} color='white'/>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
