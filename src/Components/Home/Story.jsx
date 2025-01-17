import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing Framer Motion
import story1 from "../../assets/story1.webp";
import story2 from "../../assets/story2.webp";
import arrow from "../../assets/arrow.png"; // Importing the arrow image

export function Story() {
  const stats = [
    { value: 30, label: "Experience", suffix: "K+" },
    { value: 50, label: "Projects", suffix: "K+" },
    { value: 45, label: "WorldWide", suffix: "+" },
    { value: 30, label: "Ongoing", suffix: "+" },
  ];

  // Animation variants for staggering
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Apply a delay between children
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Counter = ({ start, end, duration, suffix }) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [start, end, duration]);

    return (
      <span>
        {value.toLocaleString()} {suffix}
      </span>
    );
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is in view
          variants={staggerContainer}
        >
          {/* Text Section */}
          <motion.div className="relative space-y-8" variants={fadeIn}>
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 w-20 h-full border-l-8 border-orange-500"></div>

            {/* Our Story Heading */}
            <div className="pl-6">
              <h4 className="text-base font-bold text-black tracking-widest flex items-center">
                <span>Our Story</span>
                {/* Using the arrow image */}
                <motion.img
                  src={arrow}
                  alt="Arrow"
                  className="mt-8 text-orange-600 w-10 h-10 ml-2 transform"
                  initial={{ rotate: -90, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Indian Labour Cooperative Society Ltd
              </h2>
            </div>

            <motion.p
              className="pl-6 text-lg text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              Indian Labour Cooperative Society Ltd. is an organization dedicated to the empowerment and welfare
              of workforce across India. Established in 1994 with the vision of fostering economic and social
              growth for the labor community, our cooperative society operates on the principles of mutual aid,
              self-help, and collective responsibility.
            </motion.p>

            {/* Stats Section with Counter */}
            <motion.div
              className="pl-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                >
                  <div className="text-3xl font-bold text-black">
                    <Counter start={0} end={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            className="flex flex-col justify-end items-end gap-6 sm:flex-col sm:items-end sm:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.img
              src={story1}
              alt="Workers in factory"
              className="w-full sm:w-[80%] h-56 sm:h-64 object-cover"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={story2}
              alt="Workers in field"
              className="w-full sm:w-[90%] h-64 sm:h-72 object-cover"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
