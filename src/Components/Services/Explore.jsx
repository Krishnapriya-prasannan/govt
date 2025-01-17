import React from "react";

const ExploreWorld = () => {
  return (
    <div className="bg-[#fdeede] py-16 px-4 flex justify-center items-center">
      <div className="bg-[#d24236] text-white rounded-lg w-full max-w-6xl px-8 py-10 md:px-16 md:py-14 relative">
        {/* Content */}
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Let’s Ready to Explore The <br className="hidden md:block" />
              World With Us.
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue.
            </p>
          </div>

          {/* Button */}
          <button className="bg-white text-[#d24236] text-sm md:text-base font-semibold py-2 px-6 md:px-8 rounded-md hover:bg-gray-200 transition shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Background World Map (Optional: Add your own map background) */}
        <div className="absolute inset-0 opacity-10 md:opacity-20">
          <img
            src="/src/assets/map2.png" // Replace with your world map image
            alt="World Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreWorld;
