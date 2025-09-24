import HeroSection from '@/components/sections/HeroSection';
import FreeTrialSection from '@/components/sections/FreeTrialSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
export default function HomePage() {
  return (
    <main>
      <HeroSection />
     <FreeTrialSection/>
     <ProblemSolutionSection/>
     <FAQSection />
     <ContactSection />
    </main>
  );
}