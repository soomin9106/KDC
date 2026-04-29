import HeroSection from "./components/HeroSeciont";
import AboutSection from "./components/AboutSection";
import { CategorySection } from "./components/CategorySection";
import { RegisterSection } from "./components/RegisterSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { ScholarshipSection } from "./components/ScholarshipSection";
import { GuidelinesSection } from "./components/GuidelinesSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#0a0a0a]">
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <RegisterSection />
      <ScheduleSection />
      <ScholarshipSection />
      <GuidelinesSection />
      <ContactSection />
    </main>
  );
}
