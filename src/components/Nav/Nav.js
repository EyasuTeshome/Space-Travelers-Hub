import React from 'react';
import Styles from './Nav.module.css';

const Nav = () => (
  <div>
    <nav>
      <h1 className={Styles.h1}>Space Travelers&apos; HUB</h1>
      <ul className={Styles.list}>
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </div>
);

export default Nav;
