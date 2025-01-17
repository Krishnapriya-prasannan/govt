import React from "react";
import birdImage from "../../assets/e.png"; // Crow image
import cityLineImage from "../../assets/d2.png"; // Cityline image
import workersImage from "../../assets/w2.png"; // Workers image
import badgeQuality from "../../assets/qb.png"; // Badge 1
import badgeAward from "../../assets/award.png"; // Badge 2
import badgeTrust from "../../assets/t1.png"; // Badge 3
import badgeExperience from "../../assets/30.png"; // Badge 4

const ServiceBanner = () => {
  return (
    <div className="bg-[#f9eede]">
      <div className="max-w-7xl mx-auto py-10 px-6 relative">
        {/* Main Content */}
        <div className="py-8 px-6 bg-[#003333] rounded-lg relative overflow-visible">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 text-left text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Explore Our <span className="capitalize">Top-Notch</span> Services
              </h1>
              <p className="text-base lg:text-lg text-white mb-6">
                From consulting and strategy development to implementation and
                support, our comprehensive services can help your business thrive.
              </p>
              <button className="bg-[#d0261a] hover:bg-[#c0201a] text-white font-bold py-3 px-8 rounded-md text-lg mb-6 lg:mb-0">
                Call Now
              </button>

              {/* Crow Images for Mobile */}
              <div className="flex lg:hidden justify-center items-center space-x-4">
                <img
                  src={birdImage}
                  alt="Crow 1"
                  className="w-16 h-16 max-w-full h-auto"
                />
                <img
                  src={birdImage}
                  alt="Crow 2"
                  className="w-12 h-12 max-w-full h-auto"
                />
              </div>
            </div>

            {/* Right Section - Worker Image */}
            <div className="lg:w-1/2 relative h-full flex justify-center items-end -bottom-[20px] overflow-hidden">
              <div
                className="relative h-full"
                style={{ height: "100%" }}
              >
                <img
                  src={workersImage}
                  alt="Workers"
                  className="rounded-lg h-full object-cover lg:ml-10 max-w-full"
                  style={{
                    transform: "translateY(3%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Crow Images for Larger Screens */}
          <div className="hidden lg:flex absolute top-4 left-80 space-x-16">
            <img
              src={birdImage}
              alt="Crow 1"
              className="w-24 h-24 max-w-full h-auto"
            />
            <img
              src={birdImage}
              alt="Crow 2"
              className="w-16 h-16 max-w-full h-auto"
            />
          </div>

          {/* Cityline Images */}
          <div className="absolute bottom-[0px] left-0 w-full z-10 flex">
            {/* First City Line Image */}
            <img
              src={cityLineImage}
              alt="Cityline 1"
              className="w-1/2"
              style={{
                transform: "scaleY(1.5)", // Reduces the height by 50%
                transformOrigin: "bottom", // Ensures scaling starts from the bottom
              }}
            />

            {/* Second City Line Image */}
            <img
              src={cityLineImage}
              alt="Cityline 2"
              className="w-1/2"
              style={{
                transform: "scaleY(1.5)", // Matches the first image height
                transformOrigin: "bottom", // Consistent alignment
              }}
            />
          </div>
        </div>

        {/* Bottom Section - Badges */}
        <div className="flex justify-around items-center mt-16 flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full flex items-center justify-center">
              <img src={badgeQuality} alt="Best Quality" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full flex items-center justify-center">
              <img src={badgeAward} alt="Best Award" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full flex items-center justify-center">
              <img src={badgeTrust} alt="Trust" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 rounded-full flex items-center justify-center">
              <img
                src={badgeExperience}
                alt="30 Years Experience"
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
