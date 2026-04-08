import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EventsSection from './components/EventsSection'
import Poeple from './components/Poeple'
import FAQSection from './components/FAQSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="bg-[#050505] text-[#F5F5F7] font-sans selection:bg-[#FFCC00] selection:text-black">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <Poeple />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

export default App