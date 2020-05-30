import styled from 'styled-components';
import { carouselStyle } from '../../hooks/useHeroCarousel';

export const Div = styled.div({
  display: 'flex',
  marginBottom: 47,
  padding: '25px 6px 0',
});

export const HeroBackground = styled.img(({ invisible }: { invisible?: boolean }) => ({
  height: 'auto',
  width: '100%',
  ...invisible && { opacity: 0 },
}));

export const HeroWrapper = styled.div({
  ...carouselStyle,
  bottom: 0,
  left: 0,
  opacity: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transition: ' opacity 1s, z-index 1s',
  zIndex: 1,
});
export const RelativeWrapper = styled.div({
  position: 'relative',
});
export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});