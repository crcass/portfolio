import styled from 'styled-components';

const ContactInfo = styled.div`
  display: flex;
  height: 10em;
  padding: 0 2em 0 0.375em;
  width: 50%;

  @media (max-width: 663px) {
    padding: 0;
  }

  img {
    padding-right: 0.75em;
    height: 100%;
    width: auto;

    @media (max-width: 663px) {
      padding-right: 0;
    }
  }
`;

export default ContactInfo;
