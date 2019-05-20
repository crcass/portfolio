import React from 'react';
import ProjectContainer from './layout/ProjectContainer';
import DetailsWrap from '../../shared/DetailsWrap';
import Details from '../../shared/Details';
import Title from './layout/Title';
import Links from './layout/Links';
import Image from '../../shared/Image';

const ProjectLayout = ({ project }) => (
  <ProjectContainer>
    <DetailsWrap>
      <Details>
        <Title>{project.title}</Title>
        <p>Technology: {project.tech}</p>
      </Details>
      <Details>
        <p>{project.description}</p>
        <Links>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Links>
      </Details>
    </DetailsWrap>
    <Image src={project.image} alt={project.title} />
  </ProjectContainer>
);

export default ProjectLayout;
