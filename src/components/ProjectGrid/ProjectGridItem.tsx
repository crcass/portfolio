import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { ProjectId } from '../../data/projectData';
import { GridItemContainer, GridItemImage, GridItemLink, GridItemOverlay, GridItemTextWrapper, GridItemTitle, GridItemWrapper } from './styles';

interface Props {
  id: ProjectId;
  imagePath: string;
  title: string;
}

const ProjectGridItem = ({ id, imagePath, title }: Props) => {
  const location = useLocation();

  const projectRoute = location.pathname !== ROUTES.PROJECTS ? `/projects/${id}` : id;

  return (
    <GridItemWrapper>
      <GridItemLink to={projectRoute}>
        <GridItemContainer>
          <GridItemOverlay className="overlay" />

          <GridItemTextWrapper className="title">
            <GridItemTitle>
              {title}
            </GridItemTitle>
          </GridItemTextWrapper>

          <GridItemImage src={imagePath} />
        </GridItemContainer>
      </GridItemLink>
    </GridItemWrapper>
  );
};

export default ProjectGridItem;