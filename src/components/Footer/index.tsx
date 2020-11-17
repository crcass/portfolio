import React, { FC } from 'react';
import { Name } from '../../constants/types';
import { profileData } from '../../data/profileData';
import FooterContent from './FooterContent';
import { Footer } from './styles';

const StyledFooter: FC = () => {
  const name: Name = {
    firstName: profileData.firstName,
    lastName: profileData.lastName,
  };
  
return (
    <Footer>
      <FooterContent name={name} />
    </Footer>
  );
};

export default StyledFooter;
