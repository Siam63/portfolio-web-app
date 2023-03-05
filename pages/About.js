import React from 'react'
import selfie from "../public/cartoon-img.jpeg";
import Image from 'next/image';
import Typed from 'react-typed';

function About() {
    return (
        <div>
            <div className="text-center md:p-10">
              <h2 className="text-3xl md:text-5xl text-teal-600 font-medium pb-5 dark:text-gray-300">Hey, I'm Faiazur Rahman, a Full Stack Software Engineer</h2>
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
            <h1 className="text-2xl py-1">A Little About Me</h1>
            <p className="dark:text-gray-200 mx-auto max-w-5xl text-md leading-8 text-gray-600">
              I completed my BSc in Applied Mathematics and Computer Science at Ryerson University. Sounds complex, and let me tell you, it was.
              Ever since I was introduced to programming back in grade 7, I quickly fell in love with it. I have built several 
              projects like <span className="text-teal-500"> text-based RPGs </span> all the way to <span className="text-teal-500">full stack e-commerce web applications</span>. I've worked remotely
              as a Software Engineer for one of the largest IT Consulting companies in the world, <span className="text-teal-500"> Capgemini </span>. With more than 1 years of experience, 
              I want to take my skills to the next level and explore even more technologies and apply them at a large scale.
            </p>
          </div>
        </div>
    )
}

export default About
