import React from 'react'
import Image from 'next/image';

import python_pic from "../public/python_pic.png";
import swift_pic from "../public/swift_pic.png";
import xcode_pic from "../public/xcode_pic.png";
import react_pic from "../public/react_pic.png";
import sql_pic from "../public/sql_pic.png";
import node_pic from "../public/nodeJS_pic.png";
import java_pic from "../public/java_pic.jpeg";
import mongo_pic from "../public/mongoDB_pic.png";
import html_pic from "../public/html_css_js_pic.jpeg";
import tailwind_pic from "../public/tailwind_pic.jpeg";
import github_pic from "../public/github_img.png";
import nextjs_pic from "../public/nextjs_img.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html_pic,
            title: 'HTML, CSS and JS',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: python_pic,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: swift_pic,
            title: 'Swift',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: xcode_pic,
            title: 'XCode',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: react_pic,
            title: 'ReactJS',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: sql_pic,
            title: 'SQL',
            style: 'shadow-blue-700'
        },
        {
            id: 7,
            src: node_pic,
            title: 'NodeJS',
            style: 'shadow-green-700'
        },
        {
            id: 8,
            src: java_pic,
            title: 'Java',
            style: 'shadow-orange-600'
        },
        {
            id: 9,
            src: mongo_pic,
            title: 'MongoDB',
            style: 'shadow-green-700'
        },
        {
            id: 10,
            src: tailwind_pic,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 11,
            src: github_pic,
            title: 'GitHub',
            style: 'shadow-gray-700'
        },
        {
            id: 12,
            src: nextjs_pic,
            title: 'NextJS',
            style: 'shadow-gray-500'
        }
    ]

    return (
        <div name="experience" className="mt-[-100px] mb-[-20px] dark:bg-gradient-to-tr dark:from-gray-900 dark:to-teal-900 w-full h-full rounded-3xl shadow-md dark:shadow-sky-600 shadow-gray-700">        
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white text-black">
                <div>
                    <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6 text-xl font-semibold">Technologies I Have Worked With</p>
                </div>
                
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <Image className="w-24 mx-auto" src={src}></Image>
                            <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
