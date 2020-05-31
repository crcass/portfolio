import React from 'react';
import { ProjectLink } from './ProjectLink';
import { AnchorWrap, Column, Heading, Paragrah, Wrapper } from './styles';

interface Props {
  demoUrl: string;
  description: string;
  githubUrl: string;
  techDetails: string;
  title: string;
}

const ProjectDetails: React.FC<Props> = ({
  demoUrl,
  description,
  githubUrl,
  techDetails,
  title,
}) => (
    <Wrapper>
      <Column>
        <Heading>
          {title}
        </Heading>

        <Paragrah>
          Technology: {techDetails}
        </Paragrah>
      </Column>
      <Column>
        <Paragrah>
          {description}
        </Paragrah>

        <AnchorWrap>
          <ProjectLink
            href={demoUrl}
            title="Demo"
          />

          <ProjectLink
            href={githubUrl}
            title="Github"
          />
        </AnchorWrap>
      </Column>
    </Wrapper>
  )

export default ProjectDetails;
