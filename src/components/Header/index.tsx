import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import useDisplayTitle from '../../hooks/useDisplayTitle';
import NavList from './NavList';
import { Header, HeaderContainer, HeaderLogo, NavContainer, StyledLink } from './styles';

const StyledHeader = () => {
  useDisplayTitle();

  return (
    <Header>
      <HeaderContainer>
        <NavContainer>
          <HeaderLogo>
            <StyledLink to={ROUTES.HOME}>
              CC
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