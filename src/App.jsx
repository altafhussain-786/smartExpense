import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Features from "./pages/Features"
import HowItWork from "./pages/HowItWork"
import Pricing from "./pages/Pricing"
import AIInsights from "./pages/AIInsights"
import Layout from "./components/layout/Layout"
import MainDashboard from "./pages/MainDashboard"
import TransactionsOverview from "./pages/TransactionsOverview"
import DashboardLayout from "./components/dashboardLayout/DashboardLayout"
import BudgetOverview from "./pages/BudgetOverview"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/howitwork" element={<HowItWork />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aiinsights" element={<AIInsights />} />
          </Route>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="dashboard/transactions" element={<TransactionsOverview />} />
            <Route path="dashboard/budget" element={<BudgetOverview />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App