import AIProcessingSection from "../components/howItWorks/AIProcessingSection";
import CTASection from "../components/howItWorks/CTASection";
import GamificationSection from "../components/howItWorks/GamificationSection";
import HeroSection from "../components/howItWorks/HeroSection";
import MultiAccountSyncSection from "../components/howItWorks/MultiAccountSyncSection";
import TechStackSection from "../components/howItWorks/TechStackSection";
import VoiceExpenseSection from "../components/howItWorks/VoiceExpenseSection";

const HowItWork = () => {
  return <>
    <HeroSection />
    <VoiceExpenseSection />
    <AIProcessingSection />
    <MultiAccountSyncSection />
    <GamificationSection />
    <TechStackSection />
    <CTASection />
  </>
};

export default HowItWork;
