import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // 1. Precise hiding: only hide if scrolling down significantly
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // 2. Materialize the "Glass" background after 50px
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -120, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 pointer-events-none"
    >
      <nav className={`
        relative mx-auto w-full max-w-[1500px] flex items-center justify-between px-10 py-5
        transition-all duration-700 ease-in-out pointer-events-auto
        ${isScrolled 
          ? "bg-[#050505]/60 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)]" 
          : "bg-transparent border-transparent"
        }
      `}>
        
        {/* --- LEFT: BRAND IDENTITY --- */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-[#FFCC00] rounded-full shadow-[0_0_10px_#FFCC00]" />
             <a href="#" className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-white uppercase italic">
               GTU-SET's
             </a>
             <a href="#" className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-[#FFCC00] uppercase italic">
               Fusion Fest <span className="text-white ">2.0</span>
             </a>
          </div>
         
        </div>

        {/* --- CENTER: STATUS METRICS (HIDDEN ON MOBILE) --- */}
        <div className="hidden lg:flex items-center gap-12 opacity-40">
           <div className="flex flex-col items-end">
              <span className="text-[8px] font-bold tracking-widest uppercase text-white/40 italic">Live Feed</span>
              <span className="text-[10px] font-black text-white tabular-nums tracking-widest uppercase">SYMPOSIUM_26</span>
           </div>
           <div className="h-6 w-px bg-white/10" />
           <div className="flex flex-col">
              <span className="text-[8px] font-bold tracking-widest uppercase text-white/40 italic">Location</span>
              <span className="text-[10px] font-black text-white tracking-widest uppercase italic">AHM // IND</span>
           </div>
        </div>

        {/* --- RIGHT: THE COMMAND ACTION --- */}
        <div className="flex items-center gap-4">
          <a
            href="#register"
            className="group relative overflow-hidden px-8 py-3 bg-white transition-all active:scale-95"
          >
            {/* Minimalist Hover: Just a subtle color shift */}
            <div className="absolute inset-0 bg-[#FFCC00] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            
            <div className="relative z-10 flex items-center gap-3">
               <span className="text-[10px] font-black tracking-[0.2em] text-black uppercase group-hover:text-black">
                 Register
               </span>
               <span className="text-black font-bold text-xs">→</span>
            </div>
          </a>
        </div>

        {/* TOP ACCENT LINE (Visible when scrolled) */}
        {isScrolled && (
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;