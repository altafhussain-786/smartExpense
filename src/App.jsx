import Navbar from './common/Navbar'
import Home from './pages/Home'
import AiInsights from './components/AiInsights'
import Footer from './common/Footer'
import FinancialFreedomSteps from './components/FinancialFreedomSteps'
import PricingPlan from './components/PricingPlan'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AiInsights />
      <FinancialFreedomSteps />
      <PricingPlan/>
      <Footer />
    </>
  )
}

export default App