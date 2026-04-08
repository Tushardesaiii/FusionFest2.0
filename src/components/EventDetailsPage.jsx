import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import FooterSection from './FooterSection';
import { eventsData, getEventBySlug } from '../data/eventsData';

export default function EventDetailsPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-40 pb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFCC00] mb-4">Error</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-5">Event Not Found</h1>
          <p className="text-gray-300 mb-10">The event page you are trying to access does not exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors"
          >
            Back To Home
          </Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  const otherEvents = eventsData.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-[#FFCC00] transition-colors"
        >
          <span>←</span>
          <span>Back To Timeline</span>
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <p className="text-[11px] font-black tracking-[0.35em] text-[#FFCC00] uppercase mb-4">Day 0{event.day} // {event.tag}</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-6">{event.name}</h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">{event.details}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Time</p>
                <p className="text-lg font-black">{event.start} to {event.end}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Team Size</p>
                <p className="text-lg font-black">{event.teamSize}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Eligibility</p>
                <p className="text-lg font-black">{event.eligibility}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Venue</p>
                <p className="text-lg font-black">{event.venue}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#FFCC00] mb-4">Rules</p>
              <ul className="space-y-2 text-white/85">
                {event.rules.map((rule) => (
                  <li key={rule} className="text-sm md:text-base">• {rule}</li>
                ))}
              </ul>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/2 overflow-hidden"
          >
            <div className="aspect-4/5">
              <img src={event.img} alt={event.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 border-t border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed mb-6">{event.summary}</p>
              <div className="grid gap-3">
                <a
                  href={event.sopLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-colors"
                >
                  Read Event SOP
                </a>
                <a
                  href={event.joinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#FFCC00] px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black hover:bg-[#ffd84d] transition-colors"
                >
                  Join This Event
                </a>
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-8">Explore Other Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherEvents.map((item) => (
              <Link
                key={item.slug}
                to={`/events/${item.slug}`}
                className="rounded-2xl border border-white/10 bg-white/2 p-5 hover:border-[#FFCC00]/40 hover:bg-white/5 transition-colors"
              >
                <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-2">{item.tag}</p>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{item.name}</h3>
                <p className="text-xs text-white/60">Day 0{item.day} • {item.start}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
