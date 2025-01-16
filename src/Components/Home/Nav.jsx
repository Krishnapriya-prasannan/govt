import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF9D23] text-white py-3 md:py-4 lg:py-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logos */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <img src={logo1} alt="Logo1" className="h-10 md:h-12 lg:h-14" />
          <div className="w-[2px] h-10 md:h-12 lg:h-14 bg-white"></div>
          <img src={logo2} alt="Logo2" className="h-10 md:h-12 lg:h-14" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-5 text-sm md:text-base font-semibold">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Our Projects</a></li>
          <li><a href="#" className="hover:underline">Gallery</a></li>
          <li><a href="#" className="hover:underline">Service</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FF9A00] text-white py-3 px-5">
          <ul className="space-y-3 text-base font-semibold">
            <li><a href="#" className="block hover:underline">Home</a></li>
            <li><a href="#" className="block hover:underline">About</a></li>
            <li><a href="#" className="block hover:underline">Our Projects</a></li>
            <li><a href="#" className="block hover:underline">Gallery</a></li>
            <li><a href="#" className="block hover:underline">Service</a></li>
            <li><a href="#" className="block hover:underline">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
