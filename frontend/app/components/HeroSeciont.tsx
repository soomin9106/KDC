import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0a0a] to-[#0a0a0a] z-10" />

      {/* Background image layer */}
      <div className="absolute inset-0 opacity-20 z-0">
        <Image
          src="/001.jpeg"
          alt="KDT Competition"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Top label */}
        <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-8">
          The 1st
        </p>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white mb-4 leading-tight">
          KDT Invitational
        </h1>
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase text-white mb-12">
          Dance Competition
        </h2>

        {/* Divider */}
        <div className="w-20 h-px bg-[#c9a96e] mx-auto mb-10" />

        {/* Event info */}
        <p className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase font-light mb-3">
          2026 May 22–23
        </p>
        <p className="text-white/70 text-sm tracking-[0.2em] uppercase font-light mb-12">
          Universitas Pendidikan Indonesia, Gymnasium Hall
        </p>

        {/* Category tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["Korean Traditional", "Indonesian Traditional", "K-POP", "Ballet"].map((cat) => (
            <span
              key={cat}
              className="border border-[#c9a96e]/50 text-[#c9a96e] text-xs tracking-[0.2em] uppercase px-4 py-2 font-light"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Banner badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <span className="bg-[#c9a96e] text-black text-xs tracking-[0.2em] uppercase px-5 py-2 font-semibold">
            Top Winners Invited to Korea!
          </span>
          <span className="border border-white/30 text-white/80 text-xs tracking-[0.2em] uppercase px-5 py-2 font-light">
            Attractive Scholarships
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black px-10 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300"
          >
            Register Now
          </a>
          <a
            href="#schedule"
            className="border border-white/30 text-white/70 hover:border-white hover:text-white px-10 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300"
          >
            View Schedule
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
    </section>
  );
}
