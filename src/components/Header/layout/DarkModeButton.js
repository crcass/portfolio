import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const DarkModeButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.anchor};
  cursor: pointer;
  margin-right: 2.625em;
  outline: transparent;
  transition: color 0.3s ease;

  @media (max-width: 663px) {
    margin-right: 1.125em;
  }

  &:hover {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)}
    text-decoration: underline;
  }
`;

export default DarkModeButton;
