import styled from 'styled-components';

const Hero = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 1;
  transition: opacity 1s, z-index 1s;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

export default Hero;
