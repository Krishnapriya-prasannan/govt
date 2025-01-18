import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import ppl1Image from "../../assets/ppl1.jpeg"; // Importing the image

export function EmpoweringLabourForm() {
  // Animation variants for form fields (accordion effect)
  const formItem = {
    hidden: { opacity: 0, y: -30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  // Animation for the image (fade-in only)
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* Left Side Form Section */}
          <div className="bg-orange-500 text-white p-10 w-full md:w-1/2 flex flex-col justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
              className="space-y-6"
            >
              {/* Heading */}
              <motion.h2
                className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                variants={formItem}
                custom={0} // Custom delay for each field
              >
                Empowering Labour<br />Through Cooperative Efforts
              </motion.h2>

              {/* Skilled Manpower Details Input */}
              <motion.div variants={formItem} custom={1}>
                <label className="block text-lg font-medium">
                  Skilled Manpower Services Provider
                </label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Skilled Manpower Details"
                  rows="2"
                  aria-label="Skilled Manpower Details"
                ></textarea>
              </motion.div>

              {/* Contact Information Input */}
              <motion.div variants={formItem} custom={2}>
                <label className="block text-lg font-medium">
                  Contact Information*
                </label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Contact Information*"
                  rows="2"
                  aria-label="Contact Information"
                ></textarea>
              </motion.div>

              {/* Phone Number Input */}
              <motion.div variants={formItem} custom={3}>
                <label className="block text-lg font-medium">Phone Number*</label>
                <input
                  type="tel"
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Your Phone Number"
                  aria-label="Phone Number"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={formItem} custom={4}>
                <label className="block text-lg font-medium">Message</label>
                <textarea
                  className="w-full p-3 mt-2 text-lg rounded-md border border-gray-300 text-gray-900"
                  placeholder="Enter Your Inquire Message..."
                  rows="3"
                  aria-label="Message"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="mt-8 text-center"
                variants={formItem}
                custom={5}
              >
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
                >
                  Submit Your Enquiry
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side Image Section */}
          <motion.div
            className="w-full md:w-1/2 hidden md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the image is in view
            variants={imageAnimation}
          >
            <img
              src={ppl1Image}
              alt="Skilled Worker"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
