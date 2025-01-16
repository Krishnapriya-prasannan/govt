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
              <h2 className="text-4xl font-bold mb-6">Empowering Labour through Cooperative Efforts</h2>

              {/* Skilled Manpower Details Input */}
              <div className="mt-6">
                <label className="block text-lg">Skilled Manpower Details</label>
                <textarea
                  className="w-full p-4 mt-2 text-lg rounded-md border border-gray-300"
                  placeholder="Enter your skilled manpower details"
                  rows="4"
                ></textarea>
              </div>

              {/* Contact Information Input */}
              <div className="mt-6">
                <label className="block text-lg">Contact Information</label>
                <textarea
                  className="w-full p-4 mt-2 text-lg rounded-md border border-gray-300"
                  placeholder="Enter your contact information"
                  rows="4"
                ></textarea>
              </div>

              {/* Phone Number Input */}
              <div className="mt-6">
                <label className="block text-lg">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-4 mt-2 text-lg rounded-md border border-gray-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Input */}
              <div className="mt-6">
                <label className="block text-lg">Message</label>
                <textarea
                  className="w-full p-4 mt-2 text-lg rounded-md border border-gray-300"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block px-12 py-4 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              >
                Submit Your Enquiry
              </a>
            </div>
          </div>

          {/* Right Side Image Section (Hidden on Mobile) */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={ppl1Image}
              alt="People"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
