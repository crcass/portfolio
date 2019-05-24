import styled from 'styled-components';
import { colors } from '../../../shared/colors';

const NotFoundWrap = styled.main`
  display: flex;
  height: calc(100vh - 280px);
  justify-content: center;
  width: calc(100vw - 64px);

  h2 {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
    transition: color 1s ease;
  }
`;

export default NotFoundWrap;
