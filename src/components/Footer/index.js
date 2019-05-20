import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter from './layout/StyledFooter';
import FooterColumn from './layout/FooterColumn';

const Footer = () => (
  <StyledFooter>
    <FooterColumn>
      <Link to="/">Chris Cass</Link>
      <p>Web Developer</p>
    </FooterColumn>
    <FooterColumn>
      <a
        href="https://www.linkedin.com/in/chris-cass/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </FooterColumn>
    <FooterColumn>
      <a
        href="https://github.com/crcass"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </FooterColumn>
    <FooterColumn>
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

export default Footer;
