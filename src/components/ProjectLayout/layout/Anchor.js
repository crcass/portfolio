import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const Anchor = styled.a`  
  color: #bbb;
  margin-right: 3em;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)}
    text-decoration: underline;
  }
  `;

export default Anchor;
