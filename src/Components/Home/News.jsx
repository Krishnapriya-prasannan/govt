import React from "react";
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
  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Latest News
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={news.image}
              alt="News"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg md:text-xl mb-2">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
