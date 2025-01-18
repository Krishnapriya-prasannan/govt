import React from "react";

const SendSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center  bg-white p-6 lg:p-16">
      {/* Map Section */}
      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.799858410943!2d77.21768255!3d28.630008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4099ad1a7f%3A0x2ad8e7547ff9259a!2sAtma%20Ram%20House!5e0!3m2!1sen!2sin!4v1673976614976!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-teal-900 -left-4 -top-4 rounded-lg"></div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white lg:ml-8 mt-8 lg:mt-0 rounded-lg shadow-lg p-6 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-600 mb-8">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
    </section>
  );
};

export default SendSection;
