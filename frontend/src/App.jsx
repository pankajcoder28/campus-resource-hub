
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Courses from './pages/Courses.jsx'
import Dashboard from './admin/pages/dashboard.jsx'
import Connect from "./pages/Connect";
import Footer from './components/Footer.jsx'

function AppRoutes() {
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== '/admin/dashboard' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      {pathname !== '/admin/dashboard' && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
