import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-[50vh] bg-[#0A101C] text-white flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-4xl mx-auto py-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6">
          Get Started
        </h2>
        {/* Introductory Sentence */}
        <p className="text-base sm:text-lg text-gray-300 mb-12 leading-relaxed">
          Ready to transform your clinical documentation process? Contact our team to learn how Clin Technologies can be tailored to your
          specific healthcare setting.
        </p>

        {/* Contact Information Box */}
        <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-gray-700 max-w-lg mx-auto mb-12">
          <p className="text-gray-300 text-base sm:text-lg">
            Or reach us directly via email at <a href="mailto:support@clintechso.com" className="text-blue-400 hover:underline">support@clintechso.com</a>
          </p>
        </div>

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

export default GetStarted;
