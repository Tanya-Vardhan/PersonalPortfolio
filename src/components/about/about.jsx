import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import aboutMepic from '../../assets/aboutMepic.jpeg';

const About = () => {
  return (
    <div id="About" className='md:flex items-center md:flex-wrap md:justify-center overflow-hidden text-white bg-black shadow-xl mx-4 md:mx-20 bg-opacity-30 rounded-xl p-12'>
      <div>
      <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
      <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
      <img className='h-40 md:h-80 w-auto md:w-auto mr-6' src={aboutMepic} alt='placeholder' />

        <ul>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt-1'/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Competitive Programmer</h1>
              <p className='text-sm md:text-md leading-tight'>
                 I enjoy problem-solving, which makes competitive programming an exciting challenge for me.  
                  I actively participate in contests on various platforms, constantly improving my skills in  
                  data structures and algorithms. I am a <b><i>Pupil</i></b> on Codeforces and a <b><i>3-star</i></b> coder on CodeChef,  
                  regularly competing to enhance my problem-solving abilities and speed.
              </p>

            </span>  
          </div>
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt-1'/>
            <span className='w-96'>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Web Developer</h1>
              <p className='text-sm md:text-md leading-tight'>
              I am exploring the field of web development and have recently learned frontend technologies 
              like React.js and Tailwind CSS. I enjoy building interactive and responsive user interfaces, 
              constantly refining my skills to create better web experiences. Soon, I plan to dive into backend 
              development to expand my knowledge and work on full-stack applications.
              </p>
            </span>  
          </div>
         
        </ul>
      </div>
      </div>
    </div>
  );
};

export default About;
