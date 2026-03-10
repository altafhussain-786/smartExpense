import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import AiInsights from '../components/home/AiInsights'
import FinancialFreedomSteps from '../components/home/FinancialFreedomSteps'
import Home from '../components/home/Home'
import PricingPlan from '../components/home/PricingPlan'
const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <AiInsights/>
        <FinancialFreedomSteps/>
        <PricingPlan/>
        <Footer/>
    </>
  )
}

export default LandingPage