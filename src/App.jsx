import AboutSection from "./components/AboutSection";
import AnimatedSection from "./components/AnimatedSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ModalidadesSection from "./components/ModalitiesSection";
import StatsSection from "./components/StatsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <div className="w-full">

      <Header />
      <HeroSection />

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <ModalidadesSection />

      <AboutSection />

      <SubscriptionSection />

      <TestimonialSection />

      <FAQSection />

      <FormSection />

      <FooterSection />

    </div>
  )
}

export default App;