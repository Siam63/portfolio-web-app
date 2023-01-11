// Libraries
import Head from 'next/head';
import { BsFillMoonStarsFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Experience from './Experience';
import { useState } from "react";

// Components
import SocialLinks from './SocialLinks';
import About from './About';
import PreviousProjects from './PreviousProjects';
import HonourableMentions from './HonourableMentions';
import Contact from './Contact';

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

      <main className="md:px-20 bg-white lg:px-30 px-3  dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900">
        <section className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between">
            <h1 className="text-2xl text-teal-900 font-burtons dark:text-white">F.R.</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="dark:text-white cursor-pointer text-3xl"/></li>
              <li>
                <a href="T_UPDATED_RESUME.pdf" target="_blank" className="text-xs bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-100 bg-blue-500 hover:scale-125">
                  Resume
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-xs bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-100 bg-blue-500 hover:scale-125">
                  Contact Me!
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <About />
          </div>

          <div>
            <PreviousProjects />
          </div>

          <div>
            <HonourableMentions />
          </div>
          
          <div className="mt-36">
            <Experience />
          </div>
        </section>
      </main>
          
      <div className="dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 flex justify-end pr-5 pb-5" />
      

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