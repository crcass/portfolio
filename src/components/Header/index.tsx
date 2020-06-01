import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Name } from '../../constants/types';
import { profileData } from '../../data/profileData';
import useDisplayTitle from '../../hooks/useDisplayTitle';
import { getInitials } from '../../utils/string';
import NavList from './NavList';
import { Header, HeaderContainer, HeaderLogo, NavContainer, StyledLink } from './styles';

const StyledHeader = () => {
  useDisplayTitle();
  const name: Name = {
    firstName: profileData.firstName,
    lastName: profileData.lastName,
  };

  const intials = getInitials(profileData.firstName, profileData.lastName);

  return (
    <Header>
      <HeaderContainer>
        <NavContainer>
          <HeaderLogo name={name}>
            <StyledLink to={ROUTES.HOME}>
              {intials.toUpperCase()}
            </StyledLink>
          </HeaderLogo>
        </NavContainer>

        <NavContainer>
          <NavList />
        </NavContainer>
      </HeaderContainer>
    </Header>
  );
};

export default withRouter(StyledHeader);