import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/about">About The Team</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
