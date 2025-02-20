import './utils/style/global.scss'
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Error from "./components/404"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/*" element={<Error />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App