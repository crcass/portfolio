import styled from 'styled-components';

const Address = styled.address`
  display: flex;
  flex-direction: column;
  font-style: inherit;
  padding-left: 1.125em;

  h2 {
    font-size: 1em;
    margin: 0;
  }

  p {
    color: #bbb;
  }

  a {
    text-decoration: underline;
  }
`;

export default Address;
