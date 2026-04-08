import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;

    // 🔹 Ignore tiny scrolls (prevents flicker)
    if (Math.abs(diff) < 5) return;

    // 🔹 Hide only if scrolling down fast enough
    if (diff > 0 && latest > 120) {
      setHidden((prev) => (prev ? prev : true));
    } else {
      setHidden((prev) => (prev ? false : prev));
    }

    // 🔹 Glass effect trigger (no spam updates)
    if (latest > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    lastY.current = latest;
  });

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.35, // 🔥 faster = smoother feel
        ease: [0.4, 0, 0.2, 1], // material easing
      }}
      className="fixed top-0 left-0 right-0 z-100 px-3 sm:px-4 md:px-12 py-3 md:py-4 pointer-events-none"
    >
      <nav
        className={`
          relative mx-auto w-full max-w-350
          flex items-center justify-between px-4 md:px-8 py-3 md:py-4
          transition-all duration-500 ease-out
          pointer-events-auto
          ${isScrolled
            ? "bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg"
            : "bg-transparent border-transparent"
          }
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 md:gap-3 group min-w-0">
          <img
            src="/gtu_logo.png"
            alt="GTU Logo"
            className="h-7 md:h-10 w-auto object-contain"
          />

          <a
            href="#"
            className="flex flex-col md:flex-row md:items-center md:gap-2 leading-none min-w-0"
          >
            <span className="text-[9px] sm:text-lg md:text-xl font-black tracking-tight text-white uppercase italic opacity-90 whitespace-nowrap">
              GTU-SET's
            </span>

            <span className="text-[11px] sm:text-xl md:text-2xl font-black tracking-tight text-[#FFCC00] uppercase italic whitespace-nowrap">
              Fusion Fest <span className="text-white">2.0</span>
            </span>
          </a>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex items-center gap-10 opacity-40">
          <div className="flex flex-col items-end">
            <span className="text-[8px] tracking-widest text-white/40 italic">
              Live Feed
            </span>
          </div>

          <div className="h-5 w-px bg-white/10" />

          <div className="flex flex-col">
            <span className="text-[8px] tracking-widest text-white/40 italic">
              Location
            </span>
            <span className="text-[10px] text-white tracking-widest italic">
              AHM // IND
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#events-section"
            className="group relative overflow-hidden px-4 md:px-6 py-2 bg-white rounded-md active:scale-95 transition"
          >
            <div className="absolute inset-0 bg-[#FFCC00] -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <div className="relative z-10 flex items-center gap-2">
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-black uppercase">
                Register
              </span>
              <span className="text-black text-xs">→</span>
            </div>
          </a>
        </div>

        {/* TOP LINE */}
        {isScrolled && (
          <div className="absolute top-0 left-8 right-8 h-px bg-white/10" />
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;