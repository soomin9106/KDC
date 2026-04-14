import { Mail, Phone, Instagram, Youtube, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 px-6 bg-[#111111] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Inquiries
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Get in Touch
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-16">
          <div className="bg-[#111111] px-8 py-10 flex flex-col items-center gap-4 hover:bg-[#1a1a1a] transition-colors duration-300">
            <Mail className="w-5 h-5 text-[#c9a96e]" />
            <div className="text-center">
              <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase font-light mb-2">Email</p>
              <p className="text-white/70 text-sm font-light">contact@kdt-event.org</p>
            </div>
          </div>
          <div className="bg-[#111111] px-8 py-10 flex flex-col items-center gap-4 hover:bg-[#1a1a1a] transition-colors duration-300">
            <Phone className="w-5 h-5 text-[#c9a96e]" />
            <div className="text-center">
              <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase font-light mb-2">Phone</p>
              <p className="text-white/70 text-sm font-light">+62 812-3456-7890</p>
            </div>
          </div>
          <div className="bg-[#111111] px-8 py-10 flex flex-col items-center gap-4 hover:bg-[#1a1a1a] transition-colors duration-300">
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-[#c9a96e]" />
              <Youtube className="w-5 h-5 text-[#c9a96e]" />
              <Facebook className="w-5 h-5 text-[#c9a96e]" />
            </div>
            <div className="text-center">
              <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase font-light mb-2">Social Media</p>
              <p className="text-white/70 text-sm font-light">@kdt.official</p>
            </div>
          </div>
        </div>

        {/* Register CTA */}
        <div className="text-center border border-white/10 py-14 px-6">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Ready to Join?
          </p>
          <h3 className="text-2xl font-light tracking-[0.2em] uppercase text-white mb-8">
            Register for the Competition
          </h3>
          <a
            href="#register"
            className="inline-block border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black px-12 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
