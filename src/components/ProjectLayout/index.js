import React from 'react';
import PropTypes from 'prop-types';
import Anchor from './layout/Anchor';
import Links from './layout/Links';
import ProjectContainer from './layout/ProjectContainer';
import Title from './layout/Title';
import Details from '../../shared/Details';
import DetailsWrap from '../../shared/DetailsWrap';
import Image from '../../shared/Image';

const propTypes = {
  dark: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired
};

const ProjectLayout = ({ project, dark }) => (
  <ProjectContainer>
    <DetailsWrap>
      <Details dark={dark}>
        <Title>{project.title}</Title>
        <p>Technology: {project.tech}</p>
      </Details>
      <Details dark={dark}>
        <p>{project.description}</p>
        <Links dark={dark}>
          <Anchor
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            dark={dark}
          >
            Demo
          </Anchor>
          <Anchor
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            dark={dark}
          >
            Github
          </Anchor>
        </Links>
      </Details>
    </DetailsWrap>
    <Image src={project.image} alt={project.title} />
  </ProjectContainer>
);

ProjectLayout.propTypes = propTypes;

export default ProjectLayout;
