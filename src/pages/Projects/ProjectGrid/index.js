import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../../../components/Thumbnail';

const propTypes = {
  projects: PropTypes.array.isRequired
};

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
  <section className="projects">{renderThumbnails(projects)}</section>
);

Layout.propTypes = propTypes;

export default Layout;
