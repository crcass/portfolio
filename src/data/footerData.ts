import { contactLinks } from './contactData';

interface FooterData {
  title: string;
  url: string;
}

export const footerData: FooterData[] = [
  {
    title: 'LinkedIn',
    url: contactLinks.linkedinUrl,
  }, {
    title: 'Github',
    url: contactLinks.githubUrl,
  }, {
    title: 'Resume',
    url: contactLinks.resumeUrl,
  },
];
