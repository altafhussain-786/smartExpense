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
import GetStartedPage from "./pages/GetStartedPage"
import PublicRoute from "./components/publicRoute/PublicRoute"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="features" element={<Features />} />
            <Route path="how-it-work" element={<HowItWork />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="ai-insights" element={<AIInsights />} />
          </Route>

          <Route path="/get-started" element={<GetStartedPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<MainDashboard />} />
              <Route path="transactions" element={<TransactionsOverview />} />
              <Route path="budget" element={<BudgetOverview />} />
              <Route path="ai-insights" element={<DashboardAiInsights />} />
              <Route path="account" element={<AccountOverview />} />
              <Route path="reports" element={<ReportsOverview />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App