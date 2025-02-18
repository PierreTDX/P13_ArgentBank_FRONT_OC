import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Error from "./components/404"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
