// src/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-green-900">
        <h1 className="text-6xl font-extrabold text-center my-8">
          Welcome to Our Herbal Garden
        </h1>
        <p className="text-center text-xl max-w-2xl mb-10 leading-relaxed bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
          Discover the rich diversity of medicinal plants. Learn how these herbs
          have been used for centuries in various traditions to promote wellness
          and healing.
        </p>
        <button className="bg-yellow-400 text-gray-800 text-lg px-10 py-4 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-200">
          Explore Our Herbal Gallery
        </button>
      </div>
    </div>
  );
};

export default Home;
