import React from "react";
import { HiArrowRight } from "react-icons/hi";

function NewLetterSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
        <div className="relative px-6 py-16 md:px-16 md:py-24">
          {/* Background Overlay */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left container */}
            <div className="text-white max-w-lg text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-blue-100 text-base md:text-lg">
                Get the best cooks and fastest delivery at your service. Hot, tasty food delivered to your door.
              </p>
            </div>

            {/* Right Container - Email Input */}
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white px-6 py-4 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              />
              <button className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 px-6 py-4 rounded-lg sm:rounded-l-none transition-all duration-300 font-medium">
                <span>Subscribe</span>
                <HiArrowRight className="ml-2 size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .clip-path-slant {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}

export default NewLetterSection;