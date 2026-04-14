
const categories = [
  {
    id: "korean",
    day: "Day 1 — May 22",
    title: "Korean Traditional",
    description:
      "Celebrate the beauty of Korean traditional dance including Buchaechum, Salpuri, and other classical forms.",
    divisions: ["Elementary Division", "Middle School Division", "High School & University Division"],
    accent: true,
  },
  {
    id: "indonesian",
    day: "Day 1 — May 22",
    title: "Indonesian Traditional",
    description:
      "A tribute to Indonesia's rich cultural heritage through traditional dance forms from across the archipelago.",
    divisions: ["Elementary Division", "Middle School Division", "High School & University Division"],
    accent: false,
  },
  {
    id: "kpop",
    day: "Day 2 — May 23",
    title: "K-POP Dance",
    description:
      "High-energy performances inspired by Korean popular music culture, showcasing modern choreography and stage presence.",
    divisions: ["Elementary & Middle School Division", "High School & University Division"],
    accent: false,
  },
  {
    id: "ballet",
    day: "Day 2 — May 23",
    title: "Ballet",
    description:
      "Classical and contemporary ballet performances evaluated on technique, artistry, and musicality.",
    divisions: ["Elementary Division", "Middle School Division", "High School & University Division"],
    accent: false,
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
            Categories
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 text-sm tracking-widest uppercase font-light">
            2026 May 22–23 · Universitas Pendidikan Indonesia, Gymnasium Hall
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors duration-300 group"
            >
              <p className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase font-light mb-4">
                {cat.day}
              </p>
              <h3 className="text-xl font-light tracking-[0.2em] uppercase text-white mb-4 group-hover:text-[#c9a96e] transition-colors duration-300">
                {cat.title}
              </h3>
              <div className="w-8 h-px bg-[#c9a96e]/40 mb-5" />
              <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                {cat.description}
              </p>
              <ul className="space-y-2">
                {cat.divisions.map((div) => (
                  <li key={div} className="flex items-center gap-3 text-white/60 text-xs tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-[#c9a96e] flex-shrink-0" />
                    {div}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
