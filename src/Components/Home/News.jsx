import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import nm1 from "../../assets/nm1.jpeg"; // Import first image
import story2 from "../../assets/story2.webp"; // Import second image

const newsData = [
  {
    id: 1,
    title: "Embracing Excellence through ZED - A New Chapter for ILCS",
    description:
      "The Indian Labour Cooperative Society (ILCS) is spearheading the ZED (Zero Defect, Zero Effect) Certification project, aiming to elevate the quality and sustainability standards of Indian MSMEs. Through this initiative...",
    image: nm1,
  },
  {
    id: 2,
    title: "Embracing Excellence through ZED - A New Chapter for ILCS",
    description:
      "The Indian Labour Cooperative Society (ILCS) is spearheading the ZED (Zero Defect, Zero Effect) Certification project, aiming to elevate the quality and sustainability standards of Indian MSMEs. Through this initiative...",
    image: story2,
  },
];

const LatestNews = () => {
  // Card fade-in and slide-up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animation for each card
        duration: 0.6,
        ease: "easeOut", // Smooth easing
      },
    }),
  };

  // Title fade-in with slight upward motion
  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Description fade-in
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2, // Slight delay for sequential appearance
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 px-4 md:px-10 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Latest News
      </h2>
      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animations when 20% of the card is visible
      >
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-transform duration-200"
            custom={index}
            variants={cardVariants}
          >
            {/* Image Section */}
            <img
              src={news.image}
              alt="News"
              className="w-full h-48 md:h-56 object-cover"
            />

            {/* Text Section */}
            <div className="p-6">
              <motion.h3
                className="font-semibold text-lg md:text-xl text-gray-800 mb-3"
                variants={titleVariants}
              >
                {news.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm md:text-base leading-relaxed"
                variants={descriptionVariants}
              >
                {news.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestNews;
