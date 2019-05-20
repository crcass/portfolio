import styled from 'styled-components';

const FooterColumn = styled.div`
  margin: 0.5em;
  width: 25%;

  a {
    color: #222;
    text-decoration: inherit;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
  }
`;

export default FooterColumn;
