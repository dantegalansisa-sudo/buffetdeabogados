import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import HeroSection from './sections/HeroSection'
import StatsSection from './sections/StatsSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import WhyUsSection from './sections/WhyUsSection'
import TeamSection from './sections/TeamSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
