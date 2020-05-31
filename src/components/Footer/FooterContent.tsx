import React from 'react';
import { ROUTES } from '../../constants/routes';
import { footerData } from '../../data/footerData';
import Separator from '../Separator';
import FooterLink from './FooterLink';
import { FooterColumn, FooterContainer, FooterContentWrapper, StyledLink } from './styles';

const separatorMarginBottom = 32;

const FooterContent = () => (
  <FooterContainer>
    <Separator marginBottom={separatorMarginBottom} />

    <FooterContentWrapper>
      <FooterColumn>
        <StyledLink to={ROUTES.HOME}>
          Chris Cass
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
