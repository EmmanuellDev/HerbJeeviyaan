import React from 'react';

const HerbalGarden = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">My Virtual Herbal Garden</h1>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:text-green-200">Home</a>
          <a href="#my-garden" className="hover:text-green-200">My Garden</a>
          <a href="#herb-library" className="hover:text-green-200">Herb Library</a>
          <a href="#settings" className="hover:text-green-200">Settings</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 bg-green-100">
        <img src="your-hero-image.jpg" alt="Herbal Garden" className="max-w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
        <h2 className="text-3xl font-semibold mb-4">Welcome to Your Herbal Paradise</h2>
        <button className="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700">Start Growing</button>
      </section>

      {/* Search Bar */}
      <section className="flex justify-center py-8">
        <input
          type="text"
          placeholder="Search for herbs, plants, or gardening tips..."
          className="w-3/4 md:w-1/2 px-4 py-2 border border-green-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </section>

      {/* Featured Herbs */}
      <section className="px-8 py-4">
        <h3 className="text-2xl font-semibold mb-4">Featured Herbs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Sample Herb Card */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src="herb-image-1.jpg" alt="Herb Name" className="h-32 w-full object-cover rounded-lg mb-4" />
            <h4 className="font-bold text-lg">Basil</h4>
            <p className="text-sm text-gray-600">Great for cooking and medicinal uses.</p>
          </div>
          {/* Add more herb cards as needed */}
        </div>
      </section>

      {/* Garden Overview Section */}
      <section className="px-8 py-4 bg-green-50">
        <h3 className="text-2xl font-semibold mb-4">My Garden</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Sample Garden Card */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src="garden-herb-1.jpg" alt="Herb Name" className="h-32 w-full object-cover rounded-lg mb-4" />
            <h4 className="font-bold text-lg">Rosemary</h4>
            <p className="text-sm text-gray-600">Growth Stage: Sprouting</p>
          </div>
          {/* Add more garden cards as needed */}
        </div>
      </section>

      {/* Tips & Articles */}
      <section className="px-8 py-4">
        <h3 className="text-2xl font-semibold mb-4">Tips & Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Sample Article Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="article-thumbnail-1.jpg" alt="Article Title" className="h-32 w-full object-cover rounded-lg mb-4" />
            <h4 className="font-bold text-lg">How to Grow Mint in Your Garden</h4>
            <p className="text-sm text-gray-600">Learn the best tips for growing mint...</p>
          </div>
          {/* Add more article cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 mt-auto">
        <div className="flex justify-between items-center px-8">
          <p>&copy; 2024 My Virtual Herbal Garden</p>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-green-200">About Us</a>
            <a href="#contact" className="hover:text-green-200">Contact</a>
            <a href="#privacy" className="hover:text-green-200">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HerbalGarden;
