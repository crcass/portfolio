import { useLocation } from 'react-router-dom';
import projects from '../data/projectData';

const isAvailableRoute = (pathName: string) => {
  return (
    pathName === undefined ||
    pathName === 'projects' ||
    pathName === 'profile' ||
    pathName === 'contact' ||
    projects.some(project => project.id === pathName)
  );
};

export default function useDisplayTitle() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(path => path !== '');
  const index = currentPath.length - 1;

  if (!isAvailableRoute(currentPath[index])) {
    document.title = '404 | Chris Cass';

    return;
  }

  switch (currentPath[index]) {
    case undefined:
      document.title = 'Home | Chris Cass';
      break;
    case 'projects':
      document.title = 'Projects | Chris Cass';
      break;
    case 'profile':
      document.title = 'Profile | Chris Cass';
      break;
    case 'contact':
      document.title = 'Contact | Chris Cass';
      break;
    default:
      document.title = `${
        projects.filter(project => project.id === currentPath[index])[0].title
        } | Chris Cass`;
  }
}