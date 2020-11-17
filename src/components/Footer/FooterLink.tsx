import React, { FC } from 'react';
import { colors } from '../../constants/colors';
import { LinkProps } from '../../constants/types';
import StyledAnchor from '../StyledAnchor';
import { FooterColumn } from './styles';

const FooterLink: FC<LinkProps> = ({ href, title }) => (
  <FooterColumn>
    <StyledAnchor
      darkModeColor={colors.lighter}
      fontColor={colors.darkest}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </StyledAnchor>
  </FooterColumn>
);

export default FooterLink;