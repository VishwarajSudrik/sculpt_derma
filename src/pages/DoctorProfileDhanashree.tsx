import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Star, Award, Facebook, Twitter, Linkedin } from 'lucide-react'

const DoctorProfileDhanashree = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                  ← Back to Our Team
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Dr. Dhanashree
              </h1>
              <div className="text-xl text-primary-600 font-semibold mb-4">
                Permanent Make Up
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Phone: +91 8983626437</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Email: dr.dhanashree@sculptderma.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                  <Facebook className="w-5 h-5 text-primary-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                  <Twitter className="w-5 h-5 text-primary-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary-600" />
                </a>
              </div>
              <Link to="/appointment" className="btn-primary">
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">DD</span>
                    </div>
                    <p className="text-gray-600 font-medium">Dr. Dhanashree</p>
                    <p className="text-primary-600 text-sm">Permanent Make Up Specialist</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-200 rounded-full opacity-40 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Book a Consultation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Family Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your family name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Short Biography */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Short Biography
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Dr. Dhanashree is a renowned specialist in permanent makeup procedures, bringing years of expertise and artistic precision to every treatment. Her passion for enhancing natural beauty through advanced permanent makeup techniques has made her a trusted name in the field of aesthetic medicine.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a keen eye for detail and a deep understanding of facial aesthetics, Dr. Dhanashree specializes in creating natural-looking permanent makeup solutions that enhance her clients' features while maintaining their unique beauty. Her approach combines medical expertise with artistic vision, ensuring results that are both beautiful and long-lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Education & Experience
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">MBBS, MD (Dermatology)</h4>
                    <p className="text-gray-600">Advanced medical degree with specialization in dermatology and aesthetic procedures</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Board certification</h4>
                    <p className="text-gray-600">Certified Permanent Makeup Specialist</p>
                  </div>
                </div>
              </div>
              
              {/* Expertise */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-primary-600" />
                  Field of Expertise
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Permanent Makeup Procedures</h4>
                    <p className="text-gray-600">Expert in microblading, lip blushing, eyeliner tattooing, and other permanent makeup techniques</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Years of Practice</h4>
                    <p className="text-gray-600">10+ years of experience in permanent makeup and aesthetic procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Working Shifts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { day: "Monday", time: "10:00-18:00", available: true },
                { day: "Tuesday", time: "10:00-18:00", available: true },
                { day: "Wednesday", time: "10:00-18:00", available: true },
                { day: "Thursday", time: "10:00-18:00", available: true },
                { day: "Friday", time: "10:00-18:00", available: true },
                { day: "Saturday", time: "10:00-16:00", available: true }
              ].map((schedule, index) => (
                <div key={index} className={`rounded-xl p-6 ${schedule.available ? 'bg-white border border-gray-200' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{schedule.day}</h4>
                    {schedule.available ? (
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    ) : (
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <p className={`text-lg ${schedule.available ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                    {schedule.time}
                  </p>
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
            Ready to Consult with Dr. Dhanashree?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover the art of permanent makeup with our expert specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment Now
            </Link>
            <a href="tel:+918983626437" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4 mr-2 inline" />
              Call: +91 8983626437
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfileDhanashree
