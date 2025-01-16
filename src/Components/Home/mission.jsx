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
              Our mission is to empower the workforce, providing opportunities
              for sustainable growth and fostering economic development across
              India.
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
              Our vision is to create a future where every worker has access to
              opportunities for advancement, well-being, and a higher quality of
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
