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
            I am Candide Mboungou-Kimpolo, a Junior Full-Stack Software Engineer transitioning from a robust finance background to the dynamic world of software development. With over four years of experience in the finance industry, I have honed my skills in object-oriented programming, specifically in Java and Ruby, as well as in modern frameworks like Spring Boot and React JS.
            Throughout my career, I have managed and contributed to various projects, from developing new financial products to automating complex processes. My transition into software development has allowed me to leverage my analytical skills and meticulous attention to detail, ensuring the creation of efficient, high-quality applications.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

