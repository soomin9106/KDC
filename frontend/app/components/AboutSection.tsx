import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-6 text-gray-800 bg-accent/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT - TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About KDT & IDCA</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Korea Dance Talent (KDT) aims to foster dance development in Korea and enhance global collaboration. It has strong
            ties with professionals and organizations worldwide, with a special focus on expanding into Southeast Asia.
          </p>
          <p className="text-lg leading-relaxed">
            The International Dance Collaboration Association (IDCA), as the host, leads numerous international partnerships to
            promote cultural exchange and talent development.
          </p>
        </div>

        {/* RIGHT - 2 IMAGES */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/logo.png" 
            alt="Dance Showcase"
            width={300}
            height={200}
            className="rounded-xl shadow-lg object-cover w-72 h-auto"
          />
          <Image
            src="/logo2.jpeg" 
            alt="Collaboration Event"
            width={300}
            height={200}
            className="rounded-xl shadow-lg object-cover w-72 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
