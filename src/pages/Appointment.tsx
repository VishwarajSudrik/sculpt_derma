import { useState } from 'react'
import { Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight, Calendar, User, Stethoscope } from 'lucide-react'

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    clinic: '',
    preferredDate: '',
    preferredTime: '',
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
    console.log('Appointment form submitted:', formData)
  }

  const services = [
    "Surgical Procedures",
    "Breast Implants",
    "Mommy Makeover",
    "Rhinoplasty",
    "Liposuction",
    "Tummy Tuck",
    "Gynecomastia",
    "Breast Reduction",
    "Neck Lift",
    "Labiaplasty",
    "Arm Lift",
    "Vaginoplasty",
    "Vaginal Reconstruction",
    "Cheek Augmentation",
    "Non-Surgical Treatments",
    "Botox",
    "Dermal Fillers",
    "Lip Fillers",
    "Laser Hair Removal",
    "Acne Scars Treatment",
    "Melasma Treatment",
    "Freckles Treatment",
    "Chemical Peels",
    "Non-Surgical Facelift",
    "Other"
  ]

  const clinics = [
    {
      name: "Sculpt Derma, Kharadi",
      address: "Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi",
      image: "/src/assets/images/general/80.jpg"
    },
    {
      name: "Sculpt Derma, Wakad",
      address: "Western High St, opposite to Phoenix mall, Shankar Kalat Nagar, Wakad",
      image: "/src/assets/images/general/81.jpg"
    },
    {
      name: "Sculpt Derma, Baner",
      address: "Shivam Regency, Baner Rd, above Jyoti Appliances, Baner",
      image: "/src/assets/images/general/82.jpg"
    }
  ]

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
  ]

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Free initial consultation with our expert team" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Personalized treatment plan discussion" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No obligation - decide at your own pace" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Confidential and professional environment" }
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
              Appointment Request
              <span className="text-gradient"> Received!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing SculptDerma! Our team will contact you within 24 hours to confirm your appointment and answer any questions you may have.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-semibold">1</span>
                  </div>
                  <p className="text-gray-600">Our team will review your appointment request</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-semibold">2</span>
                  </div>
                  <p className="text-gray-600">You'll receive a confirmation call within 24 hours</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-semibold">3</span>
                  </div>
                  <p className="text-gray-600">Consultation will be scheduled at your preferred time</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918983626437" className="btn-primary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Us Now
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Book Another Appointment
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
              Book Your
              <span className="text-gradient"> Appointment</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards your aesthetic transformation. Schedule a consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918983626437" className="btn-primary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Quick Booking: +91 8983626437
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary-600" />
                    Call Us
                  </h3>
                  <p className="text-gray-600 mb-3">For immediate assistance and same-day appointments</p>
                  <a href="tel:+918983626437" className="text-primary-600 font-semibold text-lg">
                    +91 8983626437
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary-600" />
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-3">Send your queries anytime</p>
                  <a href="mailto:sculptdermaofficial@gmail.com" className="text-primary-600 font-semibold">
                    sculptdermaofficial@gmail.com
                  </a>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary-600" />
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Mon-Sun: 10:00 AM - 9:00 PM
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Open 7 days a week for your convenience
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Book With Us?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-3 mt-0.5">{benefit.icon}</span>
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Book Your Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Service Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 appearance-none cursor-pointer"
                          >
                            <option value="" className="text-gray-500">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="text-gray-900">{service}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Clinic *</label>
                          <select
                            name="clinic"
                            value={formData.clinic}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 appearance-none cursor-pointer"
                          >
                            <option value="" className="text-gray-500">Select a clinic</option>
                            {clinics.map((clinic) => (
                              <option key={clinic.name} value={clinic.name} className="text-gray-900">{clinic.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Schedule */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Preferred Schedule
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 appearance-none cursor-pointer"
                          >
                            <option value="" className="text-gray-500">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time} className="text-gray-900">{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Tell us about your aesthetic goals or any specific concerns..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full text-lg">
                      Book Appointment
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations Info */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Clinic
              <span className="text-gradient"> Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient location for your consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinics.map((clinic, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{clinic.name}</h3>
                  <div className="flex items-start text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center mt-3 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0" />
                    <span>Mon-Sun: 10 am – 9 pm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment
