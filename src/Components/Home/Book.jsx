import React from "react";
import eaiImage from "../../assets/Eai.jpg"; // Importing the image

export function BharatEntrepreneursSummit() {
  return (
    <div className="bg-[#004040] py-16 w-full"> {/* Darker green shade */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={eaiImage}
              alt="EAI"
              className="w-80 h-auto object-contain shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white text-center">
            <h2 className="text-3xl font-bold">Bharat Entrepreneurs Summit</h2>
            <p className="mt-2 text-lg">
              (6th September, 2024 | Venue: NDMC Convention Centre, New Delhi)
            </p>
            <p className="mt-4">
              For any queries - Contact: <a href="tel:+919821911055" className="text-yellow-300">+91 98219 11055</a>
            </p>

            {/* Button */}
            <a
              href="#"
              className="mt-6 inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            >
              Click Here For Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
