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
      <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Contact
              <span className="text-gradient"> SculptDerma</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our expert team for consultations, appointments, or any questions about our aesthetic services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-primary">
                <Calendar className="w-4 h-4 mr-2 inline" />
                Book Appointment
              </Link>
              <a href="tel:+918983626437" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Now
              </a>
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
