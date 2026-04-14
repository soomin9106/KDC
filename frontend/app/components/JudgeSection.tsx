import Image from "next/image";
const judges = [
  {
    name: "Park Hyun Soo",
    role: "K-pop",
    image: "/park.png",
    affiliation: "K-pop Choreographer & Judge",
  },
  {
    name: "Ryu Joo Yeon",
    role: "Ballet",
    image: "/ryu.png",
    affiliation: "Principal Ballerina - Korea Ballet Theatre",
  },
  {
    name: "Jo Chae Eun",
    role: "Ballet",
    image: "/jo.png",
    affiliation: "Artistic Director - Seoul Dance Ensemble",
  },
];

export function JudgesSection() {
  return (
    <section id="judge" className="w-full py-32 px-6 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Evaluation
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Meet the Judges
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="bg-[#111111] px-8 py-12 flex flex-col items-center text-center hover:bg-[#1a1a1a] transition-colors duration-300 group"
            >
              <div className="relative mb-8 overflow-hidden">
                <Image
                  src={judge.image}
                  alt={judge.name}
                  width={200}
                  height={260}
                  className="w-44 h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase font-light mb-3">
                {judge.role}
              </p>
              <h3 className="text-white text-base font-light tracking-[0.15em] uppercase mb-2">
                {judge.name}
              </h3>
              <div className="w-6 h-px bg-[#c9a96e]/40 mx-auto mb-3" />
              <p className="text-white/40 text-xs font-light tracking-wider">
                {judge.affiliation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
