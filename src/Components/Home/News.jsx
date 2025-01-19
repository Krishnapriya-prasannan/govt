import React from "react";
import { motion } from "framer-motion";
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
    title: "Empowering Indian MSMEs with Sustainability Goals",
    description:
      "The Indian Labour Cooperative Society (ILCS) is committed to raising awareness and implementing sustainability goals for MSMEs, empowering small businesses to thrive in a competitive market.",
    image: story2,
  },
];

const LatestNews = () => {
  // Smooth card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and faded out
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered entry for each card, longer delay for mobile
        duration: 0.6, // Smooth animation duration
        ease: "easeInOut", // Balanced easing for smoothness
      },
    }),
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Latest News
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card enters
      >
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            custom={index} // Staggered entry based on index
            variants={cardVariants}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                {news.description}
              </p>
              <a
                href="#"
                className="inline-block text-sm md:text-base font-medium text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestNews;
