import React from 'react';
import { Project } from '../../data/projectData';
import ProjectGridItem from './ProjectGridItem';
import { GridContainer } from './styles';

interface Props {
  projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => (
  <GridContainer>
    {projects.map(project => (
      <ProjectGridItem
        id={project.id}
        imagePath={project.imagePath}
        key={project.title}
        title={project.title}
      />
    ))}
  </GridContainer>
);

export default ProjectGrid;
