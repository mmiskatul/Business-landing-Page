import React from "react";
import heroImage from '../assets/hero-image.png'

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8  ">
      {/* left part */}
      <div className="w-full md:w-1/2 space-y-8 ">
        {/* star Badge  */}
        <div className="flex px-4 py-2 gap-2 bg-gray-50 rounded-full w-fit items-center hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className=" text-blue-600 hover:text-amber-400 group-hover:scale-110 transition-transform">
            ⭐
          </span>
          <span className="text-sm font-medium text-gray-400 group-hover:text-gray-950 group-hover:shadow-blue-950 transition-transform">
            Jump start your growth
          </span>
        </div>
        {/* HERO HEADING */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We boost the Growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className=" absolute  bottom-0 left-0 w-full h-0.5 bg-blue-200 opacity-50 "></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse ">⏰</span>
        </h1>
        {/* description Heading */}
        <p className="text-lg text-gray-600 font-normal md:text-xl max-w-xl ">
          Get the most accurate leads, sales people training and conversions
          ,tools and more -- all with the same one billing.
        </p>

        {/* INPUT & SEARCH OPTION */}

        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="text-white bg-blue-600 px-8 py-4  rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300 ">→</button>
        </div>
      </div>
      {/* Right part */}
      <div className="w-full mt-16 md:w-1/2 space-y-8 md:mt-0 pl-0 md:pl-12">
        <div className="relative ">
            <img src={heroImage} alt="Hero Image" className="rounded-lg relative z-10  hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
}
