import React from 'react';

function Nav() {
  return (
    <nav>
      <div id="nav-left">
        <h1>MagicBooks CMS</h1>
        <div className="navLink">Books</div>
        <div className="navLink">Categories</div>
      </div>
      <div id="nav-right">Avatar</div>
    </nav>
  );
}

export default Nav;
