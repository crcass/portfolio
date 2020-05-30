import React from 'react';
import { contactLinks } from '../../data/contactData';
import { ContactInfoLink, ContactInfoText, ContactInfoWrapper } from './styles';

const ContactInfoDetails = () => (
  <ContactInfoWrapper>
    <ContactInfoText>
      Chris Cass
    </ContactInfoText>

    <ContactInfoText grey>
      Software Developer
    </ContactInfoText>

    <ContactInfoLink
      href={contactLinks.resumeUrl}
      title="Chris' Resume"
    />

    <ContactInfoLink
      href={`mailto:${contactLinks.email}`}
      title="Email Chris"
    />
  </ContactInfoWrapper>
);

export default ContactInfoDetails;
