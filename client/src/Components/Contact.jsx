import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-40">
        {/* Contact Form */}
        <div className="bg-[#2D0F40] text-white rounded-lg p-8 w-4/5 md:w-[600px] lg:w-4/5 shadow-lg">
          
          
          <h2 className="textlinearGradient text-4xl font-bold text-center mb-4">
            Contact Me !
            {/* <span className="text-purple-300">Me</span> */}
          </h2>



          <p className="text-center mb-8">
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full bg-black text-white placeholder-gray-500 p-2 rounded-md h-32 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 md:w-2/5 bglinearGradient text-white font-bold py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-xl md:text-4xl">
          <a href="https://github.com" className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300">
            <FaGithub className="text-white" />
          </a>
          <a href="https://twitter.com" className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://linkedin.com" className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300">
            <FaLinkedin className="text-white" />
          </a>
          <a href="https://facebook.com" className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300">
            <FaFacebook className="text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
