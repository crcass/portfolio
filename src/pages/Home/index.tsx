import React, { FC } from 'react';
import LatestProjects from '../../components/LatestProjects';
import projects from '../../data/projectData';
import { useHeroCarousel } from '../../hooks/useHeroCarousel';
import useScrollToTop from '../../hooks/useScrollToTop';
import HeroWithLink, { className } from './HeroWithLink';
import { Div, HeroBackground, RelativeWrapper, Wrapper } from './styles';

const latestProjects = projects.filter((project, i) => i < 4);

const renderHeroImages = () => (
  latestProjects.map((project, i) => (
    <HeroWithLink
      isInitialVisible={i === 0}
      key={project.id}
      project={project}
    />
  ))
);

const timeout = 7000;

const Home: FC = () => {
  useScrollToTop();

  useHeroCarousel({ className, timeout });

  return (
    <Wrapper>
      <Div>
        <RelativeWrapper>
          {renderHeroImages()}
          <HeroBackground
            alt={projects[0].title}
            invisible
            src={projects[0].imagePath}
          />
        </RelativeWrapper>
      </Div>
      <LatestProjects />
    </Wrapper>
  );
};

export default Home;
