import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HeaderContainer from './layout/HeaderContainer';
import NavContainer from './layout/NavContainer';

const Header = () => (
  <Navbar>
    <HeaderContainer>
      <NavContainer>
        <h1>
          <Link to="/">CC</Link>
        </h1>
      </NavContainer>
      <NavContainer>
        <ul>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/profile/">Profile</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </Navbar>
);

export default Header;
