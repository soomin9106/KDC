import { ExternalLink } from "lucide-react";

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

        <p className="text-white/50 text-sm font-light tracking-wider leading-relaxed mb-12">
          Complete your registration via the Google Form below.<br />
          Registration is open for all four categories — Korean Traditional, Indonesian Traditional, K-POP, and Ballet.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/your-form-id/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black px-12 py-4 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300"
        >
          <ExternalLink className="w-4 h-4" />
          Go to Registration Form
        </a>

        {/* Info boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 mt-16">
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Date</p>
            <p className="text-white/70 text-sm font-light">May 22–23, 2026</p>
          </div>
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Venue</p>
            <p className="text-white/70 text-sm font-light">UPI Gymnasium Hall</p>
          </div>
          <div className="bg-[#0a0a0a] px-6 py-8">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">Categories</p>
            <p className="text-white/70 text-sm font-light">4 Dance Genres</p>
          </div>
        </div>
      </div>
    </section>
  );
}
