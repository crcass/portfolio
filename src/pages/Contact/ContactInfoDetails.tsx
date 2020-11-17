import React, { FC } from 'react';
import { Name } from '../../constants/types';
import { contactLinks } from '../../data/contactData';
import { pluralize } from '../../utils/string';
import { ContactInfoLink, ContactInfoText, ContactInfoWrapper } from './styles';

interface Props {
  position: string;
  name: Name;
}

const ContactInfoDetails: FC<Props> = ({ position, name }) => {
  const pluralizedName = pluralize(name.firstName);

  const resumeTitle = `${pluralizedName} Resume`;
  const emailTitle = `Email ${name.firstName}`;

  return (
    <ContactInfoWrapper>
      <ContactInfoText>
        {name.firstName} {name.lastName}
      </ContactInfoText>

      <ContactInfoText grey>
        {position}
      </ContactInfoText>

      <ContactInfoLink
        href={contactLinks.resumeUrl}
        title={resumeTitle}
      />

      <ContactInfoLink
        href={`mailto:${contactLinks.email}`}
        title={emailTitle}
      />
    </ContactInfoWrapper>
  );
};

export default ContactInfoDetails;
