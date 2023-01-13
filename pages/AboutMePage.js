import React from 'react'
import selfie from '../public/cartoon-img.jpeg';
import Image from 'next/image';

function AboutMePage() {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-gray-900 to-sky-900 p-4 text-white bg-white">
            <div className="md:flex-row md:text-left text-center flex flex-col md:justify-evenly justify-center">
                <div className="px-5 lg:max-w-3xl md:max-w-xl md:mt-28 flex flex-col">
                    <h1 className="text-4xl bg-gradient-to-r from-slate-700 to-gray-200 bg-clip-text text-transparent">More About Me</h1>
                    <p className="mt-2 text-2xl text-gray-300">Software Engineer</p>

                    <p className="mt-5 text-lg text-gray-300"> 
                        Hey, my name is Faiazur! I am a driven and skilled Software Engineer with 1 year of professional 
                        experience in full-stack development. I specialize in creating scalable, responsive applications and have a proven track record of delivering 
                        high-quality software on time and within budget. My expertise in multiple programming languages and development frameworks make me a valuable 
                        asset to any team. With a passion for technology and a desire to continuously learn and improve, I am dedicated to building innovative and 
                        user-friendly software that exceeds expectations.
                    </p>

                    <p className="mt-5 text-lg text-gray-300"> 
                        I am a recent university graduate with a major in Applied Mathematics and Computer Science. I have a strong foundation in mathematical concepts and algorithms, 
                        as well as experience in programming languages such as Python, C++ and Java. Throughout my studies, I have developed 
                        problem-solving and analytical skills that I believe will make me a valuable addition to any team. 
                        I am excited to apply the knowledge and skills I have acquired in university to real-world projects and to continue learning and growing as a 
                        professional in the field of computer science.
                    </p>

                    <div className="md:justify-start flex justify-center">
                        <div className="flex max-w-[80px]">
                            <a href="/" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Back</a>
                        </div>
                    </div>
                    
                </div>
                
                <div className="md:mt-28 lg:mt-[210px] flex justify-center mt-5">
                    <Image className="object-fill w-96 h-80 rounded-3xl" src={selfie}/>
                </div>
                
            </div>

            
        </div>
    )
}

export default AboutMePage
