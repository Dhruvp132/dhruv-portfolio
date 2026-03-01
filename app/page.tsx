import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Education from "./components/Education"
import SelectedWorks from "./components/SelectedWorks";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/ContactSection";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
<Education />
<SelectedWorks />
<Certifications />
<Skills />
<ProjectsGrid /> 
<ContactSection />
    </main>
  )
}