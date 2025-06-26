import React from 'react';

const Benefites = () => {
  return (
    <div className="min-h-screen bg-[#0A101C] text-white flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-3xl mx-auto py-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6">
          Benefits
        </h2>
        {/* Introductory Sentence */}
        <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
          Healthcare providers using Clin Technologies solutions report:
        </p>

        {/* Benefits List */}
        <ul className="list-none space-y-4 mb-12 text-left text-base sm:text-lg text-gray-300 px-4 sm:px-0">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2 text-xl">&bull;</span>
            <span>Reduction in documentation time by 40-60%</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2 text-xl">&bull;</span>
            <span>Improved work-life balance with less after-hours charting</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2 text-xl">&bull;</span>
            <span>Enhanced patient interaction due to less focus on note-taking</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2 text-xl">&bull;</span>
            <span>More comprehensive and consistent clinical documentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2 text-xl">&bull;</span>
            <span>Reduced risk of documentation errors and omissions</span>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <button
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => alert('Login button clicked!')}
          >
            Login
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => alert('Signup button clicked!')}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefites;
