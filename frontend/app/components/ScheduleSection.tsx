const day1Schedule = [
  { time: "08:00 – 09:00", event: "Stage Check and Rehearsal" },
  { time: "09:00 – 09:30", event: "Opening Ceremony & Judges Introduction" },
  { time: "09:30 – 13:00", event: "Korean Traditional Dance Competition" },
  { time: "13:00 – 14:00", event: "Lunch Break" },
  { time: "14:00 – 17:30", event: "Indonesian Traditional Dance Competition" },
  { time: "17:30 – 18:00", event: "Judging Time" },
  { time: "18:00 – 19:00", event: "Awards Ceremony & Group Photo" },
];

const day2Schedule = [
  { time: "08:00 – 09:00", event: "Stage Check and Rehearsal" },
  { time: "09:00 – 09:30", event: "Opening Remarks & Judges Introduction" },
  { time: "09:30 – 11:30", event: "K-POP Dance Competition (Elementary & Middle)" },
  { time: "11:30 – 13:00", event: "K-POP Dance Competition (High School & University)" },
  { time: "13:00 – 14:00", event: "Lunch Break" },
  { time: "14:00 – 16:30", event: "Ballet Competition (All Divisions)" },
  { time: "16:30 – 17:00", event: "Judging Time" },
  { time: "17:00 – 18:30", event: "Awards Ceremony & Scholarship Announcement" },
];

function ScheduleTable({ items }: { items: { time: string; event: string }[] }) {
  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-8 py-5">
          <span className="text-[#c9a96e] text-xs tracking-widest font-light w-36 flex-shrink-0 pt-0.5">
            {item.time}
          </span>
          <span className="text-white/70 text-sm font-light tracking-wide">
            {item.event}
          </span>
        </div>
      ))}
    </div>
  );
}

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
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        {/* Days */}
        <div className="space-y-16">
          {/* Day 1 */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-1">
                  Day 1
                </p>
                <h3 className="text-lg font-light tracking-[0.2em] uppercase text-white">
                  May 22, 2026 — Korean & Indonesian Traditional
                </h3>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <ScheduleTable items={day1Schedule} />
          </div>

          {/* Day 2 */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-1">
                  Day 2
                </p>
                <h3 className="text-lg font-light tracking-[0.2em] uppercase text-white">
                  May 23, 2026 — K-POP & Ballet
                </h3>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <ScheduleTable items={day2Schedule} />
          </div>
        </div>
      </div>
    </section>
  );
}
