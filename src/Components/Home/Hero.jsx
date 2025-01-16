import React from "react";
import modijiImage from "../../assets/modiji.jpg";
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import bharat from "../../assets/bharat.jpeg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <img
          src={modijiImage}
          alt="Modiji"
          className="w-full h-auto max-h-[calc(100vh-20px)] sm:max-h-[calc(100vh-60px)] object-cover"
        />
      </div>

      {/* Logo Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          {/* Grid Layout for Logos with responsive design */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
            {/* Logos with adjusted size for better mobile view */}
            <img
              src={bharat}
              alt="Bharat"
              className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain w-full max-w-[100%]"
            />
            <img
              src={g20}
              alt="G20"
              className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain w-full max-w-[100%]"
            />
            <img
              src={msme}
              alt="MSME"
              className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain w-full max-w-[100%]"
            />
            <img
              src={zed}
              alt="ZED"
              className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain w-full max-w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
