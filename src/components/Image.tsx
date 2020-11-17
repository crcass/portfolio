import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  alt: string;
  imageHeight?: number;
  imageWidth?: number;
  marginRight?: number;
  src: string;
  thumbnailSrc: string;
}

const blurTimeout = 300;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ImageContainer = styled.div((props: Props) => ({
  display: 'flex',
  marginRight: props.marginRight ? `${props.marginRight}px` : undefined,
  overflow: 'hidden',
  position: 'relative',
}));
const Thumbnail = styled.img({
  filter: 'blur(20px)',
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LoadedImage = styled.img((props: { hasLoaded: boolean }) => ({
  bottom: 0,
  left: 0,
  opacity: props.hasLoaded ? 1 : 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transition: `opacity ${blurTimeout}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
}));

const Image: React.FC<Props> = props => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleLoad = () => setHasLoaded(true);

  return (
    <ImageContainer
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      imageHeight={props.imageHeight}
      marginRight={props.marginRight}
    >
      <Thumbnail
        alt={props.alt}
        height={props.imageHeight}
        src={props.thumbnailSrc}
        width={props.imageWidth}
      />

      <LoadedImage
        alt={props.alt}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hasLoaded={hasLoaded}
        height={props.imageHeight}
        onLoad={handleLoad}
        src={props.src}
        width={props.imageWidth}
      />
    </ImageContainer>
  );
};

export default Image;
