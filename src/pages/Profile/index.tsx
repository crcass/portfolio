import React from 'react';
import { InfoPageContainer } from '../../components/InfoCard/styles';
import Separator from '../../components/Separator';
import { profileData } from '../../data/profileData';
import useScrollToTop from '../../hooks/useScrollToTop';
import ProfileRow from './ProfileRow';

const Profile = () => {
  useScrollToTop();

  return (
    <InfoPageContainer>
      <ProfileRow
        largeRightParagraph
        leftTitle="Software Developer"
        rightParagraph={profileData.profileHeadingText}
      />

      <Separator />

      <ProfileRow
        leftParagraph={profileData.aboutText}
        leftTitle="About Chris"
        rightParagraph={profileData.skillsText}
        rightTitle="Chris' Skills"
      />
    </InfoPageContainer>
  );
};

export default Profile;
