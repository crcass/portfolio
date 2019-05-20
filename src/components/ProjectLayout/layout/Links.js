import styled from 'styled-components';

const Links = styled.nav`
  margin: 2em 0 1em;

  a {
    color: #bbb;
    margin-right: 3em;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #222;
      text-decoration: underline;
    }
  }
`;

export default Links;
