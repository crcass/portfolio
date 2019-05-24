import React from 'react';
import PropTypes from 'prop-types';
import ProjectGrid from './ProjectGrid';
import projects from '../../projects';

const propTypes = {
  dark: PropTypes.bool.isRequired
};

const Projects = ({ dark }) => <ProjectGrid dark={dark} projects={projects} />;

Projects.propTypes = propTypes;

export default Projects;
