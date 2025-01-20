import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; 
import modijiImage from "../../assets/modiji.jpg";
import pic2 from "../../assets/pic3.webp";
import msme from "../../assets/msme-logo.png";
import g20 from "../../assets/G20.png";
import zed from "../../assets/zed-logo.png";
import bharat from "../../assets/bharat.jpeg";
import mca from "../../assets/mca.svg";
import qci from "../../assets/Qci.png";
import exp from "../../assets/30.png";
import sr from "../../assets/m.webp";
import pic5 from "../../assets/drone.webp";
import pic3 from "../../assets/pic3.avif";
import pic7 from "../../assets/fd.jpg";
import plane from "../../assets/plane.jpg";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);

  const images = [modijiImage, pic2, pic3, pic5, pic7, plane];
  const logos = [bharat, exp, msme, zed, mca, sr, g20, qci];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="bg-white mt-[64px] sm:mt-[90px] md:mt-[88px] overflow-hidden lg:mb-16 relative">
      {/* Slideshow */}
      <motion.div
        className="w-full h-[30vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          ref={slideshowRef}
          className="flex w-screen h-full overflow-x-auto scroll-smooth custom-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin",
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-none w-screen h-full"
              style={{ scrollSnapAlign: "start" }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-fill"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Logo Section */}
      <motion.div
        className="bg-white py-6 sm:py-8 mt-[15px] mb-12" // Reduced mt-[30px] to mt-[15px] for less space
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
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
            {logos.slice(0, 4).map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center lg:mt-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Bottom Row of Logos */}
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16" // Added mt-8 for space between rows
          >
            {logos.slice(4).map((logo, index) => (
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
                  alt={`Logo ${index + 4}`}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Custom Green Scrollbar CSS */}
      <style>
        {`
          /* Custom Green Scrollbar */
          .custom-scrollbar::-webkit-scrollbar {
            height: 12px; /* Increase the height of the scrollbar for visibility */
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: green;
            border-radius: 5px;
          }
          .custom-scrollbar {
            scrollbar-color: green transparent;
          }

          /* Ensuring scrollbars appear on all devices */
          .custom-scrollbar {
            -webkit-overflow-scrolling: touch;
            overflow-x: auto;
          }

          /* For mobile and small screens */
          @media (max-width: 640px) {
            .custom-scrollbar::-webkit-scrollbar {
              height: 12px; /* Ensure the height is larger on mobile */
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
