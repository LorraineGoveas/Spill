import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom';

const HeaderNavbar = styled.div`
    color: blue;
`

const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

const NavbarItem = styled.li`
    float: left;
`
const StyledLink = styled(Link)`
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    text-align: center;
    &:hover {
        color: #8cb8ff;
    }
`

const Header = () => (
  <header>

    <HeaderNavbar>
        <NavbarList>
            <NavbarItem><StyledLink to="/">Home</StyledLink></NavbarItem>
            <NavbarItem><StyledLink to="/team/about">About</StyledLink></NavbarItem>
            <NavbarItem><StyledLink to="/search/results">Search</StyledLink></NavbarItem>
        </NavbarList>
    </HeaderNavbar>


    <hr />
  </header>
);

export default Header;
