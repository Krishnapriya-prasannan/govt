import React from "react";
import banner from "../../assets/drone.png";

const SahkarBanner = () => {
  return (
    <div className="w-full bg-white">
      {/* Animated Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-600 text-center opacity-0 animate-fade-in-slide p-4">
        सहकार से समृद्धि योजना
      </h1>

      {/* Full-Width Animated Image */}
      <img
        src={banner}
        alt="Drone"
        className="w-full h-auto opacity-0 animate-fade-in-zoom"
      />

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInZoom {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in-slide {
            animation: fadeInSlide 1s ease-out forwards;
          }

          .animate-fade-in-zoom {
            animation: fadeInZoom 1s ease-out 0.3s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default SahkarBanner;
