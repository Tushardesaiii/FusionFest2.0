import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EventsSection from './components/EventsSection'
import Poeple from './components/Poeple'
import SponsorsSection from './components/SponsorsSection'
import FAQSection from './components/FAQSection'
import FooterSection from './components/FooterSection'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.state?.restoreTimelineScroll) {
      return
    }

    const savedScrollY = Number(sessionStorage.getItem('timelineScrollY') || 0)
    window.scrollTo({ top: savedScrollY, behavior: 'auto' })
  }, [location.state])

  return (
    <div className="bg-[#050505] text-[#F5F5F7] font-sans selection:bg-[#FFCC00] selection:text-black">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <Poeple />
      <SponsorsSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

export default App