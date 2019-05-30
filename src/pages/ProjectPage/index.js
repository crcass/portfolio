import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectLayout from '../../components/ProjectLayout';
import ProjectGrid from '../Projects/ProjectGrid';
import Latest from './layout/Latest';
import LatestTitle from './layout/LatestTitle';
import { latestProjects } from '../../helpers';

const propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      route: PropTypes.string.isRequired
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  dark: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired
};

const renderProjectPage = (route, projects, dark) =>
  projects
    .filter(project => project.route === route)
    .map(project => (
      <ProjectLayout key={project.title} project={project} dark={dark} />
    ));

const ProjectPage = props => {
  useEffect(() => window.scrollTo(0, 0), []);

  const { route } = props.match.params;
  const { dark, projects } = props;

  return (
    <main>
      {renderProjectPage(route, projects, dark)}
      <LatestTitle dark={dark}>
        <h3>Latest Projects</h3>
      </LatestTitle>
      <Latest>
        <ProjectGrid projects={latestProjects(projects)} />
      </Latest>
    </main>
  );
};

ProjectPage.propTypes = propTypes;

export default ProjectPage;
