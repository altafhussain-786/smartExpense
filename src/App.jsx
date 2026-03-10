import { Route, BrowserRouter as Router, Routes, }  from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Features from "./pages/Features"
import HowItWork from "./pages/HowItWork"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/features" element={<Features/>}/> 
          <Route path="/how" element={<HowItWork/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App