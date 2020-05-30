import React from 'react';
import { InfoPageContainer } from '../../components/InfoCard/styles';
import Separator from '../../components/Separator';
import { contactData, contactLinks } from '../../data/contactData';
import useScrollToTop from '../../hooks/useScrollToTop';
import ContactDetailsRow from './ContactDetailsRow';
import ContactRow from './ContactRow';

const Contact = () => {
  useScrollToTop();

  return (
    <InfoPageContainer>
      <ContactRow
        firstLinkTitle="Chris' LinkedIn"
        firstLinkUrl={contactLinks.linkedinUrl}
        rightParagraph={contactData.contactHeadingText}
        secondLinkTitle="Chris' Github"
        secondLinkUrl={contactLinks.githubUrl}
      />

      <Separator />

      <ContactDetailsRow />
    </InfoPageContainer>
  );
};

export default Contact;
