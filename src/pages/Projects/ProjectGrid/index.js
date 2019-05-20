import React from 'react';
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
  <section className="projects">{renderThumbnails(projects)}</section>
);

export default Layout;
