import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PrizesRewardsSection from './PrizesRewardsSection';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

export default function EventsSection() {
  const [showAllMobileBenefits, setShowAllMobileBenefits] = useState(false);

  return (
    <section id="events-section" className="bg-[#050505] text-white py-24 md:py-40 px-4 sm:px-6 font-sans scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. ARCHITECTURAL HEADER --- */}
        <div className="mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10 md:pb-16">
          <div className="max-w-2xl">
           
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-black tracking-tighter leading-[0.85] md:leading-[0.8] uppercase">
              Event<br /><span className="text-white/20 italic">Timeline.</span>
            </h2>
          </div>
         
        </div>

        {/* --- 2. THE CONNECTED ENGINE --- */}
        <div className="relative">
          
          {/* THE MASTER VERTICAL SPINE */}
          <div className="hidden md:block absolute left-6 md:left-[25%] top-0 w-px h-full bg-linear-to-b from-[#FFCC00] via-white/10 to-transparent" />

          {eventsData.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-12 mb-20 md:mb-56"
            >
              
              {/* LEFT: THE TIME BLOCK */}
              <div className="w-full md:w-[20%] pt-0 md:pt-2 text-center md:text-right">
                <div className="md:sticky md:top-40 relative">
                  <span className="hidden md:block text-5xl font-black  text-white/60 absolute -top-12 right-0 pointer-events-none">
                    0{idx + 1}
                  </span>
                  <p className="text-[#FF4500] text-[11px] font-black tracking-[0.4em] uppercase mb-1">DAY 0{event.day}</p>
                  <div className="flex flex-col md:items-end items-center">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter tabular-nums text-white uppercase">{event.start}</span>
                    <span className="text-xs font-bold text-gray-500 tracking-widest -mt-1 uppercase">to {event.end}</span>
                  </div>
                  <div className="h-0.5 w-12 bg-[#FFCC00] ml-auto mt-6 hidden md:block" />
                </div>
              </div>

              {/* CENTER: THE CONNECTION NODE */}
              <div className="hidden md:block absolute left-6 md:left-[25%] -translate-x-1/2 mt-6 z-20">
                <div className="w-4 h-4 rounded-full bg-black border-2 border-[#FFCC00] flex items-center justify-center">
                   <div className="w-1 h-1 rounded-full bg-[#FFCC00]" />
                </div>
                {/* Connecting Horizontal Circuit Line */}
                <div className="h-px w-8 md:w-24 bg-linear-to-r from-[#FFCC00] to-transparent absolute top-[7.5px] left-full" />
              </div>

              {/* RIGHT: THE 9:16 VISUAL & INFO */}
              <div className="w-full md:w-[70%] pl-0 md:pl-32">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-start">
                  
                  {/* Image Card (Strictly Professional 9:16) */}
                  <div className="relative w-full max-w-full md:w-85 shrink-0 group">
                    <div className="relative aspect-[4/3] md:aspect-9/16 rounded-[20px] overflow-hidden">
                      <img 
                        src={event.img} 
                        className="w-full h-full object-cover  " 
                        alt={event.name} 
                      />
                      <div className="absolute inset-0 " />
                      
                     
                    </div>
                  </div>

                  {/* Information Content */}
                  <div className="flex-1 pt-0 md:pt-6 text-left">
                    <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-5 md:mb-8">
                      // {event.tag}
                    </div>
                    
                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 md:mb-10 hover:text-[#FFCC00] transition-colors uppercase">
                      {event.name}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 border-t border-white/5 pt-6 md:pt-10">
                       <div>
                         <p className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase mb-2">Duration</p>
                         <p className="text-sm font-bold tracking-widest">{event.end === 'LATE' ? 'Open Session' : '4.5 Hours'}</p>
                       </div>
                       <div>
                         <p className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase mb-2">Access</p>
                         <p className="text-sm font-bold tracking-widest underline decoration-[#FFCC00]">Tier 01 // All</p>
                       </div>
                    </div>

                      <Link to={`/events/${event.slug}`} className="mt-8 md:mt-12 inline-flex w-full sm:w-auto items-center gap-6 group">
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FFCC00] group-hover:border-[#FFCC00] transition-all">
                          <span className="text-xl text-white group-hover:text-black">→</span>
                       </div>
                       <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-8">Read Protocol</span>
                      </Link>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 border-t border-white/5 pt-14 md:pt-20">
      <div className="grid gap-10 md:gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
    
    {/* --- LEFT: THE MISSION --- */}
    <div>
      <p className="text-[11px] font-[1000] tracking-[0.4em] text-[#FFCC00] uppercase mb-6 italic">
        Symposium Intelligence
      </p>
      <h3 className="text-3xl sm:text-5xl md:text-7xl font-[1000] tracking-tighter leading-[0.9] md:leading-[0.85] uppercase mb-6 md:mb-8">
        Why Join<br />
        <span className="text-white/20 italic">Fusion Fest 2.0?</span>
      </h3>
      <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl font-medium">
        Fusion Fest 2.0 at GTU-SET is more than just a series of events; it's a high-voltage environment designed to test your technical limits. 
        From intensive coding sprints to autonomous robotics and structural design challenges, we provide the platform where theoretical engineering meets industrial-grade execution.
      </p>
      
      {/* ADDED SUB-BENEFIT FOR GTU STUDENTS */}
      <div className="mt-10 flex items-center gap-4">
        <div className="h-px w-12 bg-[#FFCC00]" />
        <p className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase italic">
          Powered by Graduate School of Engineering & Technology
        </p>
      </div>
    </div>

    {/* --- RIGHT: THE STUDENT ROI (Return on Investment) --- */}
    <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
      
      {/* SKILL VALIDATION */}
      <div className="border border-white/5 bg-white/2 backdrop-blur-md rounded-xl p-5 md:p-6 transition-all hover:border-[#FFCC00]/30 group">
        <p className="text-[10px] font-black tracking-[0.3em] text-[#FFCC00] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity italic">
          01 // Skill Build
        </p>
        <p className="text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed">
          Move beyond the classroom. Solve real-world problem statements curated by academic and industry veterans.
        </p>
      </div>

      {/* PORTFOLIO GROWTH */}
      <div className="border border-white/5 bg-white/2 backdrop-blur-md rounded-xl p-5 md:p-6 transition-all hover:border-[#FF6F37]/30 group">
        <p className="text-[10px] font-black tracking-[0.3em] text-[#FFCC00] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity italic">
          02 // Portfolio
        </p>
        <p className="text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed">
          Add "GTU-SET Fusion Fest Winner" to your CV. Our certificates carry the weight of Gujarat’s premier technical university.
        </p>
      </div>

      {/* EXPERT MENTORSHIP */}
      <div className={`border border-white/5 bg-white/2 backdrop-blur-md rounded-xl p-5 md:p-6 transition-all hover:border-[#FF6F37]/30 group ${showAllMobileBenefits ? '' : 'hidden sm:block'}`}>
        <p className="text-[10px] font-black tracking-[0.3em] text-[#FFCC00] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity italic">
          03 // Mentorship
        </p>
        <p className="text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed">
          Direct interaction with professors and industry experts to refine your logic, code, and mechanical designs.
        </p>
      </div>

      {/* THE NETWORK */}
      <div className={`border border-white/5 bg-white/2 backdrop-blur-md rounded-xl p-5 md:p-6 transition-all hover:border-[#FF6F37]/30 group ${showAllMobileBenefits ? '' : 'hidden sm:block'}`}>
        <p className="text-[10px] font-black tracking-[0.3em] text-[#FFCC00] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity italic">
          04 // Connections
        </p>
        <p className="text-sm text-gray-400 group-hover:text-white transition-colors leading-relaxed">
          Join a community of the nerdiest, most driven engineers in the state. Find your next co-founder or teammate.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowAllMobileBenefits((prev) => !prev)}
        className="sm:hidden mt-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#FFCC00]"
      >
        {showAllMobileBenefits ? 'Show Less' : 'Show More'}
      </button>

    </div>
  </div>
</div>

        <PrizesRewardsSection />

      </div>
    </section>
  );
}