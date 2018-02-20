import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav><Link to="/about">About The Team</Link></nav>
    <nav> <Link to="/alaric">Alaric</Link></nav>
    <nav> <Link to="/peter">Peter</Link></nav>
    <nav> <Link to="/sid">Sid</Link></nav>
    <nav> <Link to="/harpreet">Harpreet</Link></nav>
    <nav> <Link to="/lorraine">Lorraine</Link></nav>
    <nav> <Link to="/albert">Albert</Link></nav>
    <hr />
  </header>
);

export default Header;
