// Libraries
import React from 'react'
import Image from 'next/image';

// Assets
import spaceInvaders from "../public/space-invaders.png";
import isell from "../public/isell-web-app-pic.jpeg";
import freelancing from "../public/freelancing_pic.jpeg";
import coretech from "../public/coretech_pic.png";
import weatherPic from "../public/weather-app.png";
import dfsTree from "../public/dfs.jpeg";
import rpgPic from "../public/rpg_game.jpeg";
import todoPic from "../public/todo-list.jpeg";
import iquotePic from '../public/iquote_img.png';

function HonourableMentions({ darkMode }) {
    return (
        <div className={ darkMode ? "text-gray-200 grid grid-cols-1" : "grid grid-cols-1"}>
            <h1 className="text-center text-3xl dark:text-white">Honourable Mentions</h1>
            
            <div className="2xl:px-60 md:flex justify-evenly">
              <div className="flex flex-col justify-center transform transition-all hover:scale-105 delay-50 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
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
                  <a href="https://github.com/Siam63/space_invaders" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
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
                  <a href="https://github.com/Siam63/new-isell-app" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
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
                  <a href="https://github.com/Siam63/freelancing-website/tree/master" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>
          </div>

          <div className="2xl:px-60 md:flex justify-evenly">
              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="shadow-lg" src={coretech} height={150} width={150}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  Founder of CoreTech Learning
                </h1>
                <p className="py-5">
                  Python, Java and Business Instructor
                </p>
                <div className="flex justify-center">
                  <a href="https://www.youtube.com/@coretechlearning3706" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Channel
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
                <div className="flex justify-center">
                  <Image class="object-fit h-36 w-36 shadow-lg" src={iquotePic} height={200} width={200}></Image>
                </div>
                
                <h1 className="text-xl pt-2">
                  iQuote
                </h1>
                <p className="py-5">
                  Technologies: Swift, XCode
                </p>
                <div className="flex justify-center">
                  <a href="https://github.com/Siam63/iQuote" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
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
                  <a href="https://github.com/Siam63/new-weather-app/tree/clean-up-push" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>
          </div>

          <div className="2xl:px-60 md:flex justify-evenly">
              <div className="md:grid-cols-1 flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
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
                  <a href="https://github.com/Siam63/DFS-implementation" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
                
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
                  <a href="https://github.com/Siam63/react-todo-app" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center transform transition-all hover:scale-105 relative mx-auto w-80 h-96 bg-sky-200 text-center shadow-lg p-5 rounded-xl my-10">
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
                  <a href="https://github.com/Siam63/java-rpg" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 bg-blue-500">
                    View Project
                  </a>
                </div>
              </div>

          </div>
        </div>
    )
}

export default HonourableMentions
