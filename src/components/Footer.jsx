import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A101C] text-gray-400 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base">
        {/* Left Section: Terms and Privacy Links */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Use</a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
        </div>

        {/* Right Section: Copyright Notice */}
        <div className="text-center sm:text-right">
          © 2023 Clin Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
