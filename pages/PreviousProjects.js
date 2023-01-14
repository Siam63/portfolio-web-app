// Libraries
import React from 'react'
import Image from 'next/image';

// Assets
import techverse from "../public/techverse_img.png";
import movierecommender from "../public/movie_recommender.png";
import gpaCalc from "../public/gpa_calc.png";
import qixGame from "../public/qix_game.png";
import quote_pic from '../public/quote_pic.png';

import iosPic1 from "../public/ios_app_pic_1.png";
import iosPic2 from "../public/ios_app_pic_2.png";
import iosPic3 from "../public/ios_app_pic_3.png";

function PreviousProjects() {
    return (
        <div>
          <h1 className="text-center text-2xl mt-2 dark:text-gray-200">Portfolio - Previous Projects</h1>
          
          <div className="lg:flex gap-5 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="dark:text-gray-700 text-3xl font-medium pt-8 pb-2">Techverse - Online E-Commerce Website</h3>

              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300">
                <Image src={techverse} class="object-fit h-60 w-96 transform transition-all hover:scale-110 delay-100" width={800}></Image>
              </div>

              <h4 className="text-teal-600 font-medium py-5 text-xl">Tools Used</h4>
              <p>JavaScript</p>
              <p>HTML and CSS</p>
              <p>PHP</p>
              <p>Angular</p>
              <p>MySQL DataBase</p>

              <a href="https://github.com/Anthony-BouKhalil/SCSStoreWebApp" target="_blank" class="hover:scale-110 transition-all delay-75 relative items-center justify-center inline-block mt-5 px-5 p-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span href=""class="relative text-white">View Project</span>
              </a>
            </div>

            <div className="dark:text-gray-700 dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-3xl font-medium pt-16 pb-2">Movie Recommender</h3>
              
              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300">
                <Image src={movierecommender} class="object-fit h-60 w-96 transform transition-all hover:scale-110 delay-100" width={800}></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>ReactJS</p>
              <p>JavaScript</p>
              <p>HTML and CSS</p>
              <p>Hosted via Heroku</p>

              <a href="https://github.com/Siam63/movie_recommender" target="_blank" class="mt-12 hover:scale-110 transition-all delay-75 relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
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
                <Image className="object-fit h-60 w-96 transform transition-all hover:scale-125 delay-100" src={gpaCalc}></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>ReactJS</p>
              <p>HTML and CSS</p>
              <p>Hosted via Heroku</p>
              <a href="https://github.com/Siam63/gpa-calculator" target="_blank" class="hover:scale-110 transition-all delay-75 relative items-center justify-center inline-block mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
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
                <Image src={qixGame} class="object-fit h-60 w-96 transform transition-all hover:scale-110 delay-100"></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>PyGame</p>
              <p>Python</p>
              <a href="https://github.com/Siam63/qix_game" target="_blank" class="hover:scale-110 transition-all delay-75 relative items-center justify-center inline-block mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
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
              <h3 className="dark:text-gray-700 text-3xl font-medium pt-8 pb-2">iOS Financial Management App</h3>
              
              <div className="md:flex-row flex justify-center sm:p-10 flex-col border-solid border-b-2 border-gray-300 pl-[105px]">
                  <Image src={iosPic1} class="p-2 object-fit md:h-52 md:w-36 h-96 w-48 mr-10 transform transition-all hover:scale-125 delay-100"></Image>
                  <Image src={iosPic2} class="p-2 object-fit md:h-52 md:w-36 h-96 w-48 mr-10 transform transition-all hover:scale-125 delay-100"></Image>
                  <Image src={iosPic3} class="p-2 object-fit md:h-52 md:w-36 h-96 w-48 transform transition-all hover:scale-125 delay-100"></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>Swift</p>
              <p>XCode</p>
              <p>FireBase Auth</p>
              <p>FireBase DB</p>
              <a href="https://github.com/Siam63/FinancialTracker" target="_blank" class="hover:scale-110 transition-all delay-75 relative inline-flex items-center justify-center mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>

            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-3xl font-medium pt-8 pb-2 dark:text-gray-600">Quote Generator</h3>
              
              <div className="flex justify-center p-10 border-solid border-b-2 border-gray-300 pb-20">
                <Image src={quote_pic} class="oobject-fit h-60 w-96 transform transition-all hover:scale-110 delay-100"></Image>
              </div>

              <h4 className="py-4 text-teal-600 text-xl">Tools Used</h4>
              <p>ReactJS</p>
              <p>SCSS</p>
              <p>HTML</p>
              <p>JavaScript</p>
              <p>Quote Generator API</p>
              <a href="https://github.com/Siam63/react-quote-generator" target="_blank" class="hover:scale-110 transition-all delay-75 relative items-center justify-center inline-block mt-5 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">View Project</span>
              </a>
            </div>
          </div>
        </div>
    )
}

export default PreviousProjects
