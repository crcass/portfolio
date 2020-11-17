import React, { FC } from 'react';
import { InfoPageContainer } from '../../components/InfoCard/styles';
import Separator from '../../components/Separator';
import { Name } from '../../constants/types';
import { contactData, contactLinks } from '../../data/contactData';
import { profileData } from '../../data/profileData';
import useScrollToTop from '../../hooks/useScrollToTop';
import { pluralize } from '../../utils/string';
import ContactDetailsRow from './ContactDetailsRow';
import ContactRow from './ContactRow';

const Contact: FC = () => {
  useScrollToTop();

  const name: Name = {
    firstName: profileData.firstName,
    lastName: profileData.lastName,
  };
  const pluralizedName = pluralize(profileData.firstName);
  const linkedinTitle = `${pluralizedName} LinkedIn`;
  const githubTitle = `${pluralizedName} Github`;

  return (
    <InfoPageContainer>
      <ContactRow
        firstLinkTitle={linkedinTitle}
        firstLinkUrl={contactLinks.linkedinUrl}
        rightParagraph={contactData.contactHeadingText}
        secondLinkTitle={githubTitle}
        secondLinkUrl={contactLinks.githubUrl}
      />

      <Separator />

      <ContactDetailsRow
        name={name}
        position={profileData.position}
      />
    </InfoPageContainer>
  );
};

export default Contact;
