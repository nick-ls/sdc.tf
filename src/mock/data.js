import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'sdc.tf', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'San Diego CTF', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'coming soon ',
  name: 'sdc.tf',
  subtitle: 'Friday April 16, 6pm - Sunday April 18, 6pm (PST)',
  cta: 'Register Now',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/cyber-ucsd/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/orgs/acmucsd/teams/acm-cyber',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
