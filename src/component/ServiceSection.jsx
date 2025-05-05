import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];
function ServiceSection() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24  ">
        {/* Service Header  */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5 ">
            Future of the Support with new Shape
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5 ">
            Discuss Your goals,determine success metrics,identify problems{" "}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 ">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">UX design Content strategy </span>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Development Bring </span>
            </div>
          </div>
          <button className="bg-indigo-600 mt-8 text-white px-8 py-3 rounded-lg cursor-pointer  hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-400 transition-colors ">
            Get Started
          </button>
        </div>

        {/* Service Card */}
        <div className="grid grid-cols-1 md:grid-col-2 gap-8 lg:grid-cols-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-8 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
                <div className="mb-4 ">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
                <p className="text-gray-600 mb-4 ">{service.description}</p>
                <a href={service.link} className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">LEARN MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
