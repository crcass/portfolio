import styled from 'styled-components';
import { colors } from '../../shared/colors';

const Center = styled.div`
  background: ${props => (props.dark ? colors.darkBg : colors.lightBg)};
  margin: 0 auto;
  position: relative;
  transition: background 1s ease;

  div.site-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5.65em 2em 0;
    max-width: 1440px;
    padding: 1.5em 0 0;

    @media (max-width: 663px) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export default Center;
