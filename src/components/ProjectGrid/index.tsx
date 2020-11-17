import React, { FC } from 'react';
import { Project } from '../../data/projectData';
import ProjectGridItem from './ProjectGridItem';
import { GridContainer } from './styles';

interface Props {
  projects: Project[];
}

const ProjectGrid: FC<Props> = ({ projects }) => (
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
