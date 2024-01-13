import React from 'react'
import selfie from "../public/cartoon-img.jpeg";
import Image from 'next/image';
import Typed from 'react-typed';

function About() {
    return (
        <div>
            <div className="text-center md:p-10">
              <h2 className="text-3xl md:text-4xl text-teal-600 font-medium pb-5 dark:text-gray-300">Welcome! I'm Faiazur Rahman, a Full Stack Software Engineer</h2>
              <h3 className="text-2xl py-2 text-slate-500 dark:text-gray-400">Leveraging my technical expertise to build world-class software for businesses</h3>
              <p className="text-md leading-8 text-gray-800 dark:text-gray-300">Welcome to my personal portfolio website! This wesbite was created completely using Tailwind, React, NextJS, CSS and HTML.
              </p>
            <div>
            <p className="dark:text-gray-300">
              I create scalable, modern websites with seamless cross-browser compatibility, ensuring that all content is displayed perfectly on all devices, utilizing tools like,
            </p>
            <Typed className="font-semibold text-xl text-teal-700 dark:text-gray-300" strings={['ReactJS', 'HTML', 'CSS', 'NextJS', 'TailwindCSS', 'JavaScript']} typeSpeed={60} backSpeed={40} loop/>
            </div>
          </div>

          <div className="relative mx-auto w-80 h-80">
            <Image className="rounded-full w-80 h-70 pt-5" src={selfie}/>
          </div>

          <div className="dark:text-gray-300 mx-auto text-center mt-[-30px]">
            <h1 className="text-2xl py-1">Who Am I?</h1>
            <p className="dark:text-gray-200 mx-auto max-w-5xl text-md leading-8 text-gray-600">
              Welcome to my portfolio! I'm Faiazur Rahman, a passionate and driven Software Engineer with a BSc in 
              Applied Mathematics and Computer Science from Ryerson University. Notably, I earned a place on the Dean's List
              for academic excellence during my time at University.
            </p>

            <br></br>

            <p className="dark:text-gray-200 mx-auto max-w-5xl text-md leading-8 text-gray-600">
              My journey into the world of programming began in grade 7, and it was love at first <span className="line-through">sight</span> code when I was 
              introduced to Python. Fueling my passion, I developed a small Celsius to Fahrenheit converter - a project that
              marked my inception of my programming endeavors. Having honed my skills, I ventured into the professional realm of Software Engineering, starting my career as a 
              Backend Software Engineer at <span className="text-teal-500"> Capgemini</span>. This experience laid the foundation for my subsequent role at 
              <span className="text-teal-500"> Jarvis Consulting Group</span>, where I thrived as a Software Development Engineer and also took on the role of a 
              Teaching Assistant. 
            </p>

            <br></br>

            <p className="dark:text-gray-200 mx-auto max-w-5xl text-md leading-8 text-gray-600">
              Now armed with a rich skill set and drive for innovation, I am poised to take my capabilities to the next level.
              Join me on this exciting journey as I explore new horizons and push the boundaries of what can be achieved with
              technology!
            </p>
          </div>
        </div>
    )
}

export default About
