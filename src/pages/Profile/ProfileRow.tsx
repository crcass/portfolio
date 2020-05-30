import React from 'react';
import InfoCard from '../../components/InfoCard';
import { RowWrapper } from '../../components/InfoCard/styles';

interface Props {
  largeLeftParagraph?: boolean;
  largeRightParagraph?: boolean;
  leftParagraph?: string;
  leftTitle: string;
  rightParagraph: string;
  rightTitle?: string;
}

const ProfileRow = ({
  largeLeftParagraph,
  largeRightParagraph,
  leftParagraph,
  leftTitle,
  rightParagraph,
  rightTitle,
}: Props) => (
    <RowWrapper>
      <InfoCard
        largeParagraph={largeLeftParagraph}
        paragraph={leftParagraph}
        title={leftTitle}
      />

      <InfoCard
        largeParagraph={largeRightParagraph}
        paragraph={rightParagraph}
        title={rightTitle}
      />
    </RowWrapper>
  );

export default ProfileRow;
