import React, { FC } from 'react';
import InfoCard from '../../components/InfoCard';
import { InfoCardContainer, RowWrapper } from '../../components/InfoCard/styles';
import { ContactInfoLink } from './styles';

interface Props {
  firstLinkTitle: string;
  firstLinkUrl: string;
  rightParagraph: string;
  secondLinkTitle: string;
  secondLinkUrl: string;
}

const ContactRow: FC<Props> = ({
  firstLinkTitle,
  firstLinkUrl,
  rightParagraph,
  secondLinkTitle,
  secondLinkUrl,
}) => (
    <RowWrapper>
      <InfoCardContainer>
        <ContactInfoLink
          href={firstLinkUrl}
          title={firstLinkTitle}
        />

        <ContactInfoLink
          href={secondLinkUrl}
          title={secondLinkTitle}
        />
      </InfoCardContainer>

      <InfoCard
        largeParagraph
        paragraph={rightParagraph}
      />
    </RowWrapper>
  );

export default ContactRow;