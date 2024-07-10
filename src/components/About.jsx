import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='About Illustration' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am Candide Mboungou-Kimpolo, a Junior Full-Stack Software Engineer transitioning from finance,
             with 4+ years of experience in the finance industry. Skilled in object oriented programming with 
             Java and Ruby, Spring Boot, and React Js, with experience in the data privacy sector in a startup
              environment. Experienced in managing projects in finance roles, including development of new products 
              and automation of processes.

          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

