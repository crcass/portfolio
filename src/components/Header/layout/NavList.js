import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const NavList = styled.li`
  color: ${colors.anchor};
  float: left;
  list-style: none;
  margin-right: 2em;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
  }

  @media (max-width: 663px) {
    margin-right: 1.26em;
  }
`;

export default NavList;
