import LanguageGrid from "../../Components/LanguageGrid"
import AboutSection from "./AboutSection"
import FeatureSection from "./FeatureSection"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import TestimonialsSection from "./TestimonialsSection"

const HomeLayout = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <LanguageGrid />
      <AboutSection />
      <TestimonialsSection/>
      <Footer />
    </div>
  )
}

export default HomeLayout