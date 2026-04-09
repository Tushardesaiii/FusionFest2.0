import React, { useState } from 'react';
import { motion } from 'framer-motion';

const eventMeta = [
  { label: 'Organizer', value: 'School of Engineering and Technology, Gujarat Technological University (GTU)', wide: true },
  { label: 'Event Name', value: 'Fusion Fest - 2K26' },
  { label: 'Theme', value: 'Beyond Tech - Fusion of ideas & fun', wide: true },
  { label: 'Prize Pool', value: 'Rs 50,000+ (cash prizes)', highlight: true },
  { label: 'Dates', value: '17th - 18th April, 2026' },
  { label: 'Time', value: '9:00 AM onwards' },
];

const facultyHeads = [
  { role: 'Patron', name: 'Dr. Madhuri Bhavsar', desig: 'Director, GTU-SET' },
  { role: 'Convener', name: 'Dr. Komal Borisagar', desig: 'Associate Professor, GTU-SET' },
  { role: 'Coordinator', name: 'Prof. Anamika Mittal', desig: 'GTU-SET' },
  { role: 'Coordinator', name: 'Dr. Aanal Raval', desig: 'GTU-SET' },
];

const studentCoordinators = [
     { name: 'Tushar Desai', phone: '+91 88496 56703', sem: '6-CE' },
  { name: 'Bhavya Shah', phone: '+91 94094 07085', sem: '6-CE' },
   { name: 'Kavan Bhavsar', phone: '+91 94848 79337', sem: '4-CE' },
  { name: 'Harshil Maru', phone: '+91 93137 30627', sem: '4-CE' },
 
];

const eventSpecificCoordinators = [
  { event: 'Codestorm', lead1: 'Vivek', lead2: 'Nikunj', phone: '8320607439' },
  { event: 'Voltage Voyage', lead1: 'Darsh', lead2: 'Krupesh', phone: '6353597697' },
  { event: 'Robo Rumble', lead1: 'Krishanraj', lead2: 'Mahir', phone: 'XXXXX XXXXX' },
  { event: 'Debate Duel', lead1: 'Ishan ', lead2: 'Khushi', phone: '8128145634' },
  { event: 'AI Nexus', lead1: 'Shlok ', lead2: 'Vatsal', phone: '8733802611' },
  { event: 'Pixel Perfect', lead1: 'Raj', lead2: 'Mahek', phone: '9016325452' },
  { event: 'Spaghetti Structure', lead1: 'Nisarg', lead2: 'Manish', phone: '' },
  { event: 'Idea Forge', lead1: 'Diya', lead2: 'Ayush', phone: '8905043434' },
];

export default function Poeple() {
  const [showAllMobileCoordinators, setShowAllMobileCoordinators] = useState(false);

  return (
    <section className="bg-[#050505] text-white px-4 sm:px-6 py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[11px] font-black tracking-[0.5em] text-[#FFCC00] uppercase mb-4 italic">
            Administration // 2026
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.92] md:leading-[0.88] uppercase">
            The People Behind<br />
            <span className="text-white/15 italic">Fusion Fest.</span>
          </h2>
        </div>

      

        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1.4fr_1.1fr] mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl font-black tracking-tighter uppercase italic">Faculty Heads</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {facultyHeads.map((head, idx) => (
                <motion.div
                  key={head.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <p className="text-[10px] font-black text-[#FFCC00] tracking-[0.4em] uppercase mb-2">{head.role}</p>
                  <p className="text-xl font-black tracking-tight uppercase">{head.name}</p>
                  <p className="text-[11px] font-medium text-white/40 uppercase tracking-widest mt-1">{head.desig}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white/2 border border-white/5 p-5 sm:p-8 rounded-sm">
            <h3 className="text-lg sm:text-xl font-black tracking-tighter uppercase italic mb-5 md:mb-6 pb-4 border-b border-white/10">
              Student Coordinators
            </h3>
            <div className="space-y-3 md:space-y-4">
              {studentCoordinators.map((student, idx) => (
                <motion.div
                  key={student.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ delay: idx * 0.08 }}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/3 px-2 text-center sm:text-left"
                >
                  <span className="text-sm sm:text-base font-bold tracking-widest uppercase text-white/85">{student.name}</span>
                  <div className="text-xs sm:text-sm text-white/40">
                    {student.sem}
                  </div>
                  <a className="text-xs sm:text-sm font-mono text-white/40 text-right">
                    {student.phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 md:pt-14 border-t border-white/10">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase italic">Event Coordinators</h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {eventSpecificCoordinators.map((item, idx) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ delay: idx * 0.04 }}
                className={`bg-[#050505] p-5 sm:p-6 hover:bg-white/2 transition-colors ${idx > 3 && !showAllMobileCoordinators ? 'hidden sm:block' : ''}`}
              >
                <p className="text-[9px] font-black text-white/20 tracking-[0.3em] uppercase mb-1 italic">Module_0{idx + 1}</p>
                <h4 className="text-lg font-black tracking-tight uppercase text-[#FFCC00] mb-4">{item.event}</h4>
                <div className="space-y-1 mb-5">
                  <p className="text-[11px] font-bold text-white/75 uppercase tracking-widest">{item.lead1}</p>
                  <p className="text-[11px] font-bold text-white/75 uppercase tracking-widest">{item.lead2}</p>
                </div>
                <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="text-[10px] font-mono text-white/35">
                  {item.phone}
                </a>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowAllMobileCoordinators((prev) => !prev)}
            className="sm:hidden mt-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#FFCC00]"
          >
            {showAllMobileCoordinators ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}