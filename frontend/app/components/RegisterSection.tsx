import { ExternalLink } from "lucide-react";

const registrations = [
  {
    label: "Ballet",
    link: "https://bit.ly/KDT1st-Ballet-Registration",
    short: "bit.ly/KDT1st-Ballet-Registration",
  },
  {
    label: "Traditional",
    link: "https://bit.ly/KDT1st-Traditional-Registration",
    short: "bit.ly/KDT1st-Traditional-Registration",
  },
  {
    label: "K-POP Dance",
    link: "https://bit.ly/KDT1st-KPop-Registration",
    short: "bit.ly/KDT1st-KPop-Registration",
  },
];

export function RegisterSection() {
  return (
    <section id="register" className="w-full py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
          Participation
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
          How to Register
        </h2>
        <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-10" />

        <p className="text-white/50 text-sm font-light tracking-wider leading-relaxed mb-14">
          Choose your category and register through the link below.<br />
          Show your best performance and be part of our first event!
        </p>

        {/* Registration links */}
        <div className="space-y-px bg-white/10 mb-14">
          {registrations.map((reg, i) => (
            <div
              key={reg.label}
              className="bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-between px-8 py-6 group"
            >
              <div className="flex items-center gap-5">
                <span className="text-[#c9a96e] text-xs font-light w-4">{i + 1}</span>
                <div className="text-left">
                  <p className="text-white text-sm font-light tracking-[0.15em] uppercase mb-1">
                    {reg.label}
                  </p>
                  <p className="text-white/30 text-xs font-light">{reg.short}</p>
                </div>
              </div>
              <a
                href={reg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#c9a96e]/50 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black text-[10px] tracking-[0.25em] uppercase px-5 py-2 font-light transition-all duration-300 flex items-center gap-2 flex-shrink-0"
              >
                <ExternalLink className="w-3 h-3" />
                Register
              </a>
            </div>
          ))}
        </div>

        {/* Info boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Date</p>
            <p className="text-white/70 text-sm font-light">June 13, 2026</p>
          </div>
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Venue</p>
            <p className="text-white/70 text-sm font-light">Universitas Pendidikan Indonesia</p>
          </div>
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Audience</p>
            <p className="text-[#c9a96e] text-sm font-light">🎟 FREE ENTRY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
