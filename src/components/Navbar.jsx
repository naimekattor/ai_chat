import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', current: true },
    { name: 'Our Solutions', current: false },
    { name: 'In Action', current: false },
    { name: 'Technology', current: false },
    { name: 'Benefits', current: false },
    { name: 'Case Use', current: false },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo*/}
          <div className="flex-shrink-0 flex items-center">
            <div class="nav-logo-symbol"><svg class="brain-container" viewBox="0 0 100 100"><path d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                   C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                   C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                   C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z" fill="none" stroke="#60a5fa" stroke-width="2"></path></svg><svg class="circuit-lines" viewBox="0 0 100 100"><path d="M35 40 H65 M50 40 V80
                   M35 60 H65 M25 50 H75" stroke="#93c5fd" stroke-width="1.5" fill="none"></path><circle cx="35" cy="80" r="2" fill="#93c5fd"></circle><circle cx="65" cy="80" r="2" fill="#93c5fd"></circle></svg></div>
            <span className="text-white text-2xl font-bold">Clin</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  href="#"
                  className={`
                    ${link.current
                      ? 'border-b-2 border-blue-500 text-blue-400 font-semibold'
                      : 'text-gray-300 hover:text-white'
                    }
                    px-3 py-2 text-base font-medium transition-colors duration-200
                  `}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button  */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className={`
                  ${link.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }
                  block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                `}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
