import AboutSection from "./page-sections/AboutSection";
import ContactSection from "./page-sections/ContactSection";
import FooterSection from "./page-sections/FooterSection";
import HeroSection from "./page-sections/HeroSection";
import SkillSection from "./page-sections/SkillSection";
import { WorkProcessSection } from "./page-sections/WorkProcessSection";

const App = () => {

  return (
    <>
     <HeroSection />
     <SkillSection />
     <AboutSection />
     <WorkProcessSection />
     <ContactSection />
     <FooterSection />
    </>
  )
}

export default App