import CallToAction from "../components/features/CallToAction"
import FinancialDashboard from "../components/features/FinancialDashboard"
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
      <FinancialDashboard />
      <SecuritySection />
      <ProgressFeature />
      <CallToAction />
    </>
  )
}

export default Features