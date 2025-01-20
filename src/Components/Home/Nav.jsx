import React, { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <nav className="bg-[#FF9D23] text-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between px-4 py-4 md:py-5 w-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <img src={logo1} alt="Logo1" className="h-12 sm:h-14 md:h-16 lg:h-18" />
            <div className="w-[2px] h-12 sm:h-14 md:h-16 lg:h-18 bg-white"></div>
            <img src={logo2} alt="Logo2" className="h-14 sm:h-16 md:h-18 lg:h-20" />
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
          <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-base font-semibold">
            {["Home", "About", "Our Projects", "Gallery", "Service", "Contact"].map(
              (item, index) => (
                <li key={index} className="relative group">
                  <a href="#" className="hover:text-gray-200 transition-colors duration-200">
                    {item}
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="h-1 absolute -bottom-1 left-0 transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(to right, #FFD580, #FFA500, #FF6A00)",
          }}
        ></div>
      </nav>

      {/* Mobile Menu (Final Fix) */}
      <div
        className={`fixed top-20 left-0 right-0 w-full bg-[#FF8C00] text-white px-6 py-4 shadow-lg transform transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{ zIndex: 100 }}
      >
        <ul className="space-y-4 text-base font-semibold">
          {["Home", "About", "Our Projects", "Gallery", "Service", "Contact"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                  {item}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
