import React from 'react';
import { InfoPageContainer } from '../../components/InfoCard/styles';
import Separator from '../../components/Separator';
import { profileData } from '../../data/profileData';
import useScrollToTop from '../../hooks/useScrollToTop';
import { pluralize } from '../../utils/string';
import ProfileRow from './ProfileRow';

const Profile = () => {
  useScrollToTop();

  const pluralizedName = pluralize(profileData.firstName);
  const aboutTitle = `About ${profileData.firstName}`;
  const skillsTitle = `${pluralizedName} Skills`;

  return (
    <InfoPageContainer>
      <ProfileRow
        largeRightParagraph
        leftTitle={profileData.position}
        rightParagraph={profileData.profileHeadingText}
      />

      <Separator />

      <ProfileRow
        leftParagraph={profileData.aboutText}
        leftTitle={aboutTitle}
        rightParagraph={profileData.skillsText}
        rightTitle={skillsTitle}
      />
    </InfoPageContainer>
  );
};

export default Profile;
