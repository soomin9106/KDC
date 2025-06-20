export default function HeroSection() {
    return (
      <section className="relative w-full h-screen bg-white text-black">
        <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
          <source src="/video/highlights.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">2025 K-POP DANCE TALENT (KDT)</h1>
          <p className="mt-2 text-lg">August 21–22, 2025 | Ice Palace Hall - Lotte Shopping Avenue Jakarta, Indonesia</p>
          <div className="mt-4 space-x-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg">Register Now</button>
            <button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg">Download Schedule</button>
          </div>
        </div>
      </section>
    );
  }
  