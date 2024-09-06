// src/Gallery.js
import React, { useState } from "react";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const herbs = ["Herb 1", "Herb 2", "Herb 3", "Herb 4", "Herb 5", "Herb 6"];

  const filteredHerbs = herbs.filter((herb) =>
    herb.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-green-50 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Herbal Gallery</h1>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search herbs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-green-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mb-8">
        Browse through our gallery of medicinal plants and herbs. Each plant
        comes with detailed information about its uses, cultivation methods, and
        more.
      </p>

      {/* Herb List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHerbs.map((herb, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              {herb}
            </h2>
            <p className="text-gray-600">
              Details about {herb} will be added here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
