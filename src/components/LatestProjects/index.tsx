import React, { FC } from 'react';
import projects from '../../data/projectData';
import ProjectGrid from '../ProjectGrid';
import { HeaderText, HeaderWrapper, LatestProjectsContainer } from './styles';

interface Props {
  withHeader?: boolean;
}

const latestProjects = projects.filter(project => project.featured);

const LatestProjects: FC<Props> = ({ withHeader }) => (
  <LatestProjectsContainer>
    {withHeader && (
      <HeaderWrapper>
        <HeaderText>
          Latest Projects
        </HeaderText>
      </HeaderWrapper>
    )}

    <ProjectGrid projects={latestProjects} />
  </LatestProjectsContainer>
);

export default LatestProjects;
