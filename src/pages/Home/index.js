import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroWrap from './layout/HeroWrap';
import HeroBg from './layout/HeroBg';
import Hero from './layout/Hero';
import HeroContainer from './layout/HeroContainer';
import Featured from './layout/Featured';
import Image from '../../shared/Image';
import ProjectGrid from '../Projects/ProjectGrid';
import projects from '../../projects';
import { latestProjects, featuredProjects, handleHero } from '../../helpers';

const renderHero = projects =>
  projects.map(project => (
    <Hero key={project.title} className="hero">
      <Link to={`/projects/${project.route}/`}>
        <Image src={project.image} alt={project.title} />
      </Link>
    </Hero>
  ));

const Home = () => {
  useEffect(() => handleHero(count));

  function useInterval(callback, delay) {
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
  }

  let [count, setCount] = useState(0);

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

export default Home;
