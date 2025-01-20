import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import modijiImage from "../../assets/modiji.jpg";
import pic2 from "../../assets/pic2.jpg"; // New image for the slideshow
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import bharat from "../../assets/bharat.jpeg";
import mca from "../../assets/mca.svg";
import qci from "../../assets/Qci.png";
import exp from "../../assets/30.png";
import sr from "../../assets/m.webp";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of images for the slideshow
  const images = [modijiImage, pic2];
  const logos = [bharat, exp, msme, zed, mca, sr, g20, qci];

  // Adjust animation speed based on screen size
  const getAnimationDuration = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 1.2;
    return 1.5;
  };

  const animationDuration = getAnimationDuration();

  // Change the current image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section className="bg-white mt-[85px] sm:mt-[90px] md:mt-[100px] overflow-x-hidden lg:mb-16"> 
      {/* Slideshow */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationDuration }}
      >
        <motion.div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform ${animationDuration}s ease`,
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-[calc(100vh-100px)] sm:max-h-[calc(100vh-120px)] object-cover"
              style={{ flexShrink: 0 }} // Prevents images from shrinking and leaving space
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Logo Section */}
      <motion.div
        className="bg-white py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: animationDuration }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
