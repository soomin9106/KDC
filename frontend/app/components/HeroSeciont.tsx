import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Full-bleed poster image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/001.jpeg"
          alt="The 1st KDT Invitational Dance Competition"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay — left side for text readability, subtle elsewhere */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-20 max-w-7xl mx-auto">
        <div className="max-w-xl pt-28 pb-20">
          {/* Top label */}
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-6">
            The 1st
          </p>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] uppercase text-white leading-tight mb-3">
            KDT
          </h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white mb-2">
            Invitational
          </h2>
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white mb-10">
            Dance Competition
          </h2>

          {/* Divider */}
          <div className="w-16 h-px bg-[#c9a96e] mb-8" />

          {/* Date & Venue */}
          <div className="space-y-2 mb-8">
            <p className="flex items-center gap-3 text-white/90 text-sm font-light tracking-wider">
              <span className="text-[#c9a96e]">📅</span> June 13, 2026
            </p>
            <p className="flex items-center gap-3 text-white/70 text-sm font-light tracking-wider">
              <span className="text-[#c9a96e]">📍</span> Universitas Pendidikan Indonesia
            </p>
            <p className="flex items-center gap-3 text-[#c9a96e] text-sm font-light tracking-wider">
              <span>🎟</span> FREE ENTRY for Audience
            </p>
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Indonesian Traditional", "K-POP Dance", "Ballet"].map((cat) => (
              <span
                key={cat}
                className="border border-[#c9a96e]/60 text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-light"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Prize banner */}
          <div className="bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-5 py-4 mb-10">
            <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-light mb-1">
              🏆 Top Winners Invited to Korea
            </p>
            <p className="text-white/70 text-xs font-light tracking-wider">
              🎁 Total Prize up to IDR 5,000,000++ + Dance & Ballet Classes in Korea
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#register"
              className="border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black px-8 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300 text-center"
            >
              Register Now
            </a>
            <a
              href="https://wa.me/6282260905037"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white/70 hover:border-white hover:text-white px-8 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}
