import React from 'react';
import InfoCard from '../../components/InfoCard';
import { RowWrapper } from '../../components/InfoCard/styles';
import ContactInfoDetails from './ContactInfoDetails';
import { ContactInfoContainer, ContactInfoImage } from './styles';

const ContactDetailsRow: React.FC = () => (
  <RowWrapper>
    <InfoCard title="Contact Chris" />

    <ContactInfoContainer>
      <ContactInfoImage
        alt="Photo of Chris"
        src={require('../../assets/images/profile/profile.jpg')}
        thumbnailSrc={require('../../assets/images/profile/thumbnails/profile_tn.jpg')}
      />

      <ContactInfoDetails />
    </ContactInfoContainer>
  </RowWrapper>
);

export default ContactDetailsRow;
