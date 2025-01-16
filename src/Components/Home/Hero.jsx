import React from "react";
import modijiImage from "../../assets/modiji.jpg";
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import bharat from "../../assets/bharat.jpeg";

const Hero = () => {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src={modijiImage}
          alt="Modiji"
          className="w-full h-auto max-h-[calc(100vh-60px)] object-cover"
        />
      </div>

      {/* Logo Section */}
      <div className="bg-white py-1">
        <div className="container mx-auto px-4">
          {/* Flex Container for Logos - Use Grid for Mobile */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {/* Larger EPR Image */}
            <img
              src={bharat}
              alt="Bharat"
              className="h-24 object-contain sm:h-32 md:h-40 lg:h-48 w-full max-w-[100%]"
            />
            <img
              src={g20}
              alt="G20"
              className="h-24 object-contain sm:h-32 md:h-40 lg:h-48 w-full max-w-[100%]"
            />
            <img
              src={msme}
              alt="MSME"
              className="h-24 object-contain sm:h-32 md:h-40 lg:h-48 w-full max-w-[100%]"
            />
            <img
              src={zed}
              alt="ZED"
              className="h-24 object-contain sm:h-32 md:h-40 lg:h-48 w-full max-w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
