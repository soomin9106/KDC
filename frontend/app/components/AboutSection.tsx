import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            About KDT & IDCA
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT - TEXT */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-4">
                Korea Dance Talent
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-light">
                Korea Dance Talent (KDT) aims to foster dance development in Korea
                and enhance global collaboration. It has strong ties with professionals
                and organizations worldwide, with a special focus on expanding into
                Southeast Asia.
              </p>
            </div>
            <div>
              <h3 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-4">
                International Dance Collaboration Association
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-light">
                The International Dance Collaboration Association (IDCA), as the host,
                leads numerous international partnerships to promote cultural exchange
                and talent development across Asia and beyond.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-[#c9a96e] text-2xl font-light mb-1">4</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Categories</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-[#c9a96e] text-2xl font-light mb-1">2</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Days</p>
              </div>
              <div className="text-center">
                <p className="text-[#c9a96e] text-2xl font-light mb-1">4+</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Scholarships</p>
              </div>
            </div>
          </div>

          {/* RIGHT - IMAGES */}
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/logo.png"
              alt="KDT Logo"
              width={280}
              height={200}
              className="object-contain w-52 h-auto opacity-90"
            />
            <Image
              src="/logo2.jpeg"
              alt="IDCA Logo"
              width={280}
              height={200}
              className="object-contain w-52 h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
