import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeroWrap from './layout/HeroWrap';
import HeroBg from './layout/HeroBg';
import Hero from './layout/Hero';
import HeroContainer from './layout/HeroContainer';
import Featured from './layout/Featured';
import Image from '../../shared/Image';
import ProjectGrid from '../Projects/ProjectGrid';
import { featuredProjects, handleHero, latestProjects } from '../../helpers';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const renderHero = projects =>
  projects.map(project => (
    <Hero key={project.title} className="hero">
      <Link to={`/projects/${project.route}/`}>
        <Image src={project.image} alt={project.title} />
      </Link>
    </Hero>
  ));

const propTypes = {
  projects: PropTypes.array.isRequired
};

const Home = ({ projects }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  let [count, setCount] = useState(0);
  useEffect(() => handleHero(count));

  useInterval(() => {
    if (count === 3) {
      count = -1;
    }
    setCount(count + 1);
  }, 7000);

  return (
    <main>
      <HeroContainer>
        <HeroWrap>
          {renderHero(latestProjects(projects))}
          <HeroBg src={projects[0].image} alt={projects[0].title} />
        </HeroWrap>
      </HeroContainer>
      <Featured>
        <ProjectGrid projects={featuredProjects(projects)} />
      </Featured>
    </main>
  );
};

Home.propTypes = propTypes;

export default Home;
