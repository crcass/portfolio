import React, { FC } from 'react';
import { ROUTES } from '../../constants/routes';
import StyledNavLink from '../StyledNavLink';
import { NavListItem, NavUL } from './styles';

const navListItems = [{
  route: `/${ROUTES.PROJECTS}`,
  title: 'Projects',
}, {
  route: `/${ROUTES.PROFILE}`,
  title: 'Profile',
}, {
  route: `/${ROUTES.CONTACT}`,
  title: 'Contact',
}];

const NavList: FC = () => (
  <NavUL>
    {navListItems.map(navListItem => (
      <NavListItem key={navListItem.title}>
        <StyledNavLink to={navListItem.route}>
          {navListItem.title}
        </StyledNavLink>
      </NavListItem>
    ))}
  </NavUL>
);

export default NavList;
