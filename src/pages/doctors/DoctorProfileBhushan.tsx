import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Star, Award, Facebook, Twitter, Linkedin } from 'lucide-react'

const DoctorProfileBhushan = () => {
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
                Dr. Bhushan Darkase
              </h1>
              <div className="text-xl text-primary-600 font-semibold mb-4">
                Dermatology
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Phone: +(012) 8743-954</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Office: +(012) 3456-789</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-primary-600" />
                  <span>Email: example@ex.com</span>
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
                      <span className="text-white text-4xl font-bold">BD</span>
                    </div>
                    <p className="text-gray-600 font-medium">Dr. Bhushan Darkase</p>
                    <p className="text-primary-600 text-sm">Dermatology Specialist</p>
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
              <p className="text-gray-600 leading-relaxed mb-6">
                I enjoy getting to know my patients and building meaningful relationships. I understand that each person is unique and that they have diverse cultural backgrounds, so I strive to actively listen and empower them to be an advocate for the health and wellness goals that are important to them. I'm dedicated to providing compassionate and individualized care by providing patient education and practicing evidence-based medicine.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm passionate about practicing preventive medicine and helping my patients manage acute and chronic health conditions, mental health. I find joy by doing almost any outdoor activity, including hiking, running, and exploring with our furbabies. I enjoy spending time with family and friends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I also strive to live mindfully and intentionally.
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
                    <h4 className="font-semibold text-gray-900 mb-2">M.D. from Sorbonne University, Paris</h4>
                    <p className="text-gray-600">Prestigious medical education from renowned European institution</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Board certification</h4>
                    <p className="text-gray-600">European Board of Plastic, Reconstructive and Aesthetic Surgery (EBOPRAS)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-primary-600" />Field of Expertise
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Dermal Fillers & Lip Augmentation</h4>
                    <p className="text-gray-600">Expert in advanced dermatological procedures and aesthetic treatments</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Years of Practice</h4>
                    <p className="text-gray-600">10 years of experience in dermatology</p>
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
                { day: "Monday", time: "14:00-18:00", available: true },
                { day: "Tuesday", time: "-", available: false },
                { day: "Wednesday", time: "14:00-18:00", available: true },
                { day: "Thursday", time: "-", available: false },
                { day: "Friday", time: "14:00-18:00", available: true },
                { day: "Saturday", time: "-", available: false }
              ].map((schedule, index) => (
                <div key={index} className={`rounded-xl p-6 ${schedule.available ? 'bg-white border border-gray-200' : 'bg-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{schedule.day}</h4>
                    {schedule.available ? <div className="w-3 h-3 bg-green-500 rounded-full"></div> : <div className="w-3 h-3 bg-gray-400 rounded-full"></div>}
                  </div>
                  <p className={`text-lg ${schedule.available ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Consult with Dr. Bhushan Darkase?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Schedule your consultation today and experience expert dermatological care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold">Book Appointment Now</Link>
            <a href="tel:+0128743954" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold">Call: +(012) 8743-954</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfileBhushan
