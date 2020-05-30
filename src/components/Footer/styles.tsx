import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Footer = styled.footer({
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  width: '100%',
});
export const FooterColumn = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginBottom: '32px',
  marginLeft: '6px',
  minWidth: '116px',
});
export const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 44px 68px',
  maxWidth: '1440px',
  width: '100%',
});
export const FooterContentWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
});
export const FooterWrapper = styled.div({
  display: 'flex',
  margin: '0 6px',
  width: '100%',
});
export const StyledLink = styled(Link)({
  '&:hover': {
    textDecorationLine: 'underline',
  },
  '&:visited': {
    color: 'none',
  },
  '@media(prefers-color-scheme: dark)': {
    color: colors.lighter,
  },
  color: colors.darkest,
  textDecorationLine: 'none',
  width: 'fit-content',
});
