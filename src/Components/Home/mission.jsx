import React from "react";
import targetImage from "../../assets/target.png"; // Import the image

export function MissionVision() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Wrapper for both cards, using flex to center the cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-20"> {/* Centered flex container */}
          {/* Mission Card */}
          <div className="relative bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-center h-[340px] w-[340px]"> {/* Balanced size */}
            <img
              src={targetImage}
              alt="Target"
              className="absolute top-[-20px] right-[-20px] w-32 h-32 object-cover" // Adjusted image size and position
            />
            <h3 className="text-3xl font-bold">Our Mission</h3> {/* Increased heading size */}
            <p className="text-lg mt-4"> {/* Increased paragraph size */}
            The Indian Labour Cooperative Society Ltd. aims to provide a collective voice to workers, ensuring they receive fair treatment and opportunities for growth. We believe in the power of unity and cooperation to bring about positive change in the labor sector
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-center h-[340px] w-[340px]"> {/* Balanced size */}
            <img
              src={targetImage}
              alt="Target"
              className="absolute top-[-20px] right-[-20px] w-32 h-32 object-cover" // Adjusted image size and position
            />
            <h3 className="text-3xl font-bold">Our Vision</h3> {/* Increased heading size */}
            <p className="text-lg mt-4"> {/* Increased paragraph size */}
            The Indian Labour Cooperative Society Ltd. aims to provide a collective voice to workers, ensuring they receive fair treatment and opportunities for growth. We believe in the power of unity and cooperation to bring about positive change in the labor sector
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
