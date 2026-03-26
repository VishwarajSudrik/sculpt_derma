import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react'

const Footer = () => {
  const clinics = [
    {
      name: "Sculpt Derma, Kharadi",
      address: "First Floor, UG 06, Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
      hours: "Mon-Sun: 10 am – 9 pm"
    },
    {
      name: "Sculpt Derma, Wakad", 
      address: "Shop No.1, Western High St, opposite to Phoenix mall, Shankar Kalat Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057",
      hours: "Mon-Sun: 10 am – 9 pm"
    },
    {
      name: "Sculpt Derma, Baner",
      address: "Unit 601, 6th floor, Shivam Regency, Baner Rd, above Jyoti Appliances, Baner Gaon, Baner, Pune, Maharashtra 411069",
      hours: "Mon-Sun: 10 am – 9 pm"
    }
  ]

  const services = [
    "Breast Implants",
    "Mommy Makeover", 
    "Rhinoplasty",
    "Breast Reduction",
    "Liposuction",
    "Gynecomastia",
    "Tummy Tuck",
    "Non-Surgical Treatments",
    "Botox & Fillers",
    "Neck Lift",
    "Labiaplasty",
    "Acne Scars",
    "Cheek Augmentation",
    "Freckles Removal",
    "Melasma Treatment"
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Appointment", href: "/appointment" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/src/assets/images/general/Sculpt-Logo-2.png" 
                alt="Sculpt Derma"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
            </Link>
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4 hidden" style={{display: 'none'}}>
              SculptDerma
            </h3>
            <p className="text-gray-300 mb-6">
              Luxury medical aesthetic destination, redefining skin, hair, face, and body wellness with precision, care, and an artistic eye.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+918983626437"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-sm">+91 8983626437</span>
              </a>
              <a 
                href="mailto:sculptdermaofficial@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-sm">sculptdermaofficial@gmail.com</span>
              </a>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-sm">Mon-Sun: 10 am – 9 pm</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/sculptdermaofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Clinics */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Our Clinics</h4>
            <div className="space-y-4">
              {clinics.map((clinic, index) => (
                <div key={index} className="text-sm">
                  <h5 className="font-medium text-white mb-1">{clinic.name}</h5>
                  <p className="text-gray-400 mb-2 leading-relaxed">{clinic.address}</p>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-3 h-3 mr-2 text-primary-400" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Our Services</h4>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-primary-400">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe for special offers and updates
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-primary-400 text-sm"
                />
                <button type="submit" className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SculptDerma. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
