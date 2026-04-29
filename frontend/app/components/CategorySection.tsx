const categories = [
  {
    id: "indonesian",
    title: "Indonesian Traditional",
    description:
      "A celebration of Indonesia's rich cultural heritage through traditional dance forms from across the archipelago.",
    divisions: ["Elementary Division", "Middle School Division", "High School & University Division"],
    registrationLink: "https://bit.ly/KDT1st-Traditional-Registration",
  },
  {
    id: "kpop",
    title: "K-POP Dance",
    description:
      "High-energy performances inspired by Korean popular music culture, showcasing modern choreography and stage presence.",
    divisions: ["Elementary & Middle School Division", "High School & University Division"],
    registrationLink: "https://bit.ly/KDT1st-KPop-Registration",
  },
  {
    id: "ballet",
    title: "Ballet",
    description:
      "Classical and contemporary ballet performances evaluated on technique, artistry, and musicality.",
    divisions: ["Elementary Division", "Middle School Division", "High School & University Division"],
    registrationLink: "https://bit.ly/KDT1st-Ballet-Registration",
  },
];

export function CategorySection() {
  return (
    <section id="event" className="w-full py-32 px-6 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Competition
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Open Categories
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 text-sm tracking-widest uppercase font-light">
            June 13, 2026 · Universitas Pendidikan Indonesia
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors duration-300 group flex flex-col"
            >
              <h3 className="text-lg font-light tracking-[0.2em] uppercase text-white mb-4 group-hover:text-[#c9a96e] transition-colors duration-300">
                {cat.title}
              </h3>
              <div className="w-8 h-px bg-[#c9a96e]/40 mb-5" />
              <p className="text-white/50 text-sm leading-relaxed font-light mb-6 flex-1">
                {cat.description}
              </p>
              <ul className="space-y-2 mb-8">
                {cat.divisions.map((div) => (
                  <li key={div} className="flex items-center gap-3 text-white/60 text-xs tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-[#c9a96e] flex-shrink-0" />
                    {div}
                  </li>
                ))}
              </ul>
              <a
                href={cat.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#c9a96e]/50 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 font-light transition-all duration-300 text-center"
              >
                Register →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
