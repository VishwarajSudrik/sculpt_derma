import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import DoctorProfile from './pages/DoctorProfile'
import DoctorProfileDhanashree from './pages/DoctorProfileDhanashree'
import DoctorProfileRohini from './pages/DoctorProfileRohini'
import DoctorProfileAkash from './pages/DoctorProfileAkash'
import DoctorProfileSomnath from './pages/DoctorProfileSomnath'
import DoctorProfileAzhar from './pages/DoctorProfileAzhar'
import DoctorProfilePranil from './pages/DoctorProfilePranil'
import DoctorProfileShrenik from './pages/DoctorProfileShrenik'
import DoctorProfileNitin from './pages/DoctorProfileNitin'
import DoctorProfileBhushan from './pages/DoctorProfileBhushan'

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
