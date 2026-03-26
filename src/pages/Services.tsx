import { Link } from 'react-router-dom'
import { ArrowRight, Star, Phone, Calendar, CheckCircle, Clock } from 'lucide-react'

const Services = () => {
  const surgicalServices = [
    {
      name: "Breast Implants",
      description: "Our breast implant clinic provides expert, safe, and advanced procedures to enhance shape, size, and symmetry of your breasts. Designed to create natural-looking, beautifully contoured results.",
      price: "Rs. 1.4L",
      image: "/src/assets/images/general/Breast-Augmentation-with-Implant.jpg",
      detailImage: "/src/assets/images/general/43.jpg",
      duration: "2-3 hours",
      recovery: "1-2 weeks",
      features: ["FDA-approved implants", "Minimal scarring", "Natural-looking results", "Customized to body goals"]
    },
    {
      name: "Mommy Makeover",
      description: "Comprehensive package combining multiple procedures to restore your pre-pregnancy body shape and confidence.",
      price: "Starting from Rs. 2.2L",
      image: "/src/assets/images/general/Mommy-Makeover.jpg",
      detailImage: "/src/assets/images/general/44.jpg",
      duration: "4-6 hours",
      recovery: "2-4 weeks",
      features: ["Multiple procedures", "Full body transformation", "Customized approach", "Expert care"]
    },
    {
      name: "Rhinoplasty",
      description: "Reshape your nose with precision and artistry for harmonious facial proportions and improved breathing.",
      price: "Starting from Rs. 80K",
      image: "/src/assets/images/general/Rhinoplasty-1.jpg",
      detailImage: "/src/assets/images/general/45.jpg",
      duration: "2-3 hours",
      recovery: "1-2 weeks",
      features: ["Closed/open technique", "Breathing improvement", "Natural appearance", "Minimal downtime"]
    },
    {
      name: "Breast Reduction",
      description: "Reduce breast size and alleviate discomfort while achieving a more proportionate and lifted appearance.",
      price: "Rs. 80K",
      image: "/src/assets/images/general/Breast-Implant-Surgery.jpg",
      detailImage: "/src/assets/images/general/46.jpg",
      duration: "3-4 hours",
      recovery: "2-3 weeks",
      features: ["Symmetry improvement", "Relief from discomfort", "Natural contour", "Quick recovery"]
    },
    {
      name: "Liposuction",
      description: "Advanced body contouring techniques to remove stubborn fat deposits effectively and sculpt your body.",
      price: "Starting from Rs. 60K",
      image: "/src/assets/images/general/Liposuction-2-1.jpg",
      detailImage: "/src/assets/images/general/47.jpg",
      duration: "2-4 hours",
      recovery: "1-2 weeks",
      features: ["360-degree liposuction", "VASER technology", "Minimal invasion", "Quick recovery"]
    },
    {
      name: "Gynecomastia",
      description: "Male breast reduction surgery to restore chest confidence and masculinity with minimal visible scars.",
      price: "Starting from Rs. 70K",
      image: "/src/assets/images/general/Gynecomastia-Surgery-Pune.jpg",
      detailImage: "/src/assets/images/general/48.jpg",
      duration: "1-2 hours",
      recovery: "1 week",
      features: ["Minimal scarring", "Natural chest contour", "Quick recovery", "Confidence boost"]
    },
    {
      name: "Tummy Tuck (Abdominoplasty)",
      description: "Flatten and tighten your abdomen with our advanced abdominoplasty procedures and muscle repair.",
      price: "Starting from Rs. 80K",
      image: "/src/assets/images/general/Tummy-Tuck-Abdominoplasty.jpg",
      detailImage: "/src/assets/images/general/49.jpg",
      duration: "3-4 hours",
      recovery: "2-4 weeks",
      features: ["Muscle repair", "Skin tightening", "Belly button reconstruction", "Long-lasting results"]
    },
    {
      name: "Neck Lift",
      description: "Rejuvenate your neck and jawline with our advanced neck lift procedures for a youthful appearance.",
      price: "Starting from Rs. 90K",
      image: "/src/assets/images/general/50.jpg",
      detailImage: "/src/assets/images/general/50.jpg",
      duration: "2-3 hours",
      recovery: "1-2 weeks",
      features: ["Minimal scarring", "Natural jawline", "Quick recovery", "Long-lasting results"]
    },
    {
      name: "Labiaplasty",
      description: "Cosmetic surgical procedure to improve the appearance of the labia for enhanced comfort and confidence.",
      price: "Starting from Rs. 60K",
      image: "/src/assets/images/general/Labioplasty.jpg",
      detailImage: "/src/assets/images/general/51.jpg",
      duration: "1-2 hours",
      recovery: "1-2 weeks",
      features: ["Minimal discomfort", "Quick recovery", "Natural appearance", "Enhanced comfort"]
    },
    {
      name: "Cheek Augmentation",
      description: "Enhance facial contours and achieve more defined cheekbones with our advanced augmentation procedures.",
      price: "Starting from Rs. 50K",
      image: "/src/assets/images/general/52.jpg",
      detailImage: "/src/assets/images/general/52.jpg",
      duration: "1-2 hours",
      recovery: "1 week",
      features: ["Natural enhancement", "Quick procedure", "Minimal recovery", "Balanced appearance"]
    },
    {
      name: "Arm Lift",
      description: "Remove excess skin and fat from upper arms for a more toned and youthful appearance.",
      price: "Starting from Rs. 70K",
      image: "/src/assets/images/general/Arm-Lift.jpg",
      detailImage: "/src/assets/images/general/53.jpg",
      duration: "2-3 hours",
      recovery: "2-3 weeks",
      features: ["Minimal scarring", "Natural contour", "Quick recovery", "Toned appearance"]
    },
    {
      name: "Vaginoplasty",
      description: "Cosmetic vaginal tightening procedure to enhance both appearance and function.",
      price: "Starting from Rs. 60K",
      image: "/src/assets/images/general/Vaginoplasty.jpg",
      detailImage: "/src/assets/images/general/54.jpg",
      duration: "1-2 hours",
      recovery: "4-6 weeks",
      features: ["Enhanced function", "Natural appearance", "Quick recovery", "Improved confidence"]
    },
    {
      name: "Vaginal Reconstruction",
      description: "Comprehensive vaginal reconstruction procedures for both aesthetic and functional improvements.",
      price: "Starting from Rs. 80K",
      image: "/src/assets/images/general/Vaginal-Resconstruction.jpg",
      detailImage: "/src/assets/images/general/55.jpg",
      duration: "2-3 hours",
      recovery: "4-6 weeks",
      features: ["Functional improvement", "Natural appearance", "Customized approach", "Expert care"]
    }
  ]

  const nonSurgicalServices = [
    {
      name: "Dermal Fillers",
      description: "Restore volume and youthfulness with premium hyaluronic acid fillers for instant results.",
      price: "Starting from Rs. 15,000",
      duration: "6-12 months",
      image: "/src/assets/images/general/Dermal-Fillers.jpg",
      detailImage: "/src/assets/images/general/56.jpg",
      sessionTime: "30-45 mins",
      features: ["Instant results", "No downtime", "Natural look", "FDA-approved"]
    },
    {
      name: "Botox",
      description: "Smooth wrinkles and fine lines with our expert Botox treatments for natural rejuvenation.",
      price: "Starting from Rs. 8,000",
      duration: "4-6 months",
      image: "/src/assets/images/general/57.jpg",
      detailImage: "/src/assets/images/general/57.jpg",
      sessionTime: "15-30 mins",
      features: ["Quick procedure", "Minimal discomfort", "Natural expression", "Proven safety"]
    },
    {
      name: "Laser Hair Removal",
      description: "Permanent hair reduction using advanced laser technology for all skin types.",
      price: "Starting from Rs. 3,000/session",
      duration: "Permanent results",
      image: "/src/assets/images/general/58.jpg",
      detailImage: "/src/assets/images/general/58.jpg",
      sessionTime: "30-60 mins",
      features: ["All skin types", "Pain-free", "Quick sessions", "Lasting results"]
    },
    {
      name: "Acne Scars Treatment",
      description: "Advanced treatments to clear acne scars and achieve smooth, clear skin.",
      price: "Starting from Rs. 5,000",
      duration: "Multiple sessions",
      image: "/src/assets/images/general/59.jpg",
      detailImage: "/src/assets/images/general/59.jpg",
      sessionTime: "45-60 mins",
      features: ["Multiple technologies", "Customized plans", "Visible improvement", "Safe procedures"]
    },
    {
      name: "Melasma Treatment",
      description: "Specialized treatments for hyperpigmentation and melasma for even skin tone.",
      price: "Starting from Rs. 4,000",
      duration: "Multiple sessions",
      image: "/src/assets/images/general/60.jpg",
      detailImage: "/src/assets/images/general/60.jpg",
      sessionTime: "30-45 mins",
      features: ["Combination therapy", "Sun protection", "Even skin tone", "Long-lasting"]
    },
    {
      name: "Freckles Treatment",
      description: "Advanced treatments to reduce freckles and achieve more even, clear skin complexion.",
      price: "Starting from Rs. 3,000",
      duration: "Multiple sessions",
      image: "/src/assets/images/general/61.jpg",
      detailImage: "/src/assets/images/general/61.jpg",
      sessionTime: "30-45 mins",
      features: ["Gentle treatment", "Even complexion", "Quick recovery", "Visible results"]
    },
    {
      name: "Chemical Peels",
      description: "Rejuvenate your skin with our premium chemical peel treatments for glowing skin.",
      price: "Starting from Rs. 2,500",
      duration: "4-6 weeks",
      image: "/src/assets/images/general/62.jpg",
      detailImage: "/src/assets/images/general/62.jpg",
      sessionTime: "30-45 mins",
      features: ["Multiple depths", "Customized strength", "Quick recovery", "Glowing skin"]
    },
    {
      name: "Lip Fillers",
      description: "Enhance lip volume and shape with premium dermal fillers for natural, fuller lips.",
      price: "Starting from Rs. 12,000",
      duration: "6-12 months",
      image: "/src/assets/images/general/Lip-Fillers.jpg",
      detailImage: "/src/assets/images/general/63.jpg",
      sessionTime: "30-45 mins",
      features: ["Natural enhancement", "Instant results", "Minimal discomfort", "FDA-approved"]
    },
    {
      name: "Non-Surgical Facelift",
      description: "Lift and tighten facial skin without surgery using advanced non-invasive techniques.",
      price: "Starting from Rs. 25,000",
      duration: "6-12 months",
      image: "/src/assets/images/general/64.jpg",
      detailImage: "/src/assets/images/general/64.jpg",
      sessionTime: "60-90 mins",
      features: ["No surgery", "Natural lift", "Quick recovery", "Long-lasting results"]
    },
    {
      name: "360° Liposuction",
      description: "Complete body contouring with our advanced 360-degree liposuction technique.",
      price: "Starting from Rs. 1.5L",
      duration: "Permanent",
      image: "/src/assets/images/general/360-Deg.-Lepictomy.jpg",
      detailImage: "/src/assets/images/general/65.jpg",
      sessionTime: "3-4 hours",
      features: ["Complete contouring", "Advanced technique", "Dramatic results", "Single procedure"]
    }
  ]

  const whyChooseUs = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Medical Team",
      description: "Board-certified plastic surgeons, dermatologists, and aesthetic experts with years of experience."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "Latest FDA-approved equipment and techniques for safe, effective treatments."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique needs and aesthetic goals."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Premium
              <span className="text-gradient"> Aesthetic Services</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive range of surgical and non-surgical treatments delivered by expert medical professionals in a safe, clinical environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-primary">
                <Calendar className="w-4 h-4 mr-2 inline" />
                Book Consultation
              </Link>
              <a href="tel:+918983626437" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2 inline" />
                Call Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Surgical
              <span className="text-gradient"> Procedures</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced surgical procedures performed by board-certified plastic surgeons with years of experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surgicalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary-200 group">
                {service.image && (
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = service.detailImage;
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">Surgical</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {service.recovery}
                    </div>
                  </div>
                  
                  <div className="text-primary-600 font-semibold text-lg mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className="btn-primary w-full text-center block">
                    Book Procedure
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Surgical Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Non-Surgical
              <span className="text-gradient"> Treatments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Minimally invasive treatments with no downtime, delivering exceptional results for skin rejuvenation and facial enhancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonSurgicalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                {service.image && (
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = service.detailImage;
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">Non-Surgical</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.sessionTime}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-primary-600 font-semibold">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className="btn-secondary w-full text-center block">
                    Book Treatment
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-gradient"> SculptDerma</span>
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-primary-600">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Get Personalized Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our experts to discuss your aesthetic goals and learn about the best treatment options for you.
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 appearance-none cursor-pointer">
                    <option value="" className="text-gray-500">Select Service</option>
                    <option value="surgical" className="text-gray-900">Surgical Procedure</option>
                    <option value="non-surgical" className="text-gray-900">Non-Surgical Treatment</option>
                    <option value="guidance" className="text-gray-900">Not Sure - Need Guidance</option>
                  </select>
                  <Link to="/appointment" className="btn-primary w-full text-center block">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-medical-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Your Journey
              <span className="text-gradient"> With Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, comfortable process from consultation to transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free initial consultation to discuss your goals", image: "/src/assets/images/general/66.jpg" },
              { step: "02", title: "Planning", description: "Customized treatment plan tailored to you", image: "/src/assets/images/general/67.jpg" },
              { step: "03", title: "Treatment", description: "Expert procedure in our state-of-the-art facility", image: "/src/assets/images/general/68.jpg" },
              { step: "04", title: "Aftercare", description: "Comprehensive follow-up care and support", image: "/src/assets/images/general/69.jpg" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards achieving your aesthetic goals with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment Now
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

export default Services
