// ScholarshipSection.tsx

const karts = [
  { place: "1st", prize: "1 Month Class + Flight", icon: "🥇" },
  { place: "2nd", prize: "3 Weeks Class", icon: "🥈" },
  { place: "3rd", prize: "2 Weeks Class", icon: "🥉" },
];

const additionalBenefits = [
  {
    org: "Yoo's Ballet Conservatory",
    category: "Category: Ballet",
    benefit: "2 Weeks Class",
  },
  {
    org: "Kangwon National University",
    category: "Department of Dance",
    benefit: "2 Weeks Class",
  },
  {
    org: "Studio Mombulim",
    category: "Cash Prize",
    benefit: "IDR 2,800,000",
  },
];

export function ScholarshipSection() {
  return (
    <section id="scholarship" className="w-full py-32 px-6 bg-[#111111] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Awards
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Scholarship & Benefits
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-6" />
          {/* Total prize highlight */}
          <div className="inline-block border border-[#c9a96e]/40 px-8 py-4 mt-2">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-1">Total Prize</p>
            <p className="text-white text-xl font-light tracking-wider">IDR 5,000,000++ + Korea Classes</p>
          </div>
        </div>

        {/* Top winners → Korea */}
        <div className="bg-[#c9a96e]/5 border border-[#c9a96e]/20 px-8 py-6 mb-12 text-center">
          <p className="text-[#c9a96e] text-sm tracking-[0.2em] uppercase font-light">
            🏆 Top Winners Will Be Invited to Korea
          </p>
        </div>

        {/* KARTS — main scholarship */}
        <div className="border border-white/10 p-10 mb-12">
          <div className="mb-8">
            <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-2">
              Featured Scholarship
            </p>
            <h3 className="text-xl font-light tracking-[0.15em] uppercase text-white mb-1">
              KARTS School of Dance
            </h3>
            <p className="text-white/40 text-xs tracking-widest font-light">
              Korea National University of Arts · Category: Korean Traditional Dance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {karts.map((item) => (
              <div
                key={item.place}
                className="bg-[#111111] px-8 py-8 text-center hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <p className="text-3xl mb-4">{item.icon}</p>
                <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light mb-3">
                  {item.place} Place
                </p>
                <p className="text-white text-sm font-light tracking-wider">
                  {item.prize}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional benefits */}
        <div>
          <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-8 text-center">
            Additional Partner Benefits
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {additionalBenefits.map((item) => (
              <div
                key={item.org}
                className="bg-[#111111] px-8 py-10 hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <h4 className="text-white text-sm font-light tracking-wider uppercase mb-2">
                  {item.org}
                </h4>
                <p className="text-white/40 text-xs font-light tracking-wider mb-6">
                  {item.category}
                </p>
                <div className="w-8 h-px bg-[#c9a96e] mb-6" />
                <p className="text-[#c9a96e] text-base font-light tracking-wider">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
