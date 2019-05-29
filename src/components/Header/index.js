import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HeaderContainer from './layout/HeaderContainer';
import NavContainer from './layout/NavContainer';
import NavList from './layout//NavList';
import DarkModeButton from './layout//DarkModeButton';
import { displayTitle, handleDarkNav } from '../../helpers';

const propTypes = {
  dark: PropTypes.bool.isRequired,
  darkMode: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

const Header = ({ dark, darkMode, location, projects }) => {
  useEffect(() => displayTitle(location, projects));

  return (
    <Navbar dark={dark}>
      <HeaderContainer>
        <NavContainer dark={dark}>
          <h1>
            <NavLink to="/">CC</NavLink>
          </h1>
        </NavContainer>
        <NavContainer className="links">
          <ul>
            <NavList dark={dark}>
              <NavLink to="/projects/" activeStyle={handleDarkNav(dark)}>
                Projects
              </NavLink>
            </NavList>
            <NavList dark={dark}>
              <NavLink to="/profile/" activeStyle={handleDarkNav(dark)}>
                Profile
              </NavLink>
            </NavList>
            <NavList dark={dark}>
              <NavLink to="/contact/" activeStyle={handleDarkNav(dark)}>
                Contact
              </NavLink>
            </NavList>
          </ul>
          <DarkModeButton onClick={darkMode} dark={dark}>
            {dark ? 'Light' : 'Dark'}
          </DarkModeButton>
        </NavContainer>
      </HeaderContainer>
    </Navbar>
  );
};

Header.propTypes = propTypes;

export default withRouter(Header);
