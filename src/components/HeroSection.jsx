import React from "react";
import './HeroSection.css';

const HeroSection = ({ onSelectCategory }) => {
  return (
    <div className="hero-section relative text-center py-32">
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-7xl font-extrabold text-black mb-8 animate__animated animate__fadeInDown">
          🎵 Welcome to <span className="text-black">Music World 🎵</span>
        </h1>
        <p className="text-2xl text-blue-900 mb-12 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          Dive into an enchanting musical journey! Select a category and start exploring.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-8">
          <button
            onClick={() => onSelectCategory("hindi")}
            className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-2xl font-extrabold rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-125 hover:shadow-lg hover:rotate-3 animate__animated animate__zoomIn"
          >
            Hindi Songs
          </button>
          <button
            onClick={() => onSelectCategory("marathi")}
            className="px-12 py-6 bg-gradient-to-r from-green-500 to-teal-500 text-white text-2xl font-extrabold rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-125 hover:shadow-lg hover:-rotate-3 animate__animated animate__zoomIn animate__delay-1s"
          >
            Marathi Songs
          </button>
        </div>
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-note top-1/4 left-10 animate-float">
          🎶
        </div>
        <div className="floating-note bottom-1/3 right-20 animate-float-slow">
          🎶
        </div>
        <div className="floating-note top-1/2 right-1/4 animate-float-fast">
          🎵
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
