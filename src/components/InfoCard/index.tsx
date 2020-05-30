import React from 'react';
import { InfoCardContainer, InfoCardHeader, Paragraph } from './styles';

interface Props {
  largeParagraph?: boolean;
  paragraph?: string;
  title?: string;
}

const InfoCard = ({
  largeParagraph,
  paragraph,
  title,
}: Props) => (
    <InfoCardContainer>
      {title && (
        <InfoCardHeader>
          {title}
        </InfoCardHeader>
      )}

      {paragraph && (
        <Paragraph largeParagraph={largeParagraph}>
          {paragraph}
        </Paragraph>
      )}
    </InfoCardContainer>
  );

export default InfoCard;