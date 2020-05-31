import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from "../../data/projectData";
import { carouselClassNames } from '../../hooks/useHeroCarousel';
import { HeroBackground, HeroWrapper } from './styles';

interface HeroWithLinkProps {
  isInitialVisible: boolean;
  project: Project;
}

export const className = 'hero';

const HeroWithLink = ({ isInitialVisible, project }: HeroWithLinkProps) => (
  <HeroWrapper className={`${className} ${isInitialVisible ? carouselClassNames.visible : carouselClassNames.hidden}`}>
    <Link to={`/projects/${project.id}`}>
      <HeroBackground
        alt={project.title}
        src={project.imagePath}
      />
    </Link>
  </HeroWrapper>
);

export default HeroWithLink;