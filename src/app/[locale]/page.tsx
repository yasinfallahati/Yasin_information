import { Locale } from "@/types/project";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import GitHubStats from "@/components/sections/GitHubStats";
import Journey from "@/components/sections/Journey";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <GitHubStats />
      <Journey />
      <Certificates />
      <Contact />
    </>
  );
}
