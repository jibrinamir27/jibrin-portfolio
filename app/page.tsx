import fs from "node:fs";
import path from "node:path";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PlaygroundTerminal } from "@/components/PlaygroundTerminal";
import { ExploringSection } from "@/components/ExploringSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  const profilePhotoPath = path.join(process.cwd(), "public", "images", "profile.jpg");
  const hasProfileImage = fs.existsSync(profilePhotoPath);

  return (
    <>
      <HeroSection />
      <AboutSection hasProfileImage={hasProfileImage} />
      <TechStackSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <PlaygroundTerminal />
      <ExploringSection />
      <ContactSection />
    </>
  );
}
