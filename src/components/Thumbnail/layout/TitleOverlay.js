import styled from 'styled-components';

const TitleOverlay = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  opacity: 0;
  width: 100%;

  p {
    margin-top: 0;
  }

  p:after {
    display: block;
    height: 1px;
    width: 100%;
    content: '';
    background: #fff;
    margin: 2px auto 0;
  }
`;

export default TitleOverlay;
