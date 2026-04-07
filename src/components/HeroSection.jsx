import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const targetDate = new Date('2026-11-14T09:00:00')

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
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-between overflow-hidden py-28 px-6 md:px-12">
      
      {/* --- THE BLUEPRINT GRID --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 -translate-x-1/2" />
        <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/5 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_80%)]" />
      </div>

      {/* --- TOP: THE SPECIFICATION --- */}
      <div className="relative z-10 w-full flex justify-between items-start max-w-[1800px]">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-black tracking-[0.8em] text-[#FFCC00] uppercase">
            GTU // GRADUATE SCHOOL OF ENGINEERING & TECHNOLOGY
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">VER: 2.0.0</span>
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">LOC: AHM_IN</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-end gap-1">
          <div className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse shadow-[0_0_10px_#FFCC00]" />
          <p className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">SIGNAL_STABLE</p>
        </div>
      </div>

      {/* --- CENTER: THE MONOLITH --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Ghost Title Background */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic select-none pointer-events-none tracking-tighter">
            FUSION
          </h2>
          
          <h1 className="text-[clamp(4rem,18vw,14rem)] font-[1000] leading-[0.75] tracking-[-0.08em] text-white uppercase italic z-20 relative">
            FUSION<br />
            <span className="text-[#FFCC00]">FEST 2.0</span>
          </h1>
        </motion.div>

        {/* THE CHALLENGE HUD */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-[10px] font-black text-white/40 tracking-[0.6em] uppercase italic">
              Are you nerdy enough to participate?
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          
          <div className="flex gap-16">
             <div className="flex flex-col items-center">
                <span className="text-[8px] text-white/20 uppercase tracking-widest mb-2 font-mono">Current_Phase</span>
                <span className="text-xs font-black text-white tracking-[0.3em]">01 // ALPHA</span>
             </div>
             <div className="flex flex-col items-center text-[#FFCC00]">
                <span className="text-[8px] opacity-40 uppercase tracking-widest mb-2 font-mono italic">Access_Protocol</span>
                <span className="text-xs font-black tracking-[0.3em]">OPEN_ENROLLMENT</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM: THE FLOATING HUD --- */}
      <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 items-end gap-12">
        
        {/* TIMER LEFT */}
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <p className="text-[8px] font-black text-white/20 tracking-[0.5em] uppercase italic">T-Minus Execution</p>
          <div className="flex gap-6">
            {[{v: timer.days, l:'D'}, {v: timer.hours, l:'H'}, {v: timer.minutes, l:'M'}, {v: timer.seconds, l:'S'}].map(i => (
              <div key={i.l} className="flex flex-col">
                <span className="text-3xl font-black tabular-nums text-white tracking-tighter">{i.v}</span>
                <span className="text-[8px] font-mono text-[#FFCC00] uppercase opacity-50">{i.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REGISTER CENTER */}
        <div className="flex justify-center order-1 md:order-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#register"
            className="group relative px-16 py-6 border border-white/10 hover:border-[#FFCC00] transition-colors"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FFCC00]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FFCC00]" />
            <span className="text-xs font-black tracking-[0.8em] text-white uppercase group-hover:text-[#FFCC00] transition-colors">
              INITIALIZE
            </span>
          </motion.a>
        </div>

        {/* STATS RIGHT */}
        <div className="flex flex-col items-end gap-2 order-3">
           <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Lat: 23.0225</p>
           <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Lon: 72.5714</p>
           <p className="text-[8px] font-black text-[#FFCC00] uppercase tracking-[0.4em] italic">AHMEDABAD, IN</p>
        </div>

      </div>

    </section>
  )
}

export default HeroSection