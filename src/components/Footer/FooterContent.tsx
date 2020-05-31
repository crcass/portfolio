import React from 'react';
import { ROUTES } from '../../constants/routes';
import { Name } from '../../constants/types';
import { footerData } from '../../data/footerData';
import Separator from '../Separator';
import FooterLink from './FooterLink';
import { FooterColumn, FooterContainer, FooterContentWrapper, StyledLink } from './styles';

interface Props {
  name: Name;
}

const separatorMarginBottom = 32;

const FooterContent: React.FC<Props> = ({ name }) => (
  <FooterContainer>
    <Separator marginBottom={separatorMarginBottom} />

    <FooterContentWrapper>
      <FooterColumn>
        <StyledLink to={ROUTES.HOME}>
          {name.firstName} {name.lastName}
        </StyledLink>
      </FooterColumn>

      {footerData.map(data => (
        <FooterColumn key={data.title}>
          <FooterLink
            href={data.url}
            title={data.title}
          />
        </FooterColumn>
      ))}
    </FooterContentWrapper>
  </FooterContainer>
);

export default FooterContent;
