import React from 'react';
import { colors } from '../../constants/colors';
import { ROUTES } from '../../constants/routes';
import { footerData } from '../../data/footerData';
import Separator from '../Separator';
import StyledAnchor from '../StyledAnchor';
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
          <StyledAnchor
            color={colors.darkest}
            darkModeColor={colors.lighter}
            href={data.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.title}
          </StyledAnchor>
        </FooterColumn>
      ))}
    </FooterContentWrapper>
  </FooterContainer>
);

export default FooterContent;
