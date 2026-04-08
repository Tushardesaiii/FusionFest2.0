import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is the team size for events?',
    answer:
      'Team size depends on the event you choose. Some events allow solo participation, while hackathon and design tracks usually allow small teams. Final limits are shown in each event rulebook at registration.',
  },
  {
    question: 'Will participants get certificates?',
    answer:
      'Yes. Every registered participant who attends and completes the event process receives an official participation certificate from GTU-SET. Winners also receive achievement certificates.',
  },
  {
    question: 'Can I participate in more than one event?',
    answer:
      'Yes, you can join multiple events as long as timings do not clash. Plan your schedule using the event timeline and confirm final slots during registration.',
  },
 
  {
    question: 'What should I bring on event day?',
    answer:
      'Bring your college ID, registration confirmation, charger, and required tools (laptop/components) based on the event. Reporting starts from 9:00 AM onwards.',
  },
  {
    question: 'What are the rewards for winners?',
    answer:
      'Fusion Fest 2K26 offers a Rs 50,000+ prize pool, winner recognition, certificates, and strong portfolio value through judged demos and mentor feedback.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 bg-white/2 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-6"
      >
        <span className="text-sm md:text-base font-bold tracking-wide uppercase text-white/90">{item.question}</span>
        <span className="text-2xl leading-none text-[#FFCC00]">{isOpen ? '−' : '+'}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="px-6"
          >
            <p className="pb-6 text-sm md:text-base leading-relaxed text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq-section" className="bg-[#050505] text-white px-4 sm:px-6 py-20 md:py-24 border-t border-white/5 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="text-[11px] font-black tracking-[0.4em] text-[#FFCC00] uppercase mb-3 italic">Info Desk</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-[0.92] md:leading-[0.9] uppercase">
            Frequently Asked<br />
            <span className="text-white/20 italic">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
