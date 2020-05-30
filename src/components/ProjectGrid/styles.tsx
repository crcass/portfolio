import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { isSafari } from '../../utils/browserDetection';

export const GridContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  height: 'fit-content',
  marginTop: '25px',
  width: '100%',
});
export const GridItemContainer = styled.div({
  display: 'flex',
  margin: '0 6px 12px',
  position: 'relative',
});
export const GridItemImage = styled.img({
  height: isSafari ? 'intrinsic' : 'auto',
  width: '100%',
});
export const GridItemLink = styled(Link)({
  '&:hover': {
    '.overlay': {
      opacity: 0.7,
    },
    '.title': {
      opacity: 1,
    },
  },
  transition: 'all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
});
export const GridItemOverlay = styled.div({
  backgroundColor: colors.black,
  height: '100%',
  left: 0,
  opacity: 0,
  position: 'absolute',
  top: 0,
  transition: 'all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  width: '100%',
  zIndex: 2,
});
export const GridItemWrapper = styled.div({
  '@media(min-width: 1024px)': {
    width: '50%',
  },
});
export const GridItemTextWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  opacity: 0,
  position: 'absolute',
  top: '50%',
  width: '100%',
  zIndex: 2,
});
export const GridItemTitle = styled.p({
  color: colors.white,
  margin: 0,
  textAlign: 'center',
},
  `
  &:after {
    display: block;
    height: 1px;
    width: 100%;
    content: '';
    background: ${colors.white};
    margin: 2px auto 0;
  }
`);
