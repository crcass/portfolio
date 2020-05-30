import React from 'react';
import { colors } from '../../constants/colors';
import StyledAnchor from '../StyledAnchor';
import { FooterColumn } from './styles';

interface Props {
  href: string;
  title: string;
}

const FooterLink = ({ href, title }: Props) => (
  <FooterColumn>
    <StyledAnchor
      color={colors.darkest}
      darkModeColor={colors.lighter}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </StyledAnchor>
  </FooterColumn>
);

export default FooterLink;