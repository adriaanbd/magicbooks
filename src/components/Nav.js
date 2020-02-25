import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav>
      <div id="nav-left">
        <h1 id="company-name">MagicBooks CMS</h1>
        <div className="navLink">Books</div>
        <div className="navLink">Categories</div>
      </div>
      <div id="nav-right">
        <FontAwesomeIcon icon={faUserCircle} size="2x" id="avatar" />
      </div>
    </nav>
  );
}

export default Nav;
