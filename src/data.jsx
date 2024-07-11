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
    img: 'https://private-user-images.githubusercontent.com/89795037/347471706-7cc5cd02-39e9-4d3a-83a1-8fd49d475512.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA2MjYyODgsIm5iZiI6MTcyMDYyNTk4OCwicGF0aCI6Ii84OTc5NTAzNy8zNDc0NzE3MDYtN2NjNWNkMDItMzllOS00ZDNhLTgzYTEtOGZkNDlkNDc1NTEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzEwVDE1Mzk0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVlNmU0ZDQwYzY5NzdkZTlhMTBiYTAzZDc3MzY3YjJjMmQ4YmNiOTY0MGRhYmFmZGRhZjlkOTg3YjgyYjM3N2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zq87JNCSBT5YQW8bSC_z8zWb6icdTsyggKHuK1wIMuw',
    url: 'http://quizap.s3-website.us-east-2.amazonaws.com/',
    github: 'https://github.com/Candide23/Quiz',
    title: 'Quiz',
    text: "We have a Quiz App using the Open Trivia DB API, letting users set up quizzes, answer questions, and choose categories.",
  },
  {
    id: nanoid(),
    img: 'https://user-images.githubusercontent.com/89795037/204162399-9b0a9a63-2d64-49a8-8448-8a135fefc0e5.png',
    github: 'https://github.com/Candide23/trusthealthy',
    title: 'TrustHealthy',
    text: 'Trusthealthy is an application which allows the user to view all the patient records, to register a new patient, to enter clinical data for a pateint, to analyze and see a report of the latest tests.',
  },
  {
    id: nanoid(),
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
