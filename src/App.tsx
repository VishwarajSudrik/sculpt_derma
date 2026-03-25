import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import DoctorProfilePage from './components/DoctorProfilePage'
import { getDoctorById } from './data/doctors'

function DoctorRoute() {
  const { doctorId } = useParams<{ doctorId: string }>()
  const doctor = doctorId ? getDoctorById(doctorId) : undefined
  if (!doctor) return <Navigate to="/about" replace />
  return <DoctorProfilePage doctor={doctor} />
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/doctor/:doctorId" element={<DoctorRoute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
