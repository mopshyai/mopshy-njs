import HeroSection from '@/components/sections/HeroSection';
import FreeTrialSection from '@/components/sections/FreeTrialSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/Newsletter';
export default function HomePage() {
  return (
    <main>
      <HeroSection className='mt-20' />
     <FreeTrialSection/>
     <ProblemSolutionSection/>
     <FAQSection />
     <ContactSection />
     <NewsletterSection />
    </main>
  );
}