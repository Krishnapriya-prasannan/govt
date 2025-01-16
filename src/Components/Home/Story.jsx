import React from "react";
import story1 from "../../assets/story1.webp";
import story2 from "../../assets/story2.webp";
import arrow from "../../assets/arrow.png"; // Importing the arrow image

export function Story() {
  const stats = [
    { value: "30k+", label: "Experience" },
    { value: "50k+", label: "Projects" },
    { value: "45+", label: "WorldWide" },
    { value: "30+", label: "Ongoing" },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 w-20 h-full border-l-8 border-orange-500"></div>

            {/* Our Story Heading */}
            <div className="pl-6">
              <h4 className="text-base font-bold text-black tracking-widest flex items-center">
                <span>Our Story</span>
                {/* Using the arrow image */}
                <img
                  src={arrow}
                  alt="Arrow"
                  className=" mt-8 text-orange-600 w-10 h-10 ml-2 transform " // Adjust width and height
                />
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Indian Labour Cooperative Society Ltd
              </h2>
            </div>

            <p className="pl-6 text-lg text-gray-700 leading-relaxed">
              Indian Labour Cooperative Society Ltd. is an organization dedicated to the empowerment and welfare
              of workforce across India. Established in 1994 with the vision of fostering economic and social
              growth for the labor community, our cooperative society operates on the principles of mutual aid,
              self-help, and collective responsibility.
            </p>

            {/* Stats */}
            <div className="pl-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-black">{stat.value}</div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="flex flex-col justify-end items-end gap-6 sm:flex-col sm:items-end sm:justify-end">
            {/* Images will take full width and be of equal size on mobile */}
            <img
              src={story1}
              alt="Workers in factory"
              className="w-full sm:w-[80%] h-56 sm:h-64 object-cover"
            />
            <img
              src={story2}
              alt="Workers in field"
              className="w-full sm:w-[90%] h-64 sm:h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
