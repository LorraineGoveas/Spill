import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav><Link to="/team/about">About The Team</Link></nav>
    <nav> <Link to="/team/peter">Peter</Link></nav>
    <nav> <Link to="/team/sid">Sid</Link></nav>
    <nav> <Link to="/team/alaric">Alaric</Link></nav>        
    <nav> <Link to="/team/harpreet">Harpreet</Link></nav>
    <nav> <Link to="/team/lorraine">Lorraine</Link></nav>
    <nav> <Link to="/team/albert">Albert</Link></nav>
    <hr />
  </header>
);

export default Header;
