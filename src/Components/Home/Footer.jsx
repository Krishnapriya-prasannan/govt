import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0715] text-white p-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section - Logo & Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Indian Labour Cooperative Society Ltd.
          </h3>
          <div className="flex space-x-5">
            <a href="#" className="text-blue-500 text-3xl hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500 text-3xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400 text-3xl hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Address</h3>
          <p className="text-gray-300 text-lg leading-7">
            14-D, Atma Ram House; <br />
            1-Tolstoy Road, New Delhi - 110001.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 text-lg text-gray-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Gallery</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Service</a>
            <a href="#" className="hover:text-white">Project</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">For Every Update</h3>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-gray-800 rounded-lg border-none outline-none text-lg"
            />
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold p-3 rounded-lg text-lg transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
