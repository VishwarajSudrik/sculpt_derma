import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award, Facebook, Twitter, Linkedin } from 'lucide-react'

const DoctorProfileShrenik = () => {
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
                Dr. Shrenik Oswal
              </h1>
              <div className="text-xl text-primary-600 font-semibold mb-4">
                Cosmetic Dentistry
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
                      <span className="text-white text-4xl font-bold">SO</span>
                    </div>
                    <p className="text-gray-600 font-medium">Dr. Shrenik Oswal</p>
                    <p className="text-primary-600 text-sm">Cosmetic Dentistry Specialist</p>
                  </div>
                </div>
              </div>
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
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Family Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your family name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                      <option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                      <option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>August</option><option>September</option><option>October</option><option>November</option><option>December</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-4 rounded-lg font-semibold">Book Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Short Biography */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">Short Biography</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Dr. Shrenik Oswal is a skilled cosmetic dentist specializing in restorative and aesthetic dental procedures. With a keen eye for detail and a commitment to excellence, he helps patients achieve their dream smiles through advanced dental techniques and personalized care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His approach combines modern dental technology with traditional craftsmanship to deliver natural-looking results that enhance both function and aesthetics. Dr. Oswal believes in creating lasting relationships with his patients based on trust, transparency, and exceptional dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Education & Experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary-600" />Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">BDS, MDS (Prosthodontics)</h4>
                    <p className="text-gray-600">Advanced dental education with specialization in prosthodontics and cosmetic procedures</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Board certification</h4>
                    <p className="text-gray-600">Certified Prosthodontist & Cosmetic Dentist</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-primary-600" />Field of Expertise
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Restorative & Cosmetic Dentistry</h4>
                    <p className="text-gray-600">Expert in smile correction, dental restorations, veneers, crowns, and comprehensive cosmetic procedures</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Years of Practice</h4>
                    <p className="text-gray-600">10 years of experience in cosmetic and restorative dentistry</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Working Shifts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { day: "Monday", time: "09:00-17:00", available: true },
                { day: "Tuesday", time: "09:00-17:00", available: true },
                { day: "Wednesday", time: "09:00-17:00", available: true },
                { day: "Thursday", time: "09:00-17:00", available: true },
                { day: "Friday", time: "09:00-17:00", available: true },
                { day: "Saturday", time: "09:00-14:00", available: true }
              ].map((schedule, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{schedule.day}</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-lg text-primary-600 font-medium">{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Transform Your Smile with Dr. Shrenik Oswal?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Schedule your consultation today and experience expert cosmetic and restorative dentistry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold">Book Appointment Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfileShrenik
