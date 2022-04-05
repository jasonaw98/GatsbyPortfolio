import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Aw', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi there, I'm",
  name: 'Jason Aw',
  subtitle: "I'm a Software QA Engineer/ Web3 Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Mypic2.jpg',
  paragraphOne: "Long story short, I'm actually a security student. But due to the Covid Pandemic I had a hard time getting a job regarding my scope of studies. But few months after my graduation, I've landed a role as a Software Enginner. From there I found myself diving into the world of development and started to pick up some skills.",
  paragraphTwo: "But later on, I've decided to took a turn for my career. I took a bold step in switching my current profession into the wolrd of QA. In this new world, I found it super interesting as the main goal is to automate almost everything. Yes! Everything!",
  paragraphThree: 'Putting my career aside. I also love to spend my spare time to dive deeper into the world of Development and AI. Below are the some of the projects on my GitHub besides my freelance. Feel free to reach me out for any projects and my resume can be accessed with a click of a button as below. ',
  resume: 'https://jasonaw98.github.io/MyResume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'memecoin.png',
    title: 'MemeCoin Crypto',
    info: 'This is a real Memecoin deployed onto the Rinkeby Testnet where users are able to request and transfer Crypto. It also contains a burn function to control infaltion. Click to check out!',
    info2: '',
    url: 'https://jasonaw98.github.io/memecoin.github.io/',
    repo: 'https://github.com/jasonaw98/memecoin.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Web Automation',
    info: 'This project is build on Python and Selenium to automate filling out forms and surveys. Click to check out!',
    info2: '',
    url: 'https://github.com/jasonaw98/WebAutomation',
    repo: 'https://github.com/jasonaw98/WebAutomation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Mern.jpeg',
    title: 'Full-Stack MERN App',
    info: 'This is a Full-stack MERN Project built with MongoDb and Node',
    info2: '',
    url: 'https://github.com/jasonaw98/React-Blog-Mern',
    repo: 'https://github.com/jasonaw98/React-Blog-Mern', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tempsnip.jpg',
    title: 'Flutter Wallpaper App',
    info: 'This is just a fun project I build to kill some time off. I will plan to make it available as a Web App soon I guess. 🤷‍♂️ ',
    info2: '',
    url: 'https://github.com/jasonaw98/WallpaperApp',
    repo: 'https://github.com/jasonaw98/WallpaperApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scrape.jpg',
    title: 'Web Scraping',
    info: 'This project is build on Jsoup with Java. Click to check out!',
    info2: '',
    url: 'https://github.com/jasonaw98/Web-Scrape',
    repo: 'https://github.com/jasonaw98/Web-Scrape', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jason_aw1998@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/jasonaw98/',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jason-a-bba727101/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jasonaw98',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
