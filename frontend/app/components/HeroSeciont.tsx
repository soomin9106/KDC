import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT - TEXT BLOCK */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
            2025 K-POP DANCE TALENT (KDT)
          </h1>
          <p className="text-lg md:text-xl">
            August 21–22, 2025 <br />
            Ice Palace Hall - Lotte Shopping Avenue Jakarta, Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
              Register Now
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 rounded-lg font-semibold shadow">
              Download Schedule
            </button>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/ballet.png" // ✅ 이미지 경로를 실제 파일명으로 변경
            alt="Ballet Dancer"
            width={400}
            height={500}
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
