import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
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
        <Navbar/>
        <Hero/>
        <VoiceToTransaction/>
        <PoweredByAIInsights/>
        <FinancialDashboard/>
        <SecuritySection/>
        <ProgressFeature/>
        <CallToAction/>
        <Footer/>
    </>
  )
}

export default Features