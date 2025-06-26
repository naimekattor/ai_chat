import React from 'react';
import { Link } from 'react-router'
const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4 font-sans overflow-hidden">
      {/* Background circles  */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 opacity-10 rounded-full mix-blend-screen animate-blob filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 opacity-10 rounded-full mix-blend-screen animate-blob animation-delay-2000 filter blur-3xl"></div>
      <div className="absolute top-1/2 left-3/4 w-56 h-56 bg-green-500 opacity-10 rounded-full mix-blend-screen animate-blob animation-delay-4000 filter blur-3xl"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* Logo */}
        <div class="w-[120px] h-[120px] mx-auto mb-[15px] relative"><svg class="absolute top-0 left-0 w-full h-full animate-[pulse_5s_infinite] filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" viewBox="0 0 100 100"><path d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z" fill="none" stroke="#60a5fa" stroke-width="2"></path></svg><svg class="absolute top-0 left-0 w-full h-full animate-[glow_3s_infinite]" viewBox="0 0 100 100"><path d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75" stroke="#93c5fd" stroke-width="1.5" fill="none"></path><circle cx="35" cy="40" r="2" fill="#93c5fd"></circle><circle cx="65" cy="40" r="2" fill="#93c5fd"></circle><circle cx="50" cy="60" r="2" fill="#93c5fd"></circle><circle cx="35" cy="80" r="2" fill="#93c5fd"></circle><circle cx="65" cy="80" r="2" fill="#93c5fd"></circle></svg></div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Clin Technologies
        </h1>

        {/* First Descriptive Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
          Revolutionizing clinical documentation through{' '}
          <span className="font-bold text-blue-400">HIPAA COMPLIANT</span> advanced artificial
          intelligence, giving healthcare providers more time for what truly matters — patient care.{' '}
          <span className="font-bold text-blue-400">try it for FREE today</span>
        </p>

        {/* Second Descriptive Paragraph */}
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates
          with your existing EMR system.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to='/login'>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => alert('Login button clicked!')}
            >
              Login
            </button>
          </Link>
          <Link to={'/signup'}>
            <button
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => alert('Signup button clicked!')}
            >
              Signup
            </button>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Hero;
