import React, { Fragment } from 'react';
import Thumbnail from '../../../components/Thumbnail';

const renderThumbnails = projects =>
  projects.map(project => (
    <Thumbnail
      key={project.title}
      title={project.title}
      image={project.image}
      route={project.route}
    />
  ));

const Layout = ({ projects }) => (
  <Fragment>{renderThumbnails(projects)}</Fragment>
);

export default Layout;
