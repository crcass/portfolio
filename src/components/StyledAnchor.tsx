import styled from 'styled-components';
import { mediaQueries } from '../constants/cssSelectors';

interface Props {
  darkModeColor?: string;
  darkModeHoverColor?: string;
  fontColor?: string;
  fontSize?: number;
  hoverColor?: string;
  href: string;
  lineHeight?: number;
  marginRight?: number;
  underlined?: boolean;
}

const StyledAnchor = styled.a((props: Props) => ({
  '&:hover': {
    color: props.hoverColor,
    textDecorationLine: 'underline',
  },
  '&:visited': {
    color: undefined,
  },
  [mediaQueries.prefersColorsSchemeDark]: {
    '&:hover': {
      color: props.darkModeHoverColor,
    },
    color: props.darkModeColor,
  },
  color: props.fontColor,
  fontSize: props.fontSize ? `${props.fontSize}px` : undefined,
  lineHeight: props.fontSize ? `${props.lineHeight}px` : undefined,
  marginRight: props.marginRight ?? undefined,
  textDecorationLine: props.underlined ? 'underline' : 'none',
  transition: 'color 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  width: 'fit-content',
}));

export default StyledAnchor;