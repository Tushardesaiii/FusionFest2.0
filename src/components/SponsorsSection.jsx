import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function SponsorsSection() {
  const sponsors = [
   
  ]

  return (
    <section className="bg-[#050505] px-4 sm:px-6 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black tracking-[0.45em] text-[#FFCC00] uppercase italic">
            Our Sponsors
          </p>
          <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.92] uppercase text-white">
            Thanks to the teams supporting Fusion Fest 2.0
          </h3>
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-300">
            We appreciate the partners who help make the event possible and give our participants a bigger stage to build, compete, and create.
          </p>
        </div>

        <div className="grid w-full  max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex min-h-28 items-center justify-center rounded-full bg-neutral-100 border border-white/10 p-2 sm:p-5"
            >
              <img
                src={sponsor.src}
                alt={`${sponsor.name} logo`}
                className="h-32  w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection