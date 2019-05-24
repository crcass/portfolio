import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const LatestTitle = styled.div`
  margin: 0 1.1em;

  h3 {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    font-size: 1em;
  }
`;

export default LatestTitle;
