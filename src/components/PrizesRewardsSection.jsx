import React, { useState } from 'react';
import { motion } from 'framer-motion';

const rewards = [
  {
    title: 'The Prize Pool',
    amount: '₹50,000+',
    perks: 'Distributed across 1st, 2nd, and 3rd place winners in all technical categories.',
  },
  {
    title: 'Proof of Skill',
    amount: 'For Everyone',
    perks: 'Guaranteed official certificates for every participant to power up your portfolio.',
  },
  
  {
    title: 'Pure Growth',
    amount: 'Real Impact',
    perks: 'Face real-world engineering challenges and get direct feedback from industry mentors.',
  },
];

export default function PrizesRewardsSection() {
  const [showAllMobileRewards, setShowAllMobileRewards] = useState(false);

  return (
    <section className="mt-24 border-t border-white/10 pt-16">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[11px] font-black tracking-[0.35em] text-[#FFCC00] uppercase mb-3 italic">Event Incentives</p>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.92] uppercase">
            Prizes &<br /><span className="text-white/25 italic font-black">Experience.</span>
          </h3>
        </div>
        <div className="max-w-xl">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
            Winning is just the beginning. At <span className="text-[#FFCC00]">Fusion Fest 2.0</span>, the real reward is the 
            intensive environment and the people you meet. Whether you take the cash or the certificate, 
            you leave as a better engineer.
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {rewards.map((reward, idx) => (
          <motion.article
            key={reward.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`rounded-2xl border border-white/10 bg-white/3 p-5 md:p-6 ${idx > 1 && !showAllMobileRewards ? 'hidden sm:block' : ''}`}
          >
            <p className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-5 italic">Benefit_0{idx + 1}</p>
            <h4 className="text-xl font-black tracking-tight uppercase mb-2 text-white">{reward.title}</h4>
            <p className="text-2xl font-black text-[#FFCC00] tracking-tight mb-4 leading-none">{reward.amount}</p>
            <p className="text-sm text-white/80 leading-relaxed font-medium">{reward.perks}</p>
          </motion.article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowAllMobileRewards((prev) => !prev)}
        className="sm:hidden mt-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#FFCC00]"
      >
        {showAllMobileRewards ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
}