import React from 'react';

// buat componen
function Header() {
  return (
    <header>
      <nav className="navbar container">
        <h1 className="logo">Shortly</h1>
        <ul className="menus">
          <li className="menus__sub-menu">Features</li>
          <li className="menus__sub-menu">Pricing</li>
          <li className="menus__sub-menu">Reference</li>
        </ul>
        <ul className="flex">
          <li className="login">Login</li>
          <button className="btn">Sign up</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header;