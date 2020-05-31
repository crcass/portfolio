import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/cssSelectors';

export const projectTextStyle = {
  [mediaQueries.prefersColorsSchemeDark]: {
    color: colors.lighter,
  },
  color: colors.darkest,
  fontSize: 16,
  fontWeight: 400,
  margin: 0,
};
export const AnchorWrap = styled.div({
  display: 'flex',
  marginTop: 48,
});
export const PageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
export const Wrapper = styled.div({
  display: 'flex',
  padding: '35px 0 31px',
  width: '100%',
});
export const Column = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 6px',
});
export const Heading = styled.h2(projectTextStyle);
export const Img = styled.img({
  marginBottom: 112,
  width: '100%',
});
export const Paragrah = styled.p({
  ...projectTextStyle,
  lineHeight: '20px',
});
