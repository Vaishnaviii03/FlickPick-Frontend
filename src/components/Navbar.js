// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-70 shadow-md">
      <nav className="flex items-center justify-between px-8 py-4 text-white">
        <div className="text-2xl font-bold">🎬 FlickPick</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-red-500 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-500 transition duration-300">
            <a href="#browse">Browse</a>
          </li>
          <li className="hover:text-red-500 transition duration-300">
            <a href="#trending">Trending</a>
          </li>
          <li className="hover:text-red-500 transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-500 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
