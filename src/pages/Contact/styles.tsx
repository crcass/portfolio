import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image';
import StyledAnchor from '../../components/StyledAnchor';
import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/cssSelectors';

interface InfoTextProps {
  grey?: boolean;
}

interface ContactInfoImageProps {
  alt: string;
  src: string;
  thumbnailSrc: string;
}

interface ContactInfoLinkProps {
  href: string;
  title: string;
}

export const ContactInfoContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
  marginBottom: '20px',
});

export const ContactInfoText = styled.p((props: InfoTextProps) => ({
  [mediaQueries.prefersColorsSchemeDark]: {
    color: props.grey ? undefined : colors.lighter,
  },
  color: props.grey ? colors.dark : colors.darkest,
  fontSize: '22px',
  lineHeight: '28px',
  margin: 0,
}));

export const ContactInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const contactInfoImageStyle = {
  imageHeight: 220,
  imageWidth: 171.875,
  marginRight: 20,
};

export const ContactInfoImage: React.FC<ContactInfoImageProps> = ({
  alt,
  src,
  thumbnailSrc,
}) => (
    <Image
      alt={alt}
      imageHeight={contactInfoImageStyle.imageHeight}
      imageWidth={contactInfoImageStyle.imageWidth}
      marginRight={contactInfoImageStyle.marginRight}
      src={src}
      thumbnailSrc={thumbnailSrc}
    />
  );

const contactInfoStyle = {
  fontSize: 22,
  lineHeight: 28,
};

export const ContactInfoLink: React.FC<ContactInfoLinkProps> = ({
  href,
  title,
}) => (
    <StyledAnchor
      darkModeHoverColor={colors.lighter}
      fontColor={colors.dark}
      fontSize={contactInfoStyle.fontSize}
      hoverColor={colors.darkest}
      href={href}
      lineHeight={contactInfoStyle.lineHeight}
      rel="noopener noreferrer"
      target="_blank"
      underlined
    >
      {title}
    </StyledAnchor>
  );
