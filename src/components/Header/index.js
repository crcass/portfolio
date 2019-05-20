import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HeaderContainer from './layout/HeaderContainer';
import NavContainer from './layout/NavContainer';
import { displayTitle } from '../../helpers';

const Header = ({ location }) => {
  useEffect(() => displayTitle(location));
  useEffect(() => window.scrollTo(0, 0));

  return (
    <Navbar>
      <HeaderContainer>
        <NavContainer>
          <h1>
            <Link to="/portfolio/">CC</Link>
          </h1>
        </NavContainer>
        <NavContainer>
          <ul>
            <li>
              <Link
                to="/projects/"
                className={location.pathname === '/projects/' ? 'active' : null}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/profile/"
                className={location.pathname === '/profile/' ? 'active' : null}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                className={location.pathname === '/contact/' ? 'active' : null}
              >
                Contact
              </Link>
            </li>
          </ul>
        </NavContainer>
      </HeaderContainer>
    </Navbar>
  );
};

export default withRouter(Header);
