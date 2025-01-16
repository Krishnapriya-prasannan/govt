import React from "react";
import ppl1Image from "../../assets/ppl1.jpeg"; // Importing the image

export function EmpoweringLabourForm() {
  return (
    <div className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* Left Side Form Section */}
          <div className="bg-orange-500 text-white p-8 w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">Empowering Labour through Cooperative Efforts</h2>

              {/* Skilled Manpower Details Input */}
              <div className="mt-4">
                <label className="block text-m">Skilled Manpower Details</label>
                <textarea
                  className="w-full p-2 mt-2 rounded-md border border-gray-300"
                  placeholder="Enter your skilled manpower details"
                ></textarea>
              </div>

              {/* Contact Information Input */}
              <div className="mt-4">
                <label className="block text-m">Contact Information</label>
                <textarea
                  className="w-full p-2 mt-2 rounded-md border border-gray-300"
                  placeholder="Enter your contact information"
                ></textarea>
              </div>

              {/* Phone Number Input */}
              <div className="mt-4">
                <label className="block text-m">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 mt-2 rounded-md border border-gray-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Input */}
              <div className="mt-4">
                <label className="block text-m">Message</label>
                <textarea
                  className="w-full p-2 mt-2 rounded-md border border-gray-300"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
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
