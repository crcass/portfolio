import styled from 'styled-components';

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 0 0.375em;
  width: 50%;

  h1 {
    align-items: center;
    color: #000;
    display: flex;
    font-size: 3em;
    margin: 0.375em 0.875em;

    &:after {
      content: '';
      color: #fff;
      font-size: 0.3em;
      margin: 0;
      transition: all 0.3s ease;
    }

    &:hover:after {
      content: 'chris cass';
      color: #bbb;
      margin: 0.5em;
    }
  }

  ul {
    padding-left: 0;
  }

  li {
    color: #bbb;
    float: left;
    list-style: none;
    margin-right: 2em;
    transition: color 0.3s ease;

    &:hover {
      color: #222;
    }
  }

  a {
    color: inherit;
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &.active {
      color: #222;
    }
  }
`;

export default NavContainer;
