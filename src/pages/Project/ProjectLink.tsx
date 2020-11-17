import React, { FC } from 'react';
import StyledAnchor from '../../components/StyledAnchor';
import { colors } from '../../constants/colors';
import { LinkProps } from '../../constants/types';

const projectLinkStyle = {
  marginRight: 48,
};

export const ProjectLink: FC<LinkProps> = ({ href, title }) => (
  <StyledAnchor
    darkModeHoverColor={colors.lighter}
    fontColor={colors.dark}
    hoverColor={colors.darkest}
    href={href}
    marginRight={projectLinkStyle.marginRight}
    rel="noopener noreferrer"
    target="_blank"
  >
    {title}
  </StyledAnchor>
);
