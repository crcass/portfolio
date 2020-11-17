import React, { FC } from 'react';
import profileJPG from '../../assets/images/profile/profile.jpg';
import profileThumbnailJPG from '../../assets/images/profile/thumbnails/profile_tn.jpg';
import InfoCard from '../../components/InfoCard';
import { RowWrapper } from '../../components/InfoCard/styles';
import { Name } from '../../constants/types';
import ContactInfoDetails from './ContactInfoDetails';
import { ContactInfoContainer, ContactInfoImage } from './styles';

interface Props {
  name: Name;
  position: string;
}

const ContactDetailsRow: FC<Props> = ({ name, position }) => {
  const imageAlt = `Photo of ${name.firstName}`;
  const title = `Contact ${name.firstName}`;

  return (
    <RowWrapper>
      <InfoCard title={title} />

      <ContactInfoContainer>
        <ContactInfoImage
          alt={imageAlt}
          src={profileJPG}
          thumbnailSrc={profileThumbnailJPG}
        />

        <ContactInfoDetails
          name={name}
          position={position}
        />
      </ContactInfoContainer>
    </RowWrapper>
  );
};

export default ContactDetailsRow;
