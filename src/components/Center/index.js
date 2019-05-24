import styled from 'styled-components';
import { colors } from '../../shared/colors';

const Center = styled.div`
  background: ${props => (props.dark ? colors.darkBg : colors.lightBg)}
  margin: 0 auto;
  transition: background 1s ease;
  width: fit-content;
`;

export default Center;
