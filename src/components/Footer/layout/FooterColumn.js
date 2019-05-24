import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const FooterColumn = styled.div`
  margin: 0.5em;
  width: 25%;

  a {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    text-decoration: none;
    transition: color 1s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    margin: 0;
    transition: color 1s ease;
  }
`;

export default FooterColumn;
