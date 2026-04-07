import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { name: 'CODESTORM', start: '09:00', end: '13:30', tag: 'HACKATHON', day: 1, img: 'https://images.pexels.com/photos/34804017/pexels-photo-34804017.jpeg' },
  { name: 'VOLTAGE VOYAGE', start: '09:00', end: '13:30', tag: 'ENGINEERING', day: 1, img: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg' },
  { name: 'ROBO RUMBLE', start: '14:00', end: '16:00', tag: 'ROBOTICS', day: 1, img: 'https://images.pexels.com/photos/30530412/pexels-photo-30530412.jpeg' },
  { name: 'DEBATE DUEL', start: '14:00', end: '16:00', tag: 'SPEECH', day: 1, img: 'https://images.pexels.com/photos/8199159/pexels-photo-8199159.jpeg' },
  { name: 'SPOTLIGHT STAGE', start: '17:00', end: 'LATE', tag: 'CULTURAL', day: 1, img: 'https://images.pexels.com/photos/5389619/pexels-photo-5389619.jpeg' },
  { name: 'AI NEXUS', start: '09:00', end: '13:00', tag: 'AI-ML', day: 2, img: 'https://images.pexels.com/photos/30530412/pexels-photo-30530412.jpeg' },
  { name: 'PIXEL PERFECT', start: '10:00', end: '12:00', tag: 'UI/UX', day: 2, img: 'https://images.pexels.com/photos/70911/pexels-photo-70911.jpeg' },
  { name: 'IDEA FORGE', start: '14:00', end: '16:00', tag: 'IDEATHON', day: 2, img: 'https://images.pexels.com/photos/11605252/pexels-photo-11605252.jpeg' },
];

export default function EventsSection() {
  return (
    <section className="bg-[#050505] text-white py-40 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. ARCHITECTURAL HEADER --- */}
        <div className="mb-40 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-16">
          <div className="max-w-2xl">
           
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase">
              Event<br /><span className="text-white/20 italic">Timeline.</span>
            </h2>
          </div>
         
        </div>

        {/* --- 2. THE CONNECTED ENGINE --- */}
        <div className="relative">
          
          {/* THE MASTER VERTICAL SPINE */}
          <div className="absolute left-6 md:left-[25%] top-0 w-px h-full bg-linear-to-b from-[#FFCC00] via-white/10 to-transparent" />

          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="relative flex flex-col md:flex-row gap-12 mb-40 md:mb-56"
            >
              
              {/* LEFT: THE TIME BLOCK */}
              <div className="w-full md:w-[20%] pt-2 text-left md:text-right">
                <div className="sticky top-40">
                  <span className="text-5xl font-black  text-white/60 absolute -top-12 right-0 pointer-events-none">
                    0{idx + 1}
                  </span>
                  <p className="text-[#FF4500] text-[11px] font-black tracking-[0.4em] uppercase mb-1">DAY 0{event.day}</p>
                  <div className="flex flex-col md:items-end">
                    <span className="text-3xl font-black tracking-tighter tabular-nums text-white uppercase">{event.start}</span>
                    <span className="text-xs font-bold text-gray-500 tracking-widest -mt-1 uppercase">to {event.end}</span>
                  </div>
                  <div className="h-0.5 w-12 bg-[#FFCC00] ml-auto mt-6 hidden md:block" />
                </div>
              </div>

              {/* CENTER: THE CONNECTION NODE */}
              <div className="absolute left-6 md:left-[25%] -translate-x-1/2 mt-6 z-20">
                <div className="w-4 h-4 rounded-full bg-black border-2 border-[#FFCC00] flex items-center justify-center">
                   <div className="w-1 h-1 rounded-full bg-[#FFCC00]" />
                </div>
                {/* Connecting Horizontal Circuit Line */}
                <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-[#FFCC00] to-transparent absolute top-[7.5px] left-full" />
              </div>

              {/* RIGHT: THE 9:16 VISUAL & INFO */}
              <div className="w-full md:w-[70%] pl-16 md:pl-32">
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                  
                  {/* Image Card (Strictly Professional 9:16) */}
                  <div className="relative w-[280px] md:w-[340px] shrink-0 group">
                    <div className="relative aspect-[9/16] rounded-[20px] overflow-hidden">
                      <img 
                        src={event.img} 
                        className="w-full h-full object-cover  opacity-40  " 
                        alt={event.name} 
                      />
                      <div className="absolute inset-0 " />
                      
                      {/* Technical Meta-Data Overlay */}
                      <div className="absolute top-6 left-6 flex flex-col gap-1">
                        <span className="bg-[#FFCC00] text-black text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter">
                          Verified Arena
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Information Content */}
                  <div className="flex-1 pt-6 text-center lg:text-left">
                    <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-8">
                      // {event.tag}
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10 hover:text-[#FFCC00] transition-colors uppercase">
                      {event.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                       <div>
                         <p className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase mb-2">Duration</p>
                         <p className="text-sm font-bold tracking-widest">{event.end === 'LATE' ? 'Open Session' : '4.5 Hours'}</p>
                       </div>
                       <div>
                         <p className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase mb-2">Access</p>
                         <p className="text-sm font-bold tracking-widest underline decoration-[#FFCC00]">Tier 01 // All</p>
                       </div>
                    </div>

                    <button className="mt-12 flex items-center gap-6 group">
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FFCC00] group-hover:border-[#FFCC00] transition-all">
                          <span className="text-xl text-white group-hover:text-black">→</span>
                       </div>
                       <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-8">Read Protocol</span>
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- 3. ARCHITECTURAL FOOTER --- */}
        <div className="mt-40 pt-40 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-left">
             <p className="text-[clamp(1rem,4vw,2rem)] font-black tracking-tighter opacity-10 uppercase">Global Sync // Symposium 2026</p>
           </div>
           <div className="flex gap-10">
              <div className="text-right">
                <p className="text-[9px] font-black text-gray-700 tracking-[0.5em] uppercase">Sequence End</p>
                <p className="text-xs font-bold text-gray-500">End of Day 02</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}