import Image from "next/image";

// ScholarshipSection.tsx
export function ScholarshipSection() {
  return (
    <section className="w-full py-20 px-8 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Scholarship Opportunities</h2>
        <p className="text-lg mb-6">
          Standout participants may receive full dance academy sponsorships, international training opportunities,
          cash prizes, trophies, and special mentorships from renowned professionals.
        </p>
        <p className="text-lg mb-10">
          Participants will also benefit from broad exposure and valuable networking with global institutions.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image src="/images/sponsors/sponsor1.png" alt="Sponsor 1" width={120} height={48} className="object-contain" />
          <Image src="/images/sponsors/sponsor2.png" alt="Sponsor 2" width={120} height={48} className="object-contain" />
          <Image src="/images/sponsors/sponsor3.png" alt="Sponsor 3" width={120} height={48} className="object-contain" />
          <Image src="/images/sponsors/sponsor4.png" alt="Sponsor 4" width={120} height={48} className="object-contain" />
        </div>
      </div>
    </section>
  );
}