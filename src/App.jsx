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
import DashboardAiInsights from "./pages/DashboardAiInsights"
import AccountOverview from "./pages/AccountOverview"
import ReportsOverview from "./pages/ReportsOverview"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
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
            <Route path="/ai-insights" element={<AIInsights />} />
          </Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="dashboard/transactions" element={<TransactionsOverview />} />
            <Route path="dashboard/budget" element={<BudgetOverview />} />
            <Route path="dashboard/aiInsights" element={<DashboardAiInsights />} />
            <Route path="dashboard/account" element={<AccountOverview />} />
            <Route path="dashboard/reports" element={<ReportsOverview />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App