import React, { Fragment } from 'react';
import projects from '../../projects';

const renderProjectPage = (route, projects) =>
  projects
    .filter(project => project.route === route)
    .map(project => (
      <article key={project.title}>
        <h2>{project.title}</h2>
        <p>{project.tech}</p>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} />
        <a href={project.liveUrl}>Live</a>
        <a href={project.githubUrl}>Github</a>
      </article>
    ));

const ProjectPage = props => {
  const { route } = props.match.params;
  return <Fragment>{renderProjectPage(route, projects)}</Fragment>;
};

export default ProjectPage;
