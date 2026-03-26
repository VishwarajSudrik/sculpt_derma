import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components/layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import {
  DoctorProfile,
  DoctorProfileDhanashree,
  DoctorProfileRohini,
  DoctorProfileAkash,
  DoctorProfileSomnath,
  DoctorProfileAzhar,
  DoctorProfilePranil,
  DoctorProfileShrenik,
  DoctorProfileNitin,
  DoctorProfileBhushan
} from './pages/doctors'

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
          <Route path="/doctor/dr-swarali" element={<DoctorProfile />} />
          <Route path="/doctor/dr-dhanashree" element={<DoctorProfileDhanashree />} />
          <Route path="/doctor/dr-rohini" element={<DoctorProfileRohini />} />
          <Route path="/doctor/dr-akash" element={<DoctorProfileAkash />} />
          <Route path="/doctor/dr-somnath" element={<DoctorProfileSomnath />} />
          <Route path="/doctor/dr-azhar" element={<DoctorProfileAzhar />} />
          <Route path="/doctor/dr-pranil" element={<DoctorProfilePranil />} />
          <Route path="/doctor/dr-shrenik" element={<DoctorProfileShrenik />} />
          <Route path="/doctor/dr-nitin" element={<DoctorProfileNitin />} />
          <Route path="/doctor/dr-bhushan" element={<DoctorProfileBhushan />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
