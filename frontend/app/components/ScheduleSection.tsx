const schedule = [
  { time: "08:00 – 09:00", event: "Stage Check and Rehearsal" },
  { time: "09:00 – 09:30", event: "Opening Ceremony & Judges Introduction" },
  { time: "09:30 – 11:00", event: "Indonesian Traditional Dance Competition" },
  { time: "11:00 – 13:00", event: "Ballet Competition" },
  { time: "13:00 – 14:00", event: "Lunch Break" },
  { time: "14:00 – 16:30", event: "K-POP Dance Competition" },
  { time: "16:30 – 17:00", event: "Judging Time" },
  { time: "17:00 – 18:30", event: "Awards Ceremony & Scholarship Announcement" },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="w-full py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Program
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Event Schedule
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/50 text-sm tracking-widest uppercase font-light">
            June 13, 2026 · Universitas Pendidikan Indonesia
          </p>
        </div>

        {/* Schedule table */}
        <div className="divide-y divide-white/10 border-t border-white/10">
          {schedule.map((item, i) => (
            <div key={i} className="flex items-start gap-8 py-6 hover:bg-white/[0.02] px-4 transition-colors duration-200">
              <span className="text-[#c9a96e] text-xs tracking-widest font-light w-36 flex-shrink-0 pt-0.5">
                {item.time}
              </span>
              <span className="text-white/70 text-sm font-light tracking-wide">
                {item.event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
