import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const Navbar = styled.nav`
  background: ${props => (props.dark ? colors.black : colors.white)};
  height: fit-content;
  left: 0;
  min-height: 91px;
  position: fixed;
  top: 0;
  transition: background 1s ease;
  width: 100%;
  z-index: 100;
`;

export default Navbar;
