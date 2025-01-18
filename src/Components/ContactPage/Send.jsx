import React from "react";
import map from "../../assets/map2.jpeg";

const SendSection = () => {
  return (
    <section className="relative bg-white py-12 lg:py-24 flex justify-center items-center top-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16">
        
        {/* Map & Background Container */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Background Shape - Extended Top & Bottom */}
          <div className="absolute -left-6 -top-10 w-11/12 h-[110%] bg-[#1A3D5D] rounded-bl-[50px] rounded-tl-[50px] hidden lg:block"></div>

          {/* Map Image - Same Height as Form */}
          <div className="relative w-full lg:w-[90%] h-auto lg:h-full rounded-2xl overflow-hidden shadow-lg z-10">
            <img src={map} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-8 lg:p-12 mt-8 lg:mt-0 relative z-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form>
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* How Did You Find Us */}
            <div className="mb-6">
              <label
                htmlFor="find-us"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                How did you find us?
              </label>
              <select
                id="find-us"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>Google</option>
                <option>Friends/Family</option>
                <option>Social Media</option>
                <option>Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendSection;
