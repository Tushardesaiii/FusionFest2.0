function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-14" id="register">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 md:grid-cols-3 md:items-end">
        <div>
          <h4 className="text-2xl font-black tracking-tight">GLOBAL SYNC</h4>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
            International-level innovation symposium connecting creators, engineers, and global visionaries.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a855f7]">Navigation</p>
          <a href="#" className="text-gray-300 transition hover:text-[#22d3ee]">
            Home
          </a>
          <a href="#hero" className="text-gray-300 transition hover:text-[#22d3ee]">
            About
          </a>
          <a href="#" className="text-gray-300 transition hover:text-[#22d3ee]">
            Privacy Policy
          </a>
        </div>

        <div className="text-left md:text-right">
          <div className="flex gap-2 md:justify-end">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-gray-300">X</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-gray-300">in</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-gray-300">ig</span>
          </div>
          <p className="mt-5 text-xs tracking-[0.18em] text-gray-500">GLOBAL SYNC / 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
