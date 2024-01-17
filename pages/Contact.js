import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.message){
            alert('Please fill out all the fileds.');
            return;
        }

        document.getElementById('contact-form').submit();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-r from-gray-900 to-blue-900 p-4 text-white bg-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Enter your information and hit "Let's Talk" to get in touch with me!</p>
          </div>
  
          <div className="flex justify-center items-center">
            <form
              id="contact-form"
              action="https://getform.io/f/e3d5a082-866d-4a14-81ed-be864447f25e"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.email}
              />
              <textarea
                rows="10"
                name="message"
                placeholder="Please enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                onChange={handleChange}
                value={formData.message}
              />
              <div className="flex flex-row">
                <a href="/" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Back</a>
                <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Contact
