import React from 'react';
import TextContainer from '../../shared/TextContainer';
import DetailsWrap from '../../shared/DetailsWrap';
import Details from '../../shared/Details';
import ContactInfo from './layout/ContactInfo';
import Address from './layout/Address';
import Image from '../../shared/Image';
import profile from './profile.jpg';

const Contact = () => (
  <main>
    <TextContainer>
      <DetailsWrap>
        <Details>
          <a
            href="https://www.linkedin.com/in/chris-cass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris' LinkedIn
          </a>
          <a
            href="https://github.com/crcass"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris' Github
          </a>
        </Details>
        <Details>
          <p>
            I love meeting new people! If you have an interesting idea, let's
            grab a cup of coffee and talk about how I can help bring your idea
            to life. If you're interested in my work, please reach out.
          </p>
        </Details>
      </DetailsWrap>
    </TextContainer>
    <TextContainer className="border">
      <DetailsWrap>
        <Details>
          <p>Contact Chris</p>
        </Details>
        <ContactInfo>
          <Image src={profile} alt="Chris Cass" />
          <Address>
            <h2>Chris Cass</h2>
            <p>Web Developer</p>
            <a
              href="https://drive.google.com/file/d/1RxCgpv_YfMCexxorz1m4cChe6EmpfL1C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris' Resume
            </a>
            <a href="mailto:ccass@live.com">Email Chris</a>
          </Address>
        </ContactInfo>
      </DetailsWrap>
    </TextContainer>
  </main>
);

export default Contact;
