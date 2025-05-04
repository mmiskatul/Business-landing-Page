import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
export default function CompanyLogo() {
    const logo=[slack,amazon,woocommerce,meundies,sitepoint]
  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start pt-10 pb-6  mt-10  border-2 border-gray-300 rounded-2xl items-center '>
        <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-l-blue-500 bg-white py-2 z-10 sm:text-basee
        text-xl font-semibold text-left '>Proud partner at <br /> Hubspot & Segment </div>
        <div className='flex animate-marquee whitespace-nowrap '>
            {logo.map((logo,index)=>(
                <img key={index} src={logo} alt="Company Logo"  className='mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}

            {/* Duplicate the logo  */}
            {logo.map((logo,index)=>(
                <img key={`duplicate-${index}`} src={logo} alt="Company Logo"  className='mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all'/>
            ))}
        </div>
    </div>
  )
}
