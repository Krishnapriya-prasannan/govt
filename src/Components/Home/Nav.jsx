import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF9D23] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <img src={logo1} alt="Logo1" className="h-10 md:h-12 lg:h-14" />
          <div className="w-[2px] h-10 md:h-12 lg:h-14 bg-white"></div>
          <img src={logo2} alt="Logo2" className="h-10 md:h-12 lg:h-14" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none transition-transform transform hover:scale-110"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm md:text-base font-semibold">
          <li className="relative group">
            <a href="#" className="hover:text-gray-200 transition-colors duration-200">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-200 transition-colors duration-200">
              About
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-200 transition-colors duration-200">
              Our Projects
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-200 transition-colors duration-200">
              Gallery
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="/service" className="hover:text-gray-200 transition-colors duration-200">
              Service
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="/contact" className="hover:text-gray-200 transition-colors duration-200">
              Contact
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
<div
  className={`md:hidden bg-[#FF8C00] text-white px-6 py-4 shadow-lg transform transition-transform duration-300 ${
    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  <ul className="space-y-4 text-base font-semibold">
    <li className="relative group">
      <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
        Home
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group">
      <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
        About
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group">
      <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
        Our Projects
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group">
      <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
        Gallery
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group">
      <a href="/service" className="block hover:text-gray-200 transition-colors duration-200">
        Service
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group">
      <a href="/contact" className="block hover:text-gray-200 transition-colors duration-200">
        Contact
      </a>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
