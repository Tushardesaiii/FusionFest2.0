function FooterSection() {
  return (
    <footer id="register" className="border-t border-white/10 bg-[#050505] px-4 sm:px-6 py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:items-start">
          <div>
            <p className="text-[11px] font-black tracking-[0.4em] text-[#FFCC00] uppercase mb-4 italic">
              Fusion Fest 2.0
            </p>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] uppercase max-w-2xl">
              Build, compete, and celebrate the next wave of ideas.
            </h4>
            <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-gray-300">
              Organized by GTU-SET, Fusion Fest brings together hackathons, engineering challenges,
              debates, design sprints, and cultural energy in one high-voltage experience.
            </p>

            
              
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 mb-4">Navigate</p>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="#events-section" className="transition hover:text-[#FFCC00]">Events</a>
              <a href="#register" className="transition hover:text-[#FFCC00]">Register</a>
              <a href="#faq-section" className="transition hover:text-[#FFCC00]">FAQ</a>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 mb-4">Connect</p>
            <div className="flex gap-3 lg:justify-end">
                 <a href="https://www.instagram.com/gtu_set/?hl=en" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs text-gray-300 transition hover:border-[#FFCC00] hover:text-[#FFCC00]">ig</a>
                </div>

            <div className="mt-8 space-y-2 text-sm text-gray-400">
              <p>17th - 18th April, 2026</p>
              <p>9:00 AM onwards</p>
              <p>School of Engineering and Technology, GTU</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            Fusion Fest 2K26 // Beyond Tech - Fusion of ideas & fun
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            Made for students, by students.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
