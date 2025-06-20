import Image from "next/image";

export default function AboutSection() {
    return (
      <section id="about" className="w-full py-16 px-6 text-gray-800 bg-accent/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About KDT & IDCA</h2>
            <p className="mb-4 text-xl">
              Korea Dance Talent (KDT) aims to foster dance development in Korea and enhance global collaboration. It has strong
              ties with professionals and organizations worldwide, with a special focus on expanding into Southeast Asia.
            </p>
            <p className="mb-4 text-xl">
              The International Dance Collaboration Association (IDCA), as the host, leads numerous international partnerships to
              promote cultural exchange and talent development.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Global Partners"
              width={500}
              height={300}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  