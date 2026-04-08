import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import EvilEye from './EvilEye'; 

const targetDate = new Date('2026-04-16T09:00:00')

function getCountdown() {
  const diff = Math.max(0, targetDate.getTime() - Date.now())
  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
    minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
    seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
  }
}

function HeroSection() {
  const [timer, setTimer] = useState(getCountdown())

  useEffect(() => {
    const interval = setInterval(() => setTimer(getCountdown()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-[#060010] flex flex-col items-center justify-center py-20 px-8 overflow-hidden font-sans">
      
      {/* --- THE CORE (STAYS VISIBLE) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
        <EvilEye
          eyeColor="#FF6F37"
          intensity={1.5}
          pupilSize={0.6}
          irisWidth={0.25}
          glowIntensity={0.35}
          scale={0.9} 
          noiseScale={1}
          pupilFollow={1}
          flameSpeed={1}
          backgroundColor="#060010"
        />
      </div>

     

      {/* --- CENTER: THE "GOOD" TYPOGRAPHY --- */}
      <div className="relative z-20 flex flex-col items-center select-none pointer-events-none">
        
       

        {/* MAIN TITEL: STAGGERED & BOLD */}
        <div className="flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(4.5rem,16vw,12rem)] font-black leading-[0.7] tracking-[-0.07em] text-white uppercase italic italic"
          >
            FUSION
          </motion.h1>
          
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[clamp(4.5rem,16vw,12rem)] font-black border-rounded bg-white border-white leading-[0.7] tracking-[-0.07em] text-[#FFCC00] uppercase italic mt-[-1vw]"
          >
            FEST 2.0
          </motion.h1>
        </div>

        {/* THE NERDY CHALLENGE (Modern Outline Style) */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-12 group flex items-center gap-6"
        >
          <div className="h-px w-8 bg-white/10" />
          <p className="text-[15px] font-black text-white tracking-[0.5em] uppercase italic group-hover:text-[#FFCC00] transition-colors">
            Are you nerdy enough to participate?
          </p>
          <div className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>

      {/* --- BOTTOM: THE DATA HUD --- */}
      <div className="absolute bottom-10 w-full px-10 z-30 flex flex-col md:flex-row justify-between items-end gap-10">
        
        {/* TIMER: MACHINED LOOK */}
        <div className="flex items-center gap-8 border-l border-white/10 pl-8">
          {[
            { v: timer.days, l: 'DAYS' },
            { v: timer.hours, l: 'HOURS' },
            { v: timer.minutes, l: 'MINS' },
            { v: timer.seconds, l: 'SECS' }
          ].map((u) => (
            <div key={u.l} className="flex flex-col items-start">
              <span className="text-3xl font-[1000] tabular-nums text-white tracking-tighter">{u.v}</span>
              <span className="text-[7px] font-black text-[#FFCC00] tracking-widest">{u.l}</span>
            </div>
          ))}
        </div>

       

      

      </div>

    </section>
  )
}

export default HeroSection;