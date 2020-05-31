import styled from "styled-components";
import { colors } from "../../constants/colors";
import { mediaQueries } from "../../constants/cssSelectors";

export const InfoPageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '44px',
  width: '100%',
});
export const InfoCardContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginBottom: '20px',
  minWidth: '268px',
});
export const InfoCardHeader = styled.h2({
  [mediaQueries.prefersColorsSchemeDark]: {
    color: colors.lighter,
  },
  color: colors.darkest,
  fontSize: '22px',
  fontWeight: 400,
  margin: '0 0 28px',
});
export const Paragraph = styled.p((props: { largeParagraph?: boolean }) => ({
  [mediaQueries.prefersColorsSchemeDark]: {
    color: props.largeParagraph ? colors.lighter : undefined,
  },
  color: props.largeParagraph ? colors.darkest : colors.dark,
  fontSize: props.largeParagraph ? '22px' : undefined,
  lineHeight: props.largeParagraph ? '28px' : '20px',
  margin: '0 42px 0 0',
}));
export const RowWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '58px',
  paddingLeft: '6px',
});
