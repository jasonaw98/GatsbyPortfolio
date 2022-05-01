/* eslint-disable prettier/prettier */
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
  subtitle: "I'm a Web3 Engineer / Software QA Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Mypic2.jpg',
  paragraphOne:
    "Long story short, I'm actually a security student. But due to the Covid Pandemic I had a hard time getting a job regarding my scope of studies. But few months after my graduation, I've landed a role as a Software Enginner. From there I found myself diving into the world of development and started to pick up some skills.",
  paragraphTwo:
    "But later on, I've decided to took a turn for my career. I took a bold step in switching my current profession into the wolrd of QA. In this new world, I found it super interesting as the main goal is to automate almost everything. Yes! Everything!",
  paragraphThree:
    'Putting my career aside. I also love to spend my spare time to dive deeper into the world of Development and AI. Below are the some of the projects on my GitHub besides my freelance. Feel free to reach me out for any projects and my resume can be accessed with a click of a button as below. ',
  resume: 'https://jasonaw98.github.io/MyResume/', // if no resume, the button will not show up
  cv: 'https://jasonaw98.github.io/MyCV/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SolDapp.png',
    title: 'Solana Dapp',
    info: 'A DAPP build on Solana Blockchain where users able to view and submit their favorite Electric Cars GIF or Images link. Build on Devnet and Sol Devnet is required',
    info2: '',
    url: 'https://solana-dapp-lake.vercel.app/',
    repo: 'https://github.com/jasonaw98/SolanaDapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SolNFT.png',
    title: 'Solana NFT App',
    info: 'Users can use this Web App to mint their Marvel Avenger Themed NFT! Some Devnet Sol is required to mint successfully',
    info2: '',
    url: 'https://solana-nft-two-theta.vercel.app/',
    repo: 'https://github.com/jasonaw98/Solana-NFT', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DeFi.png',
    title: 'DeFi Exchange',
    info: 'A DeFi Exchange Dapp where users would able to add tokens into liquidity pools and get LP Tokens in return.',
    info2: '',
    url: 'https://de-fi-exchange-app.vercel.app/',
    repo: 'https://github.com/jasonaw98/DeFi-ExchangeApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ICO.png',
    title: 'Native Coin Mint',
    info: 'Users can come here to mint the native tokens to be able to contribute and participate in the DeFi app to add their tokens in to the liquidity pools and earn LP Tokens',
    info2: '',
    url: 'https://initial-coin-offer.vercel.app/',
    repo: 'https://github.com/jasonaw98/Initial-Coin-Offer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MNS.png',
    title: 'Polygon Name Service',
    info: 'A web app that let users purchase their very own marvel domain name and it comes with an unique NFT.',
    info2: '',
    url: 'https://domain-starter-project.jasonaw98.repl.co/',
    repo: 'https://github.com/jasonaw98/Domain-name-service-Polygon', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'sol.png',
  //   title: 'Solana Pay Store',
  //   info: 'This is an online store which customers able to purchase cookies with Solana Pay. Users can also pay by scanning the QR code generated with their mobile Phantom Wallet App. Once payment is done it will automatically update the checkout',
  //   info2: '',
  //   url: 'https://buildspace-dao-starter-v2.jasonaw98.repl.co/',
  //   repo: 'https://github.com/jasonaw98/MyFirstDAO', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'firstdao.png',
    title: 'DAO',
    info: 'This is a fully functional DAO with voting and treasury capabilities. Users can sign up and mint an NFT to become a member and receive Governence Token to vote. Click to check out!',
    info2: '',
    url: 'https://buildspace-dao-starter-v2.jasonaw98.repl.co/',
    repo: 'https://github.com/jasonaw98/MyFirstDAO', // if no repo, the button will not show up
  },
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
      url: 'https://www.linkedin.com/in/jason-aw-han-wei/',
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
