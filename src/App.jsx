import { Route, BrowserRouter as Router, Routes, }  from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Features from "./pages/Features"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/features" element={<Features/>}/>
       
        </Routes>
      </Router>
    </>
  )
}

export default App