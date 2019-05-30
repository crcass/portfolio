import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectGrid from './ProjectGrid';

const propTypes = {
  dark: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired
};

const Projects = ({ dark, projects }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <ProjectGrid dark={dark} projects={projects} />;
};

Projects.propTypes = propTypes;

export default Projects;
