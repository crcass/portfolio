import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { mediaQueries } from '../../constants/cssSelectors';


export const LatestProjectsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
export const HeaderWrapper = styled.div({
  borderTop: `1px solid ${colors.light}`,
  margin: '0 6px 12px',
});
export const HeaderText = styled.h3({
  [mediaQueries.prefersColorsSchemeDark]: {
    color: colors.lighter,
  },
  color: colors.darkest,
  fontSize: 16,
  fontWeight: 400,
});