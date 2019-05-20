import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image from '../../shared/Image';
import ImageWrap from './layout/ImageWrap';
import Overlay from './layout/Overlay';
import TitleOverlay from './layout/TitleOverlay';

const Thumbnail = ({ title, image, route, location }) => (
  <ImageWrap>
    <Link to={location !== '/projects/' ? `/projects/${route}` : route}>
      <Overlay className="overlay" />
      <TitleOverlay className="title">
        <p>{title}</p>
      </TitleOverlay>
      <Image src={image} alt={title} className="image" />
    </Link>
  </ImageWrap>
);

export default withRouter(Thumbnail);
