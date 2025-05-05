import React from "react";
import scheduleImage from "../assets/stats.webp";
import { HiArrowNarrowRight } from "react-icons/hi";

function ScheduleSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-16 md:py-24 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left  */}
        <div className="md:w-1/2 w-full">
          <img
            src={scheduleImage}
            alt="schedule Image"
            className="w-full h-auto "
          />
        </div>

        {/* Right */}
        <div className="md:w-1/2 w-full ">
          <p className="text-orange-500 font-semibold">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xl  text-neutral-900 mt-4 mb-6 font-bold ">
            Streamline your Business <br /> with Smart Scheduling Solutions
          </h2>
          <p className="text-lg text-gray-500">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management
          </p>
          <a className="text-blue-500 font-semibold flex  items-center justify-start gap-2 hover:gap-4 transition-all " href="">
            Explore Scheduling features 
            <HiArrowNarrowRight  className="size-8 "/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
