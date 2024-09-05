// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-green-600 py-4 shadow-md">
        <ul className="flex justify-center space-x-8 text-white font-medium">
          <li className="hover:text-green-300 cursor-pointer transition duration-200">Home</li>
          <li className="hover:text-green-300 cursor-pointer transition duration-200">About</li>
          <li className="hover:text-green-300 cursor-pointer transition duration-200">Gallery</li>
          <li className="hover:text-green-300 cursor-pointer transition duration-200">Contact Us</li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-extrabold text-green-700 text-center my-8">Welcome to Our Herbal Garden</h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae est at arcu imperdiet gravida at nec purus. Donec ac malesuada justo. Vivamus tincidunt purus et lorem tincidunt, eget ultrices urna aliquam.
        </p>
        <button className="bg-green-500 text-white text-lg px-8 py-3 rounded-full hover:bg-green-600 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          View Our Herbs Gallery
        </button>
      </div>
    </div>
  );
};

export default Home;
