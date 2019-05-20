import projects from '../projects';

const findPage = route => {
  return (
    route === 'portfolio' ||
    route === 'projects' ||
    route === 'profile' ||
    route === 'contact' ||
    projects.some(project => project.route === route)
  );
};

export const displayTitle = location => {
  const path = location.pathname.split('/').filter(path => path !== '');
  const index = path.length - 1;
  if (!findPage(path[index])) {
    document.title = '404 | Chris Cass';
    return;
  }
  switch (path[index]) {
    case 'portfolio':
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
        projects.filter(project => project.route === path[index])[0].title
      } | Chris Cass`;
  }
};

export const latestProjects = projects =>
  projects.filter((project, i) => i < 4);

export const featuredProjects = projeects =>
  projects.filter(project => project.featured);

export const handleHero = count => {
  const hero = document.querySelectorAll('.hero');
  const current = hero[count];
  const previous = hero[count - 1] || hero[3];

  previous.style.opacity = 0;
  previous.style.zIndex = 1;

  current.style.opacity = 1;
  current.style.zIndex = 2;
};
