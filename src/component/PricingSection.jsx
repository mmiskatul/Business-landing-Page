import React, { useState } from "react";

function PricingSection() {
  const [productCount, setProductCount] = useState(1);

  // Calculate Product price Base on product Count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto ">
        {/* HEADING  */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 ">
          Pricing
        </h1>
        {/* PRICING ACCORDING TO CLIENT  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
          {/* Starter plan  */}
          <div className="bg-white p-8 rounded-lg shadow-lg  w-full">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6 "> ${starterPrice} /month </p>
          </div>
          {/* Business plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg  rounded-3xl w-full">
            <h3 className="text-xl text-gray-600 mb-4">Business </h3>
            <p className="text-3xl font-bold mb-6 ">
              {" "}
              ${businessPrice} /month{" "}
            </p>
          </div>
        </div>

        {/* Slider  */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-700 text-xl font-semibold mb-4  ">
            {productCount} product
          </p>

          <div className="relative px-4 ">
            <div className=" flex items-center justify-center gap-6">
              <span className="text-sm md:text-xl font-bold">1 </span>
              <input
                className="w-2/3 flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className=" text-sm md:text-xl font-bold">50</span>
            </div>
          </div>

        </div>
        
        {/* TExt and footer */}

            <div className="text-center mt-12">
                <p className="text-xl text-gray-600 mb-4 ">Ready to get Started? </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer">Get Started</button>
            </div>
        
      </div>
    </section>
  );
}

export default PricingSection;
