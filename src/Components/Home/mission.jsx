import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import targetImage from "../../assets/target.png"; // Import the image

export function MissionVision() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Wrapper for both cards */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div
            className="relative bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-center h-[340px] w-[340px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.img
              src={targetImage}
              alt="Target"
              className="absolute top-[-20px] right-[-20px] w-32 h-32 object-cover"
              variants={imgVariants}
            />
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg mt-4">
              The Indian Labour Cooperative Society Ltd. aims to provide a
              collective voice to workers, ensuring they receive fair treatment
              and opportunities for growth. We believe in the power of unity
              and cooperation to bring about positive change in the labor
              sector.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-center h-[340px] w-[340px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.img
              src={targetImage}
              alt="Target"
              className="absolute top-[-20px] right-[-20px] w-32 h-32 object-cover"
              variants={imgVariants}
            />
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg mt-4">
              The Indian Labour Cooperative Society Ltd. envisions a labor
              ecosystem that fosters equality, dignity, and economic security.
              Through collective efforts, we aim to create a brighter and more
              sustainable future for workers in India.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}