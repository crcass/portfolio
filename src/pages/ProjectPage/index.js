import React, { Fragment } from 'react';
import ProjectLayout from '../../components/ProjectLayout';
import ProjectGrid from '../Projects/ProjectGrid';
import Latest from '../../components/ProjectLayout/layout/Latest';
import LatestTitle from '../../components/ProjectLayout/layout/LatestTitle';
import projects from '../../projects';
import { latestProjects } from '../../helpers';

const renderProjectPage = (route, projects) =>
  projects
    .filter(project => project.route === route)
    .map(project => <ProjectLayout key={project.title} project={project} />);

const ProjectPage = props => {
  const { route } = props.match.params;
  return (
    <Fragment>
      {renderProjectPage(route, projects)}
      <LatestTitle>
        <h3>Latest Projects</h3>
      </LatestTitle>
      <Latest>
        <ProjectGrid projects={latestProjects(projects)} />
      </Latest>
    </Fragment>
  );
};

export default ProjectPage;
