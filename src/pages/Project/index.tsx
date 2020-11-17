import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import LatestProjects from '../../components/LatestProjects';
import projects, { ProjectId } from '../../data/projectData';
import useScrollToTop from '../../hooks/useScrollToTop';
import NotFound from '../NotFound';
import ProjectDetails from './ProjectDetails';
import { Img, PageWrapper } from './styles';

interface Params {
  id: ProjectId;
}

const Project: FC = () => {
  const { id } = useParams<Params>();
  const selectedProject = projects.find(project => project.id === id);

  useScrollToTop();

  if (!selectedProject) {
    return <NotFound />;
  }

  return (
    <PageWrapper>
      <PageWrapper>
        <ProjectDetails
          demoUrl={selectedProject.liveUrl}
          description={selectedProject.description}
          githubUrl={selectedProject.githubUrl}
          techDetails={selectedProject.tech}
          title={selectedProject.title}
        />

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
