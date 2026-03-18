import { Route, BrowserRouter as Router, Routes, }  from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Features from "./pages/Features"
import HowItWork from "./pages/HowItWork"
import Pricing from "./pages/Pricing"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/features" element={<Features/>}/> 
          <Route path="/how" element={<HowItWork/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App