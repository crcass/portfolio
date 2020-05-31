import React from 'react';
import InfoCard from '../../components/InfoCard';
import { RowWrapper } from '../../components/InfoCard/styles';
import { Name } from '../../constants/types';
import ContactInfoDetails from './ContactInfoDetails';
import { ContactInfoContainer, ContactInfoImage } from './styles';

interface Props {
  name: Name;
  position: string;
}

const ContactDetailsRow: React.FC<Props> = ({ name, position }) => {
  const imageAlt = `Photo of ${name.firstName}`;
  const title = `Contact ${name.firstName}`

  return (
    <RowWrapper>
      <InfoCard title={title} />

      <ContactInfoContainer>
        <ContactInfoImage
          alt={imageAlt}
          src={require('../../assets/images/profile/profile.jpg')}
          thumbnailSrc={require('../../assets/images/profile/thumbnails/profile_tn.jpg')}
        />

        <ContactInfoDetails
          name={name}
          position={position}
        />
      </ContactInfoContainer>
    </RowWrapper>
  )
};

export default ContactDetailsRow;
