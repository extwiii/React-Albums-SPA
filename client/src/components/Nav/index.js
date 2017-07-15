import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/albums">Albums</NavLink>
      </li>
    </ul>
  );
}

export default Nav;
