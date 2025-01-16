import React from "react";
import ppl1Image from "../../assets/ppl1.jpeg"; // Importing the image

export function EmpoweringLabourForm() {
  return (
    <div className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* Left Side Form Section */}
          <div className="bg-orange-500 text-white p-10 w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Empowering Labour<br />Through Cooperative Efforts
              </h2>

              {/* Skilled Manpower Details Input */}
              <div className="mt-6">
                <label className="block text-lg font-medium">
                  Skilled Manpower Services Provider
                </label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Skilled Manpower Details"
                  rows="2"
                ></textarea>
              </div>

              {/* Contact Information Input */}
              <div className="mt-6">
                <label className="block text-lg font-medium">
                  Contact Information*
                </label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Contact Information*"
                  rows="2"
                ></textarea>
              </div>

              {/* Phone Number Input */}
              <div className="mt-6">
                <label className="block text-lg font-medium">Phone Number*</label>
                <input
                  type="tel"
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Message Input */}
              <div className="mt-6">
                <label className="block text-lg font-medium">Message</label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Inquire Message..."
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="button"
                className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Submit Your Enquiry
              </button>
            </div>
          </div>

          {/* Right Side Image Section */}
          <div className="w-full md:w-1/2 hidden md:flex">
            <img
              src={ppl1Image}
              alt="Skilled Worker"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
