import Image from "next/image";
import Schedule from "./components/Competition/Schedule";
import Venue from "./components/Competition/Venue";
import Overall from "./components/Competition/Overall";
import Instructors from "./components/Competition/Instructors";
import Fee from "./components/Competition/Fee";
import Introduction from "./components/Home/Introduction";
import HeroSection from "./components/HeroSeciont";
import AboutSection from "./components/AboutSection";
import { CategorySection } from "./components/CategorySection";
import { RegisterSection } from "./components/RegisterSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { JudgesSection } from "./components/JudgeSection";
import { ScholarshipSection } from "./components/ScholarshipSection";
import { GuidelinesSection } from "./components/GuidelinesSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen py-32 space-y-40 sm:space-y-20 overflow-y-scroll w-full">
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <RegisterSection />
      <ScheduleSection />
      <JudgesSection />
      <ScholarshipSection />
      <GuidelinesSection />
      <ContactSection />
    </div>
  );
}
