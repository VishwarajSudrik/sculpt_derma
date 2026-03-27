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
      image: "/src/assets/images/team/Dr. Dhanashree.jpg",
      achievements: ["Permanent Makeup Specialist", "Aesthetic Expert", "Patient Care Excellence"]
    },
    {
      name: "Dr. Rohini",
      specialty: "Nutritionist",
      experience: "8+ Years",
      education: "MBBS, MSc (Nutrition)",
      description: "Specialist in clinical nutrition and dietary counseling for optimal health.",
      image: "/src/assets/images/team/Dr. Rohini.jpg",
      achievements: ["Clinical Nutrition", "Diet Planning", "Health Optimization"]
    },
    {
      name: "Dr. Pranil",
      specialty: "Cosmetic Dentistry",
      experience: "12+ Years",
      education: "BDS, MDS (Cosmetic Dentistry)",
      description: "Expert in cosmetic dental procedures and smile makeovers.",
      image: null, // No image available
      achievements: ["Smile Design", "Cosmetic Dentistry", "Dental Aesthetics"]
    },
    {
      name: "Dr. Shrenik Oswal",
      specialty: "Cosmetic Dentistry",
      experience: "10+ Years",
      education: "BDS, MDS (Prosthodontics)",
      description: "Specialist in cosmetic and restorative dental procedures.",
      image: "/src/assets/images/team/Dr. Shrenik Oswal.jpg",
      achievements: ["Restorative Dentistry", "Cosmetic Procedures", "Smile Correction"]
    },
    {
      name: "Dr. Nitin Maske",
      specialty: "Dermatology",
      experience: "15+ Years",
      education: "MBBS, MD (Dermatology)",
      description: "Expert in medical and cosmetic dermatology treatments.",
      image: "/src/assets/images/team/Dr. Nitin Maske.jpg",
      achievements: ["Medical Dermatology", "Cosmetic Procedures", "Skin Health"]
    },
    {
      name: "Dr. Bhushan Darkase",
      specialty: "Dermatology",
      experience: "12+ Years",
      education: "MBBS, MD (Dermatology)",
      description: "Specialist in advanced dermatological treatments and skin care.",
      image: "/src/assets/images/team/Dr. Bhushan Darkase.jpg",
      achievements: ["Advanced Dermatology", "Skin Treatments", "Cosmetic Procedures"]
    },
    {
      name: "Dr. Swarali",
      specialty: "Cosmetology, Trichology",
      experience: "8+ Years",
      education: "MBBS, Fellowship in Cosmetology",
      description: "Expert in cosmetology procedures and hair/scalp treatments.",
      image: "/src/assets/images/team/Dr. Swarali.jpg",
      achievements: ["Hair Specialist", "Cosmetology Expert", "Trichology"]
    },
    {
      name: "Dr. Azhar",
      specialty: "Bariatric Surgery",
      experience: "15+ Years",
      education: "MBBS, MS (Surgery), MCh (Bariatric Surgery)",
      description: "Expert in weight loss surgery and metabolic procedures.",
      image: "/src/assets/images/team/Dr. Azhar.jpg",
      achievements: ["Bariatric Surgery", "Weight Management", "Metabolic Health"]
    },
    {
      name: "Dr. Somnath Karad",
      specialty: "Cosmetic Gynaecology, Gender Affirmation Surgery, Plastic & Aesthetic Surgery",
      experience: "18+ Years",
      education: "MBBS, MS (Obstetrics & Gynaecology), Fellowship in Cosmetic Gynaecology",
      description: "Expert in cosmetic gynecology procedures and gender affirmation surgeries.",
      image: "/src/assets/images/team/Dr. Somnath Karad.jpg",
      achievements: ["Cosmetic Gynaecology", "Gender Affirmation", "Aesthetic Surgery"]
    },
    {
      name: "Dr. Akash Tarkase",
      specialty: "Advanced Dermal Fillers, Cosmetic Gynaecology, Gender Affirmation Surgery, Non-Surgical Facelift, Plastic & Aesthetic Surgery",
      experience: "15+ Years",
      education: "MBBS, MS (Surgery), MCh (Plastic Surgery)",
      description: "Renowned plastic surgeon with expertise in cosmetic procedures, dermal fillers, and gender affirmation surgeries.",
      image: "/src/assets/images/team/Dr. Akash Tarkase.jpg",
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
      image: "/src/assets/images/general/83.jpg"
    },
    {
      title: "Sterile Environment",
      description: "Strict infection control protocols and hospital-grade sterilization.",
      image: "/src/assets/images/general/84.jpg"
    },
    {
      title: "Comfortable Ambience",
      description: "Luxurious, relaxing environment designed for your comfort.",
      image: "/src/assets/images/general/85.jpg"
    },
    {
      title: "Privacy Assured",
      description: "Private consultation rooms and discreet service.",
      image: "/src/assets/images/general/86.jpg"
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
      <section className="relative bg-gradient-to-br from-primary-50 via-accent-50 to-white section-padding overflow-hidden">
        {/* Trust/Company Theme Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full blur-2xl"></div>
        </div>
        
        {/* Trust/Quality Icons */}
        <div className="absolute top-20 left-10 text-primary-200 opacity-20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-10-4z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 text-accent-200 opacity-20">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 text-primary-200 opacity-20">
          <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full mb-6">
                <span className="text-accent-700 text-sm font-medium">🏥 Since 2010</span>
              </div>
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
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
                <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-primary-100">
                  <div className="text-2xl font-bold text-primary-600">13+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-accent-100">
                  <div className="text-2xl font-bold text-accent-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-primary-100">
                  <div className="text-2xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur rounded-xl border border-accent-100">
                  <div className="text-2xl font-bold text-accent-600">3</div>
                  <div className="text-sm text-gray-600">Clinic Locations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48 relative group">
                    <img 
                      src="https://images.pexels.com/photos/5619453/pexels-photo-5619453.jpeg"
                      alt="Clinic Interior"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EClinic Interior%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">Clinic Interior</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64 relative group">
                    <img 
                      src="https://images.pexels.com/photos/7108114/pexels-photo-7108114.jpeg"
                      alt="Treatment Room"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3ETreatment Room%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">Treatment Room</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden h-64 relative group">
                    <img 
                      src="https://images.pexels.com/photos/5042612/pexels-photo-5042612.jpeg"
                      alt="Medical Equipment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EMedical Equipment%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">Medical Equipment</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 relative group">
                    <img 
                      src="https://images.pexels.com/photos/3985301/pexels-photo-3985301.jpeg"
                      alt="Consultation Room"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EConsultation Room%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">Consultation Room</p>
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
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center ${doctor.image ? 'hidden' : ''}`}>
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary-600" />
                      </div>
                      <p className="text-gray-600 font-medium">{doctor.name}</p>
                    </div>
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
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kharadi Clinic</h3>
                <div className="flex items-start text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wakad Clinic</h3>
                <div className="flex items-start text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Western High St, opposite to Phoenix mall, Shankar Kalat Nagar, Wakad</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Baner Clinic</h3>
                <div className="flex items-start text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>Shivam Regency, Baner Rd, above Jyoti Appliances, Baner</span>
                </div>
              </div>
            </div>
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
