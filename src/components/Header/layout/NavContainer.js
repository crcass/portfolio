import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 0.375em;
  width: 50%;

  @media (max-width: 663px) {
    width: auto;
  }

  h1 {
    align-items: center;
    color: ${props => (props.dark ? colors.white : colors.black)};
    display: flex;
    font-size: 3em;
    margin: 0.375em 0.875em;
    transition: color 1s ease;

    &:after {
      content: '';
      color: ${props => (props.dark ? colors.black : colors.white)};
      font-size: 0.3em;
      margin: 0;
      transition: all 0.3s ease;
    }

    &:hover:after {
      content: 'chris cass';
      color: ${colors.anchor};
      margin: 0.5em;
    }

    @media (max-width: 663px) {
      display: none;
      /* margin: 0.375em; */

      &:hover:after {
        content: none;
      }
    }
  }

  ul {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`;

export default NavContainer;
