import styled from 'styled-components';
import { colors } from './colors';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em 0 0.375em;
  width: 50%;

  h2,
  p {
    color: ${props => (props.dark ? colors.darkActive : colors.lightActive)};
  }

  @media (max-width: 663px) {
    width: 96%;
    margin-bottom: 1em;
    padding-right: 0;
  }
`;

export default Details;
