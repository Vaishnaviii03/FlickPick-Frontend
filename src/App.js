// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Recommendation from "./components/Recommendation";
import Background from "./components/Background"; // starry or gradient background
import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col text-white overflow-x-hidden">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            FlickPick
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          Your personalized movie recommendation platform
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 pb-8">
        <Recommendation />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 p-4 text-center text-gray-400 text-sm">
        © 2025 FlickPick by Vaishnavi Pandey. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
