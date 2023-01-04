import Head from 'next/head';
import { BsFillMoonStarsFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import selfie from "../public/cartoon-img.jpeg";
import Experience from './Experience';
import { useState } from "react";

import techverse from "../public/techverse_img.png";
import movierecommender from "../public/movie_recommender.png";
import gpaCalc from "../public/gpa_calc.png";
import qixGame from "../public/qix_game.png";

import iosPic1 from "../public/ios_app_pic_1.png";
import iosPic2 from "../public/ios_app_pic_2.png";
import iosPic3 from "../public/ios_app_pic_3.png";

import spaceInvaders from "../public/space-invaders.png";
import isell from "../public/isell-web-app-pic.jpeg";
import freelancing from "../public/freelancing_pic.jpeg";
import coretech from "../public/coretech_pic.png";
import techVerse from "../public/tech_verse_img.gif";
import weatherPic from "../public/weather-app.png";
import dfsTree from "../public/dfs.jpeg";
import rpgPic from "../public/rpg_game.jpeg";
import todoPic from "../public/todo-list.jpeg";

import SocialLinks from './SocialLinks';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <SocialLinks />
      <Head>
        <title>Faiazur Rahman Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:px-20 bg-white lg:px-30 px-10  dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900">
        <section className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between">
            <h1 className="text-2xl text-teal-900 font-burtons dark:text-white">F.R.</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="dark:text-white cursor-pointer text-3xl"/></li>
              <li>
                <a href="https://www.google.com/" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-100 bg-blue-500 hover:scale-125">
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto:siamrahman711@gmail.com" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-100 bg-blue-500 hover:scale-125">
                  Contact Me!
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium pb-5 dark:text-gray-300">Hey, I'm Faiazur Rahman, a Full Stack Software Engineer</h2>
            <h3 className="text-2xl py-2 text-slate-500 dark:text-gray-400">Leveraging my technical expertise to build world-class software for businesses</h3>
            <p className="text-md leading-8 text-gray-800 dark:text-gray-300">Welcome to my personal portfolio website! This wesbite was created completely using Tailwind, React, NextJS, CSS and HTML.
            </p>
            <p className="dark:text-gray-300">
            I create scalable, modern websites with seamless cross-browser compatibility, ensuring that all content is displayed perfectly on all devices.
            </p>
            {/* <p className="text-md leading-8 text-gray-800">
              I have 1+ years of professional experience in front-end and back-end development.
              I am currently looking for new full-time opportunties to practice and utilize my skills
              in a professional environment!
            </p> */}
          </div>

          <div className="relative mx-auto w-80 h-80">
            <Image className="rounded-full w-80 h-70" src={selfie}/>
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
        </section>

        <section>
        <h1 className="text-center text-2xl mt-2 dark:text-gray-200">Portfolio - Previous Projects</h1>
          <div className="lg:flex gap-5 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="dark:text-gray-700 text-3xl font-medium pt-8 pb-2">Techverse - Online E-Commerce Website</h3>

              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300">
                <Image src={techverse} class="transform transition-all hover:scale-125 delay-100" width={800}></Image>
              </div>

              <h4 className="text-teal-600 font-medium py-5 text-xl">Tools Used</h4>
              <p>JavaScript</p>
              <p>HTML and CSS</p>
              <p>PHP</p>
              <p>Angular</p>
              <p>MySQL DataBase</p>

              <a href="#_" class="hover:scale-125 transition-all delay-75 relative items-center justify-center inline-block mt-5 px-5 p-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>

            <div className="dark:text-gray-700 dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-3xl font-medium pt-16 pb-2">Movie Recommender</h3>
              
              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300">
                <Image src={movierecommender} class="object-cover transform transition-all hover:scale-125 delay-100" width={800}></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>ReactJS</p>
              <p>JavaScript</p>
              <p>HTML and CSS</p>
              <p>Hosted via Heroku</p>
              <a href="#_" class="mt-12 hover:scale-125 transition-all delay-75 relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>
          </div>

          <div className="lg:flex gap-5 justify-center">
            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="dark:text-gray-600 text-3xl font-medium pt-8 pb-2">Ryerson University GPA Calculator</h3>
              
              <div className="flex justify-center p-10 border-b-2 border-gray-300">
                <Image className="object-cover transform transition-all hover:scale-125 delay-100" src={gpaCalc}></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>ReactJS</p>
              <p>HTML and CSS</p>
              <p>Hosted via Heroku</p>
              <a href="#_" class="hover:scale-125 transition-all delay-75 relative items-center justify-center inline-block mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>

            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-3xl font-medium pt-8 pb-2 dark:text-gray-600">Qix Arcade Game</h3>
              
              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300 pb-20">
                <Image src={qixGame} class="object-cover transform transition-all hover:scale-125 delay-100"></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>PyGame</p>
              <p>Python</p>
              <a href="#_" class="hover:scale-125 transition-all delay-75 relative items-center justify-center inline-block mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>
          </div>

          <div>
            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="dark:text-gray-700 text-3xl font-medium pt-8 pb-2">iOS Financial Management App</h3>
              
              <div className="md:flex-row flex justify-center p-10 flex-col border-solid border-b-2 border-gray-300">
                <Image src={iosPic1} class="p-2 object-cover h-96 w-48 mr-10 transform transition-all hover:scale-125 delay-100"></Image>
                <Image src={iosPic2} class="p-2 object-cover h-96 w-48 mr-10 transform transition-all hover:scale-125 delay-100"></Image>
                <Image src={iosPic3} class="p-2 object-cover h-96 w-48 transform transition-all hover:scale-125 delay-100"></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>Swift</p>
              <p>XCode</p>
              <p>FireBase Auth</p>
              <p>FireBase DB</p>
              <a href="#_" class="hover:scale-125 transition-all delay-75 relative inline-flex items-center justify-center mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>
          </div>
        </section>

        <section>

          <h1 className="text-center text-3xl dark:text-white">Honourable Mentions</h1>
          <div className="md:flex justify-evenly">
              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={spaceInvaders} height={150} width={150}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Space Invaders
                </h1>
                <p className="py-5">
                  Technologies: Python, PyGame
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={isell} height={150} width={200}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  iSell Web Application
                </h1>
                <p className="py-5">
                  Technologies: ReactJS, HTML and CSS
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={freelancing} height={150} width={225}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Freelancing Website
                </h1>
                <p className="py-5">
                  Technologies: MongoDB, ReactJS, NodeJS, HTML and CSS
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>
          </div>

          <div className="md:flex justify-evenly">
              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={coretech} height={150} width={150}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Space Invaders
                </h1>
                <p className="py-5">
                  Python, Java and Business Instructor
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={techVerse} height={200} width={200}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Techverse Web Application
                </h1>
                <p className="py-5">
                  Technologies: Angular, HTML and CSS, JavaScript, PHP, MySQL DB
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={weatherPic} height={150} width={150}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Weather Application
                </h1>
                <p className="py-5">
                  Technologies: ReactJS, Weather API, HTML and CSS
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>
          </div>

          <div className="md:flex justify-evenly">
              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={dfsTree} height={150} width={150}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  DFS Implementation
                </h1>
                <p className="py-5">
                  Technologies: Java
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={todoPic} height={250} width={250}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Todo List App
                </h1>
                <p className="py-5">
                  Technologies: ReactJS, HTML and CSS
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-125 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={rpgPic} height={150} width={225}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  TextBased RPG
                </h1>
                <p className="py-5">
                  Technologies: Java
                </p>
                <div className="flex justify-center">
                  <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>
          </div>
          
        </section>

        <Experience />
        
      </main>
          
      <div className=" dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 flex justify-end pr-5 pb-5">
        
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900">
          <a className="hover:cursor-pointer hover:scale-125 transition-all" href="https://www.gmail.com/" target="_blank">
            <AiFillMail />
          </a>
          <a className="hover:cursor-pointer hover:scale-125 transition-all" href="https://www.linkedin.com/in/siam-r/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a className="hover:cursor-pointer hover:scale-125 transition-all" href="https://github.com/Siam63" target="_blank">
            <AiFillGithub />
          </a>
          
          <a href="#" className="dark:text-gray-300 hover:scale-125 text-gray-500 hover:cursor-pointer hover:text-gray-600 transition-all">
            < BsFillArrowUpCircleFill />
          </a>
      </div>
    </div>
  )
}