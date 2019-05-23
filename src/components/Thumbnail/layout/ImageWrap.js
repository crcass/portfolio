import styled from 'styled-components';

const ImageWrap = styled.article`
  margin: 0 0.375em 0.75em;
  position: relative;
  width: 48%;

  @media (max-width: 663px) {
    width: 96%;
  }

  a {
    transition: all 0.3s ease;

    &:hover {
      .overlay {
        opacity: 0.7;
      }

      .title {
        opacity: 1;
      }
    }
  }
`;

export default ImageWrap;
