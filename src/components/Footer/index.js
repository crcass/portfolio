import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledFooter from './layout/StyledFooter';
import FooterColumn from './layout/FooterColumn';

const propTypes = {
  dark: PropTypes.bool.isRequired
};

const Footer = ({ dark }) => (
  <StyledFooter>
    <FooterColumn dark={dark}>
      <Link to="/">Chris Cass</Link>
      <p>Web Developer</p>
    </FooterColumn>
    <FooterColumn dark={dark}>
      <a
        href="https://www.linkedin.com/in/chris-cass/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </FooterColumn>
    <FooterColumn dark={dark}>
      <a
        href="https://github.com/crcass"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </FooterColumn>
    <FooterColumn dark={dark}>
      <a
        href="https://drive.google.com/file/d/1RxCgpv_YfMCexxorz1m4cChe6EmpfL1C/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </FooterColumn>
  </StyledFooter>
);

Footer.propTypes = propTypes;

export default Footer;
