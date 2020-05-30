import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LatestProjects from '../../components/LatestProjects';
import StyledAnchor from '../../components/StyledAnchor';
import { colors } from '../../constants/colors';
import projects, { ProjectId } from '../../data/projectData';
import useScrollToTop from '../../hooks/useScrollToTop';
import NotFound from '../NotFound';

interface Params {
  id: ProjectId;
}

const projectTextStyle = {
  '@media(prefers-color-scheme: dark)': {
    color: colors.lighter,
  },
  color: colors.darkest,
  fontSize: 16,
  fontWeight: 400,
  margin: 0,
};
const AnchorWrap = styled.div({
  display: 'flex',
  marginTop: 48,
});
const PageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
const Wrapper = styled.div({
  display: 'flex',
  padding: '35px 0 31px',
  width: '100%',
});
const Column = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 6px',
});
const Heading = styled.h2(projectTextStyle);
const Img = styled.img({
  marginBottom: 112,
  width: '100%',
});
const Paragrah = styled.p({
  ...projectTextStyle,
  lineHeight: '20px',
});

const Project = () => {
  const { id } = useParams<Params>();
  const selectedProject = projects.find(project => project.id === id);

  useScrollToTop();

  if (!selectedProject) {
    return <NotFound />;
  }

  return (
    <PageWrapper>
      <PageWrapper>
        <Wrapper>
          <Column>
            <Heading>
              {selectedProject.title}
            </Heading>

            <Paragrah>
              Technology: {selectedProject.tech}
            </Paragrah>
          </Column>
          <Column>
            <Paragrah>
              {selectedProject.description}
            </Paragrah>

            <AnchorWrap>
              <StyledAnchor
                color={colors.dark}
                darkModeHoverColor={colors.lighter}
                hoverColor={colors.darkest}
                href={selectedProject.liveUrl}
                marginRight={48}
                rel="noopener noreferrer"
                target="_blank"
              >
                Demo
              </StyledAnchor>

              <StyledAnchor
                color={colors.dark}
                darkModeHoverColor={colors.lighter}
                hoverColor={colors.darkest}
                href={selectedProject.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </StyledAnchor>
            </AnchorWrap>
          </Column>
        </Wrapper>

        <Img
          alt={selectedProject.title}
          src={selectedProject.imagePath}
        />
      </PageWrapper>

      <LatestProjects withHeader />
    </PageWrapper>
  );
};

export default Project;
