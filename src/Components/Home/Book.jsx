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

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div className="bg-[#004040] py-16 w-full">
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
            whileHover={{ scale: 1.03, transition: { duration: 0.5, ease: "easeOut" } }} // Subtle scaling effect on hover
          >
            <img
              src={eaiImage}
              alt="EAI"
              className="w-80 h-auto object-contain shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-white text-center"
            variants={fadeInRight}
          >
            <h2 className="text-3xl font-bold">Bharat Entrepreneurs Summit</h2>
            <motion.p
              className="mt-2 text-lg"
              variants={fadeInUp}
            >
              (6th September, 2024 | Venue: NDMC Convention Centre, New Delhi)
            </motion.p>
            <motion.p
              className="mt-4"
              variants={fadeInUp}
              style={{ transitionDelay: "0.4s" }}
            >
              For any queries - Contact:{" "}
              <a href="tel:+919821911055" className="text-yellow-300">
                +91 98219 11055
              </a>
            </motion.p>

            {/* Button */}
            <motion.a
              href="#"
              className="mt-6 inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              variants={fadeInUp}
              style={{ transitionDelay: "0.6s" }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 8px 20px rgba(255, 0, 0, 0.4)", // Smoother shadow on hover
                transition: { duration: 0.5, ease: "easeOut" },
              }}
            >
              Click Here For Booking
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
