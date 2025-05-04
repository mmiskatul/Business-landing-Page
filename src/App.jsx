import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CompanyLogo from './component/CompanyLogo'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden scroll-smooth">
      {/* Background Blur Effect */}
      <div className='absolute -top-28 -left-28 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]'></div>
      <div className='absolute -bottom-28 -right-28 w-[800px] h-[800px] bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-full blur-[80px]'></div>
      
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo/>
      </div>
    </main>
  )
}

export default App
