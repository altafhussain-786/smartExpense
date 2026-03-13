import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AIProcessingSection from "../components/howItWorks/AIProcessingSection";
import HeroSection from "../components/howItWorks/HeroSection";
import MultiAccountSyncSection from "../components/howItWorks/MultiAccountSyncSection";
import VoiceExpenseSection from "../components/howItWorks/VoiceExpenseSection";

const HowItWork = () => {
  return <>
  <Navbar/>
  <HeroSection/>
  <VoiceExpenseSection/>
  <AIProcessingSection/>
  <MultiAccountSyncSection/>
  <Footer/>
  </>
};

export default HowItWork;
