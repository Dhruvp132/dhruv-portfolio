import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Overview from "./components/Overview1"
import Overview2 from "./components/Overview"
import Education from "./components/Education"
import SelectedWorks from "./components/SelectedWorks";
import Certifications from "./components/Certifications";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactSection from "./components/ContactSection";
import { TechStackBadges } from "./components/Skills";
import FreelanceProjects from "./components/FreelanceProjects";


export default function Home() {
  return (
    <main className="flex flex-col text-wrap">
      <Navbar />
      <Hero />
      <Overview />
      <Overview2 />
      <FreelanceProjects />
      <section id="skills" className="section-surface w-full py-16 md:py-20 text-white">
        <div className="section-inner">
          <TechStackBadges />
        </div>
      </section>
      <SelectedWorks />
      <div className="section-surface w-full py-16 md:py-20">
        <div className="section-inner">
          <ProjectsGrid />
        </div>
      </div>
      <Education />
      <Certifications />
      <ContactSection />
    </main>
  )
}
