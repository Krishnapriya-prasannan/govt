import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FF9D23] text-white py-6 shadow-md"> {/* Darker orange */}
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img src={logo1} alt="Logo1" className="h-16" />
          <div className="w-[2px] h-16 bg-white"></div>
          <img src={logo2} alt="Logo2" className="h-16" />
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
            ☰
          </button>
        </div>
        
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
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
        <div className="md:hidden bg-[#FF9A00] text-white py-4 px-6"> {/* Slightly darker shade */}
          <ul className="space-y-4 text-lg font-semibold">
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
