// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-green-800 py-4 shadow-md">
      <ul className="flex justify-center space-x-8 text-green-100 font-medium">
        <li className="hover:text-green-300 cursor-pointer transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer transition duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer transition duration-300">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer transition duration-300">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
