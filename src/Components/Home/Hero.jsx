import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import modijiImage from "../../assets/modiji.jpg";
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import bharat from "../../assets/bharat.jpeg";
import  mca from "../../assets/mca.svg";
import qci from "../../assets/Qci.png";
import exp from "../../assets/30.png";
import sr from "../../assets/m.webp"
const Hero = () => {
  // Helper function to determine animation duration based on screen size
  const getAnimationDuration = () => {
    if (window.innerWidth <= 640) {
      return 1; // Faster animation for mobile devices
    } else if (window.innerWidth <= 1024) {
      return 1.2; // Medium animation speed for tablets
    } else {
      return 1.5; // Slower animation for larger screens (desktops)
    }
  };

  const animationDuration = getAnimationDuration(); // Set animation duration dynamically

  return (
    <section className="bg-white overflow-x-hidden"> {/* Prevent horizontal scroll */}
      {/* Hero Image Section */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }} // Fade-in animation
        animate={{ opacity: 1 }} // Fully visible after animation
        transition={{ duration: animationDuration }} // Use dynamic animation duration
      >
        <img
          src={modijiImage}
          alt="Modiji"
          className="w-full h-auto max-h-[calc(100vh-20px)] sm:max-h-[calc(100vh-60px)] object-cover"
        />
      </motion.div>

      {/* Logo Section */}
      <motion.div
        className="bg-white py-6"
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // End at full opacity and position
        transition={{ delay: 0.5, duration: animationDuration }} // Delay and use dynamic animation duration
      >
        <div className="container mx-auto px-4">
          {/* Grid Layout for Logos */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4"
            initial="hidden" // Initial state for the grid
            animate="visible" // Final state for the grid
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 }, // Sequential appearance of logos
              },
            }}
          >
            {/* Logos */}
            {[bharat,exp, msme, zed, mca, sr, g20, qci].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="h-10 sm:h-20 md:h-24 lg:h-28 object-contain w-full max-w-[100%]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
