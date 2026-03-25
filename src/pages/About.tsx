import { Link } from 'react-router-dom'
import { ArrowRight, Star, Award, Users, Heart, Calendar, Phone, CheckCircle, MapPin } from 'lucide-react'

const About = () => {
  const doctors = [
    {
      name: "Dr. Dhanashree",
      specialty: "Permanent Make Up",
      experience: "10+ Years",
      education: "MBBS, MD (Dermatology)",
      description: "Expert in permanent makeup procedures and aesthetic enhancements.",
      image: "/src/assets/img/70.jpg",
      achievements: ["Permanent Makeup Specialist", "Aesthetic Expert", "Patient Care Excellence"]
    },
    {
      name: "Dr. Rohini",
      specialty: "Nutritionist",
      experience: "8+ Years",
      education: "MBBS, MSc (Nutrition)",
      description: "Specialist in clinical nutrition and dietary counseling for optimal health.",
      image: "/src/assets/img/71.jpg",
      achievements: ["Clinical Nutrition", "Diet Planning", "Health Optimization"]
    },
    {
      name: "Dr. Pranil",
      specialty: "Cosmetic Dentistry",
      experience: "12+ Years",
      education: "BDS, MDS (Cosmetic Dentistry)",
      description: "Expert in cosmetic dental procedures and smile makeovers.",
      image: "/src/assets/img/72.jpg",
      achievements: ["Smile Design", "Cosmetic Dentistry", "Dental Aesthetics"]
    },
    {
      name: "Dr. Shrenik Oswal",
      specialty: "Cosmetic Dentistry",
      experience: "10+ Years",
      education: "BDS, MDS (Prosthodontics)",
      description: "Specialist in cosmetic and restorative dental procedures.",
      image: "/src/assets/img/73.jpg",
      achievements: ["Restorative Dentistry", "Cosmetic Procedures", "Smile Correction"]
    },
    {
      name: "Dr. Nitin Maske",
      specialty: "Dermatology",
      experience: "15+ Years",
      education: "MBBS, MD (Dermatology)",
      description: "Expert in medical and cosmetic dermatology treatments.",
      image: "/src/assets/img/74.jpg",
      achievements: ["Medical Dermatology", "Cosmetic Procedures", "Skin Health"]
    },
    {
      name: "Dr. Bhushan Darkase",
      specialty: "Dermatology",
      experience: "12+ Years",
      education: "MBBS, MD (Dermatology)",
      description: "Specialist in advanced dermatological treatments and skin care.",
      image: "/src/assets/img/75.jpg",
      achievements: ["Advanced Dermatology", "Skin Treatments", "Cosmetic Procedures"]
    },
    {
      name: "Dr. Swarali",
      specialty: "Cosmetology, Trichology",
      experience: "8+ Years",
      education: "MBBS, Fellowship in Cosmetology",
      description: "Expert in cosmetology procedures and hair/scalp treatments.",
      image: "/src/assets/img/76.jpg",
      achievements: ["Hair Specialist", "Cosmetology Expert", "Trichology"]
    },
    {
      name: "Dr. Azhar",
      specialty: "Bariatric Surgery",
      experience: "15+ Years",
      education: "MBBS, MS (Surgery), MCh (Bariatric Surgery)",
      description: "Expert in weight loss surgery and metabolic procedures.",
      image: "/src/assets/img/77.jpg",
      achievements: ["Bariatric Surgery", "Weight Management", "Metabolic Health"]
    },
    {
      name: "Dr. Somnath Karad",
      specialty: "Cosmetic Gynaecology, Gender Affirmation Surgery, Plastic & Aesthetic Surgery",
      experience: "18+ Years",
      education: "MBBS, MS (Obstetrics & Gynaecology), Fellowship in Cosmetic Gynaecology",
      description: "Expert in cosmetic gynecology procedures and gender affirmation surgeries.",
      image: "/src/assets/img/78.jpg",
      achievements: ["Cosmetic Gynaecology", "Gender Affirmation", "Aesthetic Surgery"]
    },
    {
      name: "Dr. Akash Tarkase",
      specialty: "Advanced Dermal Fillers, Cosmetic Gynaecology, Gender Affirmation Surgery, Non-Surgical Facelift, Plastic & Aesthetic Surgery",
      experience: "15+ Years",
      education: "MBBS, MS (Surgery), MCh (Plastic Surgery)",
      description: "Renowned plastic surgeon with expertise in cosmetic procedures, dermal fillers, and gender affirmation surgeries.",
      image: "/src/assets/img/79.jpg",
      achievements: ["5000+ Surgeries", "Advanced Fillers", "Gender Affirmation Expert"]
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9/5",
      label: "Rating"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "98%",
      label: "Satisfaction Rate"
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centric Care",
      description: "Your safety, comfort, and satisfaction are our top priorities in every treatment we provide."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of medical care and aesthetic expertise in all our services."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our specialists are leaders in their fields with years of experience and proven results."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Artistic Approach",
      description: "We combine medical precision with artistic vision to deliver natural, beautiful results."
    }
  ]

  const facilities = [
    {
      title: "Advanced Technology",
      description: "FDA-approved equipment and latest techniques for optimal results.",
      image: "/src/assets/img/83.jpg"
    },
    {
      title: "Sterile Environment",
      description: "Strict infection control protocols and hospital-grade sterilization.",
      image: "/src/assets/img/84.jpg"
    },
    {
      title: "Comfortable Ambience",
      description: "Luxurious, relaxing environment designed for your comfort.",
      image: "/src/assets/img/85.jpg"
    },
    {
      title: "Privacy Assured",
      description: "Private consultation rooms and discreet service.",
      image: "/src/assets/img/86.jpg"
    }
  ]

  const certifications = [
    "ISO 9001:2015 Certified",
    "NABH Accredited",
    "FDA Approved Procedures",
    "International Standards"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                About
                <span className="text-gradient"> SculptDerma</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SculptDerma is a luxury medical aesthetic destination, redefining skin, hair, face, and body wellness with precision, care, and an artistic eye. Founded by leading Plastic & Aesthetic Surgeons, Dermatologists and Aesthetic experts in Pune.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/appointment" className="btn-primary">
                  <Calendar className="w-4 h-4 mr-2 inline" />
                  Book Consultation
                </Link>
                <Link to="/services" className="btn-secondary">
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gray-100 p-8 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Clinic Interior</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gray-100 p-8 flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-6 h-6 text-accent-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Treatment Room</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl bg-gray-100 p-8 flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Medical Equipment</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gray-100 p-8 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-accent-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Consultation Room</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story of
                <span className="text-gradient"> Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  At SculptDerma, we merge science with soul — offering treatments that are not just seen, but felt. Our journey began with a simple vision: to create a space where medical expertise meets artistic precision, delivering results that enhance natural beauty.
                </p>
                <p className="leading-relaxed">
                  Here, a team of top-tier specialists work together to address your aesthetic concerns from every angle, ensuring results that are harmonious and tailored to you. We believe that everyone deserves to feel confident and beautiful in their own skin.
                </p>
                <p className="leading-relaxed">
                  Our state-of-the-art facilities across Pune are designed to provide you with the highest standards of care in a comfortable, luxurious environment. From surgical transformations to subtle enhancements, we're committed to helping you achieve your aesthetic goals safely and effectively.
                </p>
              </div>
              
              {/* Certifications */}
              <div className="mt-8 flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span key={index} className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-primary-600 mb-3 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Core
              <span className="text-gradient"> Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at SculptDerma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our
              <span className="text-gradient"> Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Led by renowned medical professionals dedicated to aesthetic excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary-600" />
                    </div>
                    <p className="text-gray-600 font-medium">{doctor.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <div className="text-primary-600 font-medium mb-3">{doctor.specialty}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{doctor.experience} Experience</span>
                    <span>•</span>
                    <span>{doctor.education}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                  {(doctor.name === "Dr. Swarali" || doctor.name === "Dr. Dhanashree" || doctor.name === "Dr. Rohini" || doctor.name === "Dr. Akash Tarkase" || doctor.name === "Dr. Somnath Karad" || doctor.name === "Dr. Azhar" || doctor.name === "Dr. Pranil" || doctor.name === "Dr. Shrenik Oswal" || doctor.name === "Dr. Nitin Maske" || doctor.name === "Dr. Bhushan Darkase") && (
                    <Link 
                      to={
                        doctor.name === "Dr. Swarali" ? "/doctor/dr-swarali" : 
                        doctor.name === "Dr. Dhanashree" ? "/doctor/dr-dhanashree" : 
                        doctor.name === "Dr. Rohini" ? "/doctor/dr-rohini" :
                        doctor.name === "Dr. Akash Tarkase" ? "/doctor/dr-akash" :
                        doctor.name === "Dr. Somnath Karad" ? "/doctor/dr-somnath" :
                        doctor.name === "Dr. Azhar" ? "/doctor/dr-azhar" :
                        doctor.name === "Dr. Pranil" ? "/doctor/dr-pranil" :
                        doctor.name === "Dr. Shrenik Oswal" ? "/doctor/dr-shrenik" :
                        doctor.name === "Dr. Nitin Maske" ? "/doctor/dr-nitin" :
                        "/doctor/dr-bhushan"
                      } 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center block"
                    >
                      View Full Profile
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              State-of-the-Art
              <span className="text-gradient"> Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern clinics equipped with the latest technology for your safety and comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary-600" />
                    </div>
                    <p className="text-gray-600 font-medium">{facility.title}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Clinic
              <span className="text-gradient"> Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three convenient locations across Pune to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Kharadi Clinic", address: "Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi", image: "/src/assets/img/87.jpg" },
              { name: "Wakad Clinic", address: "Western High St, opposite to Phoenix mall, Shankar Kalat Nagar, Wakad", image: "/src/assets/img/88.jpg" },
              { name: "Baner Clinic", address: "Shivam Regency, Baner Rd, above Jyoti Appliances, Baner", image: "/src/assets/img/80.jpg" }
            ].map((clinic, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary-600" />
                    </div>
                    <p className="text-gray-600 font-medium">{clinic.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{clinic.name}</h3>
                  <div className="flex items-start text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Experience the SculptDerma Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert team and begin your journey to enhanced beauty and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Consultation Now
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

export default About
