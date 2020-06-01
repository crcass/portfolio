import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { cssSelectors, mediaQueries } from '../../constants/cssSelectors';
import { Name } from '../../constants/types';

interface HeaderLogoProps {
  name: Name;
}

export const HeaderContainer = styled.div({
  display: 'flex',
  maxWidth: '1440px',
  padding: '0 44px',
  width: '100%',
});
export const HeaderLogo = styled.h1({
  alignItems: 'center',
  color: colors.black,
  display: 'flex',
  fontSize: '48px',
}, ({ name }: HeaderLogoProps) => {
  const fullName = `${name.firstName} ${name.lastName}`;
  return (
    `
&:after {
  content: '';
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

&:hover:after {
  content: '${fullName.toLowerCase()}';
  color: ${colors.medium};
  margin: 8px;
}

@media(prefers-color-scheme: dark) {
  color: ${colors.white};

  &:after{
    color: ${colors.black};
  }
}
`)
});
export const Header = styled.header({
  [mediaQueries.prefersColorsSchemeDark]: {
    backgroundColor: colors.black,
  },
  backdropFilter: 'saturate(180%) blur(20px)',
  backgroundColor: colors.white,
  display: 'flex',
  height: '97px',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  zIndex: 100,
});
export const NavContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  paddingLeft: '6px',
  width: '100%',
});
export const NavUL = styled.ul`
  padding: unset;
`;
export const NavListItem = styled.li({
  [cssSelectors.hover]: {
    [mediaQueries.prefersColorsSchemeDark]: {
      color: colors.lighter,
    },
    color: colors.darkest,
  },
  color: colors.medium,
  float: 'left',
  listStyle: 'none',
  marginRight: '32px',
});
export const StyledLink = styled(Link)({
  color: 'inherit',
  textDecorationLine: 'none',
});
