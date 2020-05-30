import React from 'react';
import ProjectGrid from '../../components/ProjectGrid';
import projects from '../../data/projectData';

const Projects = () => (
  <ProjectGrid projects={projects} />
);

export default Projects;
