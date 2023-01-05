import React from 'react'

function Contact() {
    return (
        <div name="contact" className="w-full h-screen dark:bg-gradient-to-r dark:from-gray-900 dark:to-sky-900 p-4 dark:text-white text-black bg-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Enter your information and hit "Let's Talk" to get in touch with me!</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/e3d5a082-866d-4a14-81ed-be864447f25e" method="POST" className=" flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea rows="10" name="message" placeholder="Please enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
