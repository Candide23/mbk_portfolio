import { nanoid } from 'nanoid';
import { FaAngular, FaDocker, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { SiExpress, SiMysql, SiRuby, SiSpringboot } from 'react-icons/si';

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

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'http://parksomewhereapp.s3-website.us-east-2.amazonaws.com',
    github: 'https://github.com/Candide23/Parks-N-Rec-Candide',
    title: 'National Park Website',
    text: 'My project is a group project where we create a website that can tell me all the information that I need about national Parks, so I can plan in advance my visit.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'http://quizap.s3-website.us-east-2.amazonaws.com/',
    github: 'https://github.com/Candide23/Quiz',
    title: 'Quiz',
    text: "We have a Quiz App using the Open Trivia DB API, letting users set up quizzes, answer questions, and choose categories.",
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
