import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import eaiImage from "../../assets/Eai.jpeg"; // Importing the image

export function BharatEntrepreneursSummit() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div className="bg-[#004040] py-16 w-full overflow-x-hidden"> {/* Added overflow-x-hidden here */}
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeInLeft}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeOut" },
            }} // Smooth hover effect for the image
          >
            <motion.img
              src={eaiImage}
              alt="EAI"
              className="w-full sm:w-80 h-auto object-contain shadow-lg" // Made responsive
              variants={fadeInLeft}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-white text-center md:text-left"
            variants={fadeInRight}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Bharat Entrepreneurs Summit</h2>
            <p className="mt-2 text-lg sm:text-xl">
              (6th September, 2024 | Venue: NDMC Convention Centre, New Delhi)
            </p>
            <p className="mt-4">
              For any queries - Contact:{" "}
              <a
                href="tel:+919821911055"
                className="text-yellow-300 hover:text-yellow-400 transition duration-300"
              >
                +91 98219 11055
              </a>
            </p>

            {/* Button */}
            <a
              href="#"
              className="mt-6 inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-500 ease-out"
            >
              Click Here For Booking
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
