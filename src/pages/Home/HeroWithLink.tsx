import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectData';
import { carouselClassNames } from '../../hooks/useHeroCarousel';
import { HeroBackground, HeroWrapper } from './styles';

interface Props {
  isInitialVisible: boolean;
  project: Project;
}

export const className = 'hero';

const HeroWithLink: FC<Props> = ({ isInitialVisible, project }: Props) => (
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