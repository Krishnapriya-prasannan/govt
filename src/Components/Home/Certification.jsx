import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import zed from "../../assets/zed-logo.png"; // Importing the image

export function Certification() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white py-16 w-full overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      <div className="w-full px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full"
            variants={fadeInLeft}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Subtle hover effect for scaling
          >
            <img
              src={zed}
              alt="ZED MSME Certification"
              className="w-full h-auto max-h-[25em] object-contain"  // Ensuring responsive height
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="space-y-6 w-full" variants={fadeInRight}>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Empowering MSMEs with ZED Certification – A Key Initiative by ILCS
            </h2>
            <p className="text-base sm:text-lg text-black">
              In today's competitive business landscape, Micro, Small, and
              Medium Enterprises (MSMEs) play a pivotal role in driving economic
              growth and job creation. However, to thrive in this environment,
              MSMEs need to adopt world-class practices in quality and
              sustainability. Recognizing this, the Indian Labour Cooperative
              Society (ILCS) has taken an important step by partnering with the
              Ministry of Micro, Small, and Medium Enterprises (MSME) and the
              Quality Council of India (QCI) to promote the ZED (Zero Defect,
              Zero Effect) Certification Scheme.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
