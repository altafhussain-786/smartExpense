import CallToAction from "../components/features/CallToAction"
import FinancialHero from "../components/features/FinancialHero"
import Hero from "../components/features/Hero"
import PoweredByAIInsights from "../components/features/PoweredByAIInsights"
import ProgressFeature from "../components/features/ProgressFeature"
import SecuritySection from "../components/features/SecuritySection"
import VoiceToTransaction from "../components/features/VoiceToTransaction"

const Features = () => {
  return (
    <>
      <Hero />
      <VoiceToTransaction />
      <PoweredByAIInsights />
      <FinancialHero />
      <SecuritySection />
      <ProgressFeature />
      <CallToAction />
    </>
  )
}

export default Features