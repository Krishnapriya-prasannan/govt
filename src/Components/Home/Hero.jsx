import React, { useEffect, useState, useRef } from "react";
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

  // Reference for the slideshow container
  const slideshowRef = useRef(null);

  // Adjust animation speed based on screen size
  const getAnimationDuration = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 1.2;
    return 1.5;
  };

  const animationDuration = getAnimationDuration();

  // Change the current image every 3 seconds (automatic slideshow)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Handle manual scroll on click
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Scroll to the current image automatically
    if (slideshowRef.current) {
      slideshowRef.current.scrollTo({
        left: currentIndex * window.innerWidth, // Scroll to the specific image
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="bg-white mt-[85px] sm:mt-[90px] md:mt-[100px] overflow-hidden lg:mb-16 relative h-auto mb-0 sm:mb-0">
      {/* Slideshow */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationDuration }}
      >
        {/* Scrollable Container with Cute Custom Green Scrollbar */}
        <div
          ref={slideshowRef} // Reference to scroll container
          className="flex w-full h-full overflow-x-auto scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin", // Mozilla Firefox custom scrollbar
            scrollbarColor: "green transparent", // Custom scrollbar color for Firefox
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-none w-full h-auto max-h-[calc(100vh-100px)] sm:max-h-[calc(100vh-120px)] object-cover"
              style={{ scrollSnapAlign: "start" }}
              onClick={() => handleClick(index)}  // On click, manually change the image
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Logo Section */}
      <motion.div
        className="bg-white py-4 sm:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: animationDuration }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
                className="flex justify-center lg:mt-4"  // Added margin-top for desktop view
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-10 sm:h-16 md:h-20 lg:h-24 object-contain"
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
