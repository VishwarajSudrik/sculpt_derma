import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    console.log('Contact form submitted:', formData)
  }

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling us at +91 8983626437, filling out the contact form, or using our online booking system."
    },
    {
      question: "Do I need a consultation before treatment?",
      answer: "Yes, a consultation is required for all treatments to assess your suitability and discuss your aesthetic goals."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI, and offer EMI options for major procedures."
    },
    {
      question: "Are the treatments safe?",
      answer: "Absolutely! All our treatments are performed by qualified medical professionals using FDA-approved equipment and techniques."
    },
    {
      question: "How long is the recovery period?",
      answer: "Recovery time varies by procedure. Non-surgical treatments have minimal to no downtime, while surgical procedures may require 1-4 weeks."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer EMI options for major procedures to make treatments more accessible."
    }
  ]

  const services = [
    "Surgical Procedures",
    "Non-Surgical Treatments",
    "Breast Implants",
    "Mommy Makeover",
    "Rhinoplasty",
    "Liposuction",
    "Botox & Fillers",
    "Laser Hair Removal",
    "Acne Treatment",
    "Other"
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Message Sent
              <span className="text-gradient"> Successfully!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting SculptDerma! Our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918983626437" className="btn-primary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Us Now
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-50 via-primary-50 to-white section-padding overflow-hidden">
        {/* Communication Theme Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-32 h-32 bg-primary-300 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-accent-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-primary-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-accent-300 rounded-full blur-2xl"></div>
        </div>
        
        {/* Communication Icons */}
        <div className="absolute top-20 left-10 text-primary-200 opacity-20">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div className="absolute top-32 right-16 text-accent-200 opacity-20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 text-primary-200 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-10 text-accent-200 opacity-20">
          <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.6 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.6-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full mb-6">
              <span className="text-accent-700 text-sm font-medium">📞 Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Contact
              <span className="text-gradient"> SculptDerma</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get in touch with our expert team for consultations, appointments, or any questions about our aesthetic services. We're here to help you on your beauty journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/appointment" className="btn-primary">
                <Calendar className="w-4 h-4 mr-2 inline" />
                Book Appointment
              </Link>
              <a href="tel:+918983626437" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Now: +91 8983626437
              </a>
            </div>
            
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl border border-primary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">Phone Support</div>
                <div className="text-sm text-gray-600">24/7 Available</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl border border-accent-100">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-accent-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">Email Response</div>
                <div className="text-sm text-gray-600">Within 24 hours</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-2xl border border-primary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">3 Locations</div>
                <div className="text-sm text-gray-600">Pune, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us a
                <span className="text-gradient"> Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-500">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="text-gray-900">{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your aesthetic goals or questions..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2 inline" />
                </button>
              </form>
            </div>
            
            {/* Quick Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Get in
                <span className="text-gradient"> Touch</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-primary-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 8983626437</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Call us for immediate assistance and appointment booking.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-primary-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">sculptdermaofficial@gmail.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Send us your queries and we'll respond within 24 hours.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Working Hours</h3>
                      <p className="text-gray-600">Mon-Sun: 10 am – 9 pm</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">We're open 7 days a week for your convenience.</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/sculptdermaofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent queries or same-day appointments, call us directly.
                </p>
                <a href="tel:+918983626437" className="btn-primary w-full text-center block">
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Visit Our
              <span className="text-gradient"> Clinics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three convenient locations across Pune to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2zMThCsDUwNC4x!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sculpt Derma Kharadi Location"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sculpt Derma, Kharadi</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-3 text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">First Floor, UG 06, Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi, Pune, Maharashtra 411014</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">+91 8983626437</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">sculptdermaofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">Mon-Sun: 10 am – 9 pm</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Sculpt+Derma+Kharadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block"
                  >
                    <MapPin className="w-4 h-4 mr-2 inline" />
                    Get Directions
                  </a>
                  <Link to="/appointment" className="btn-primary w-full text-center block">
                    Book at This Clinic
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.7771!3d18.5994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2zMThCsDU5OS40!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sculpt Derma Wakad Location"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sculpt Derma, Wakad</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-3 text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Shop No.1, Western High St, opposite to Phoenix mall, Shankar Kalat Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">+91 8983626437</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">sculptdermaofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">Mon-Sun: 10 am – 9 pm</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Sculpt+Derma+Wakad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block"
                  >
                    <MapPin className="w-4 h-4 mr-2 inline" />
                    Get Directions
                  </a>
                  <Link to="/appointment" className="btn-primary w-full text-center block">
                    Book at This Clinic
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.7898!3d18.5642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2zMThCsDU2NDIuM!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sculpt Derma Baner Location"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sculpt Derma, Baner</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-3 text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Unit 601, 6th floor, Shivam Regency, Baner Rd, above Jyoti Appliances, Baner Gaon, Baner, Pune, Maharashtra 411069</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">+91 8983626437</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">sculptdermaofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">Mon-Sun: 10 am – 9 pm</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Sculpt+Derma+Baner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block"
                  >
                    <MapPin className="w-4 h-4 mr-2 inline" />
                    Get Directions
                  </a>
                  <Link to="/appointment" className="btn-primary w-full text-center block">
                    Book at This Clinic
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked
              <span className="text-gradient"> Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and appointments
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Free Consultation
            </Link>
            <a href="tel:+918983626437" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Call: +91 8983626437
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
