import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import monitorImage from '../assets/monitor-card.webp';

function MonitorSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl text-neutral-900 mt-4 mb-6 font-bold">
            Introducing best mobile <br /> carousels
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round,
            all around the world.
          </p>
          <a
            className="text-blue-500 font-semibold flex items-center justify-start gap-2 hover:gap-4 hover:text-blue-600 transition-all"
            href="#"
          >
            Learn more about monitoring
            <HiArrowNarrowRight className="size-6" />
          </a>
        </div>

        {/* Right */}
        <div className="md:w-1/2 w-full">
          <img
            src={monitorImage}
            alt="Mobile carousels display"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default MonitorSection;