import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CompanyLogo from './component/CompanyLogo'
import PurposeSection from './component/PurposeSection'
import FeatureSection from './component/FeatureSection'
import ScheduleSection from './component/ScheduleSection'
import MonitorSection from './component/MonitorSection'
import PricingSection from './component/PricingSection'
import ServiceSection from './component/ServiceSection'
import TestimonialSection from './component/TestimonialSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden scroll-smooth">
      {/* Background Blur Effect */}
      <div className='absolute -top-28 -left-28 w-[800px] -z-50 h-[800px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]'></div>
      <div className='absolute -bottom-28 -right-28 w-[800px] -z-50 h-[800px] bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-full blur-[80px]'></div>
      
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <PurposeSection/>
        <FeatureSection/>
        <ScheduleSection/>
        <MonitorSection/>
        <PricingSection/>
        <ServiceSection/>
        <TestimonialSection/>
      </div>
    </main>
  )
}

export default App
