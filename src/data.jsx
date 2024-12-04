import { nanoid } from 'nanoid';
import { FaAngular, FaDocker, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { SiExpress, SiMysql, SiRuby, SiSequelize, SiSpringboot } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Angular',
    icon: <FaAngular className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Ruby',
    icon: <SiRuby className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'SpringBoot',
    icon: <SiSpringboot className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Aws',
    icon: <FaAws className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: <SiExpress className='h-16 w-16 text-emerald-500' />
  },
  {
    id: nanoid(),
    title: 'Sequilize',
    icon: <SiSequelize className='h-16 w-16 text-emerald-500' />
  },

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1597441200453-8360298c4e7a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'http://parksomewhereapp.s3-website.us-east-2.amazonaws.com',
    github: 'https://github.com/Candide23/Parks-N-Rec-Candide',
    title: 'National Park Website',
    text: 'My project is a group project where we create a website that can tell me all the information that I need about national Parks, so I can plan in advance my visit.',
  },
  {
    id: nanoid(),
    img: 'https://1.bp.blogspot.com/--N26aRZdGGM/X3w1K1Ua5aI/AAAAAAAAA6U/CAW__gnZGAwwhtESQ8nIaM5e-vBrXRhzwCLcBGAsYHQ/s1280/Create%2Ba%2BQuiz%2BApp%2Bwith%2BTimer%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp',
    url: 'http://quizap.s3-website.us-east-2.amazonaws.com/',
    github: 'https://github.com/Candide23/Quiz',
    title: 'Quiz',
    text: "We have a Quiz App using the Open Trivia DB API, letting users set up quizzes, answer questions, and choose categories.",
  },
  {
    id: nanoid(),
    img: 'https://www.shape.com/thmb/CLEIsSUYLZ_YMpJ9HENw4Hdbh8M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dietitian-Approved-Mindfullness-App-Way-Health-Shape-Stocksy_txp161f28e5NZP300_Medium_1878239-2000-1465385a832c4ad98b542a2b5e58a00e.jpg',
    github: 'https://github.com/Candide23/HealthTrack',
    title: 'HealthTrack',
    text: 'HealthTrack helps users log health metrics, track symptoms, and manage appointments with a dashboard visualizing health trends. The project enhanced my skills in implementing JUnit tests for reliable functionality.',
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Candide23/library',
    title: 'MBK Library',
    text: 'A full-stack web app for browsing and checking out library books, featuring search, reviews, loans management, and admin controls. Built with React and Spring Boot.',
  },
  {
    id: nanoid(),
    img: 'https://plus.unsplash.com/premium_photo-1684785617123-8dd039cdb2c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Candide23/MbkEcommerce',
    title: 'MbkEcoomerce',
    text: "This project is a real-time e-commerce application using Angular for the front-end and Spring Boot for the back-end, connected via a REST API, with full CRUD support for the database.",
  },
];
