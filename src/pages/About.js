// src/About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-8">
        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">
            About Our Herbal Garden
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to our Virtual Herbal Garden. This project is dedicated to
            providing an immersive experience for exploring the fascinating
            world of medicinal plants. Drawing from the rich traditions of
            Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy (AYUSH),
            we bring together modern technology and ancient wisdom to educate
            and inspire users.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our interactive platform allows you to explore the diverse range of
            medicinal plants, learn about their uses, cultivation methods, and
            much more. We also offer features such as virtual tours, e-commerce
            for herbal products, and resources on how to integrate these herbs
            into your everyday life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a focus on sustainability and transparency, we are committed to
            promoting the ancient knowledge of herbal medicine in a modern
            world. Join us in exploring the wonders of nature and the benefits
            of these powerful plants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
