import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, MapPin, Phone, Clock, ChevronLeft, ChevronRight, User, Microscope, Sparkles, Baby, Dumbbell, Activity, Flower, Syringe, Zap, StarOff, Beaker, Heart, Palette, Sun } from 'lucide-react'
import { teamImages, brandImages, serviceImages, getNumberedImage } from '../utils/imageImports'

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string, image: string, serviceLink: string } | null>(null)
  const serviceScrollRef = useRef<HTMLDivElement>(null)
  const transformationScrollRef = useRef<HTMLDivElement>(null)
  const teamScrollRef = useRef<HTMLDivElement>(null)
  const isServicesPausedRef = useRef(false)
  const isTransformationsPausedRef = useRef(false)
  const isTeamPausedRef = useRef(false)

  const scrollServices = (direction: 'left' | 'right') => {
    if (serviceScrollRef.current) {
      const scrollAmount = 300 // Smaller scroll amount
      console.log('Manual scroll services:', direction, scrollAmount) // Debug log
      serviceScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollTransformations = (direction: 'left' | 'right') => {
    if (transformationScrollRef.current) {
      const scrollAmount = 300 // Smaller scroll amount
      console.log('Manual scroll transformations:', direction, scrollAmount) // Debug log
      transformationScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll functionality with pause on hover
  useEffect(() => {
    const serviceScrollInterval = setInterval(() => {
      if (serviceScrollRef.current && !isServicesPausedRef.current) {
        console.log('Auto-scrolling services...') // Debug log

        // Check if we've reached the end, then reset to beginning
        if (serviceScrollRef.current.scrollLeft >= serviceScrollRef.current.scrollWidth - serviceScrollRef.current.clientWidth) {
          serviceScrollRef.current.scrollLeft = 0
        } else {
          serviceScrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
          })
        }
      }
    }, 2000) // 2 seconds

    const transformationScrollInterval = setInterval(() => {
      if (transformationScrollRef.current && !isTransformationsPausedRef.current) {
        console.log('Auto-scrolling transformations...') // Debug log

        // Check if we've reached the end, then reset to beginning
        if (transformationScrollRef.current.scrollLeft >= transformationScrollRef.current.scrollWidth - transformationScrollRef.current.clientWidth) {
          transformationScrollRef.current.scrollLeft = 0
        } else {
          transformationScrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
          })
        }
      }
    }, 2000) // 2 seconds

    const teamScrollInterval = setInterval(() => {
      if (teamScrollRef.current && !isTeamPausedRef.current) {
        console.log('Auto-scrolling team...') // Debug log

        // Check if we've reached the end, then reset to beginning
        if (teamScrollRef.current.scrollLeft >= teamScrollRef.current.scrollWidth - teamScrollRef.current.clientWidth) {
          teamScrollRef.current.scrollLeft = 0
        } else {
          teamScrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
          })
        }
      }
    }, 2000) // 2 seconds

    return () => {
      clearInterval(serviceScrollInterval)
      clearInterval(transformationScrollInterval)
      clearInterval(teamScrollInterval)
    }
  }, [])
  const features = [
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center"><User className="text-white text-xl w-5 h-5" /></div>,
      title: "Expert Medical Team",
      description: "Board-certified plastic surgeons and aesthetic specialists with years of experience in advanced medical procedures"
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center"><Microscope className="text-white text-xl w-5 h-5" /></div>,
      title: "Advanced Technology",
      description: "Latest medical equipment and cutting-edge techniques for optimal results and patient safety"
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center"><Sparkles className="text-white text-xl w-5 h-5" /></div>,
      title: "Personalized Care",
      description: "Tailored treatment plans designed specifically for your unique aesthetic goals and needs"
    }
  ]

  const testimonials = [
    {
      name: "Gynecomastia Patient",
      content: "I met Dr. Akash Tarkase and since then, he has been very supportive. He performed my gynecomastia surgery very well and made sure there were no visible scars on my chest. Under his guidance, I followed all his instructions, and my recovery was smooth and painless."
    },
    {
      name: "Lipoma Patient",
      content: "I recently underwent a successful surgery of sebaceous cyst and multiple lipoma. Doctor Akash answered all my questions pre surgery. He guided me post surgery too. He has a very friendly nature, which aids in making the patient comfortable."
    },
    {
      name: "Scar Removal Patient",
      content: "Very friendly very comfortable had a very nice experience with Dr. Akash sir did a scar removal surgery and results is just what wanted"
    }
  ]

  const beforeAfter = [
    { title: "360 Deg. Lepictomy", image: serviceImages.liposuction360, serviceLink: "/services#liposuction" },
    { title: "Arm Lift", image: serviceImages.armLift, serviceLink: "/services#arm-lift" },
    { title: "Breast Augmentation with Implant", image: serviceImages.breastAugmentation, serviceLink: "/services#breast-implants" },
    { title: "Dermal Fillers", image: serviceImages.dermalFillers, serviceLink: "/services#dermal-fillers" },
    { title: "Gynecomastia Surgery Pune", image: serviceImages.gynecomastia, serviceLink: "/services#gynecomastia" },
    { title: "Labioplasty", image: serviceImages.labiaplasty, serviceLink: "/services#labiaplasty" },
    { title: "Lip Fillers", image: serviceImages.lipFillers, serviceLink: "/services#lip-fillers" },
    { title: "Liposuction Abdomen", image: serviceImages.liposuction, serviceLink: "/services#liposuction" },
    { title: "Rhinoplasty in Pune", image: serviceImages.rhinoplasty, serviceLink: "/services#rhinoplasty" },
    { title: "Mommy Makeover", image: serviceImages.mommyMakeover, serviceLink: "/services#mommy-makeover" },
    { title: "Tummy Tuck (Abdominoplasty)", image: serviceImages.tummyTuck, serviceLink: "/services#tummy-tuck" },
    { title: "Vaginal Reconstruction", image: serviceImages.vaginalReconstruction, serviceLink: "/services#vaginal-reconstruction" },
    { title: "Vaginoplasty", image: serviceImages.vaginoplasty, serviceLink: "/services#vaginoplasty" }
  ]

  const clinics = [
    {
      name: "Sculpt Derma, Kharadi",
      address: "First Floor, UG 06, Clover Galleria, Fountain Road, near Forest County Gate 4, EON Free Zone, Kharadi, Pune",
      hours: "Mon-Sun: 10 am – 9 pm"
    },
    {
      name: "Sculpt Derma, Wakad",
      address: "Shop No. 04, Ground Floor, Shree Sai Plaza, Wakad, Pune",
      hours: "Mon-Sun: 10 am – 9 pm"
    },
    {
      name: "Sculpt Derma, Baner",
      address: "Unit 601, 6th floor, Shivam Regency, Baner Rd, above Jyoti Appliances, Baner, Pune",
      hours: "Mon-Sun: 10 am – 9 pm"
    }
  ]
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressElement = document.getElementById('scroll-progress')
      if (progressElement) {
        progressElement.style.width = `${scrolled}%`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Clinic Background"
            className="w-full h-full object-cover opacity-[0.25] scale-110 animate-fade-in mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>
        </div>

        {/* Ambient Decorative Elements */}
        <div className="ambient-circle w-[600px] h-[600px] bg-primary-200 -top-20 -right-20"></div>
        <div className="ambient-circle w-[400px] h-[400px] bg-accent-200 bottom-0 left-0"></div>

        <div className="container relative z-10 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-primary-200/50 px-4 py-2 rounded-full shadow-soft animate-float">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-ping"></span>
                <span className="text-primary-800 text-xs font-bold uppercase tracking-widest">The Gold Standard in Aesthetics</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary-900 leading-tight">
                Advanced Aesthetic & <br />
                <span className="text-gradient">Transformative Care</span>
              </h1>

              <p className="text-xl text-secondary-600 max-w-xl leading-relaxed font-light">
                Experience world-class cosmetic and reconstructive procedures with our expert medical team. Your safety, comfort, and satisfaction are our highest priorities.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link to="/appointment" className="btn-primary group">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>

              {/* Stat Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-100">
                <div>
                  <h4 className="text-3xl font-serif text-primary-600 font-bold">15+</h4>
                  <p className="text-xs text-secondary-500 uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-primary-600 font-bold">5k+</h4>
                  <p className="text-xs text-secondary-500 uppercase tracking-widest mt-1">Happy Patients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-primary-600 font-bold">99%</h4>
                  <p className="text-xs text-secondary-500 uppercase tracking-widest mt-1">Safety Rate</p>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[650px] flex items-center justify-center">
              {/* Main Image with Premium Frame */}
              <div className="relative z-10 w-full max-w-lg premium-frame transform hover:scale-[1.02] transition-transform duration-700">
                <div className="w-full h-full rounded-[35px] overflow-hidden shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern Aesthetic Clinic"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                  {/* Luxury Shine Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Glass Cards */}
              <div className="absolute -right-8 top-12 z-20 glass-card p-6 max-w-[200px] animate-float">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Star className="text-primary-600 w-5 h-5" />
                  </div>
                  <span className="font-bold text-secondary-900">4.9/5</span>
                </div>
                <p className="text-xs text-secondary-500">Exceptional patient satisfaction across 2,000+ reviews.</p>
              </div>

              <div className="absolute -left-12 bottom-20 z-20 glass-card p-6 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex -space-x-2 mb-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-[10px] text-white font-bold">
                    +1k
                  </div>
                </div>
                <p className="text-xs font-bold text-secondary-900">Join our community</p>
              </div>

              {/* Abstract Shimmer */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-400/10 via-transparent to-primary-600/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Motto Marquee */}
      <div className="bg-secondary-900 overflow-hidden py-14 border-y border-white/5 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee-scroll min-w-full group">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center space-x-12 px-6 leading-none">
              <span className="text-3xl md:text-5xl font-serif text-white/50 uppercase tracking-[0.2em]">New Clients Welcome</span>
              <img src={brandImages.logo} alt="Logo" className="h-22 md:h-28 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(184,138,90,0.7)] mx-6" />
              <span className="text-3xl md:text-5xl font-serif text-white/50 uppercase tracking-[0.2em]">Body Contouring Packages Available</span>
              <img src={brandImages.logo} alt="Logo" className="h-22 md:h-28 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(184,138,90,0.7)] mx-6" />
              <span className="text-3xl md:text-5xl font-serif text-gradient uppercase tracking-[0.2em] font-light italic drop-shadow-[0_0_15px_rgba(184,138,90,0.4)]">Book Today & Glow Tomorrow</span>
              <img src={brandImages.logo} alt="Logo" className="h-22 md:h-28 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(184,138,90,0.7)] mx-6" />
              <span className="text-3xl md:text-5xl font-serif text-white/50 uppercase tracking-[0.2em]">10% Off First-Time Botox</span>
              <img src={brandImages.logo} alt="Logo" className="h-22 md:h-28 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(184,138,90,0.7)] mx-6" />
            </div>
          ))}
        </div>
      </div>





      {/* Luxury Medical Aesthetic Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Ambient Decorative Elements */}
        <div className="ambient-circle w-[500px] h-[500px] bg-primary-50 -bottom-40 -left-40"></div>
        <div className="ambient-circle w-[300px] h-[300px] bg-accent-100 top-20 right-0"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <span className="text-primary-800 text-xs font-bold uppercase tracking-widest">Luxury Medical Aesthetic</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6">
              SculptDerma is a <span className="text-gradient italic">Luxury Medical Aesthetic Destination</span>
            </h2>
            <p className="text-lg text-secondary-500 max-w-3xl mx-auto font-light leading-relaxed">
              Redefining skin, hair, face, and body wellness with precision, care, and an artistic eye. Founded by leading Plastic & Aesthetic Surgeons, Dermatologists and Aesthetic experts, in Pune, SculptDerma merges science with soul offering treatments that are not just seen, but felt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-8 premium-border hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                  <CheckCircle className="w-6 h-6 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">Precision & Care</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  Every treatment is performed with meticulous attention to detail, combining medical expertise with artistic vision.
                </p>
              </div>

              <div className="glass-card p-8 premium-border hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                  <Microscope className="text-2xl w-6 h-6 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">Science Meets Art</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  Our approach blends cutting-edge medical technology with artistic sensibility for results that are felt, not just seen.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-premium group">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="Luxury Medical Aesthetic Clinic"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xl font-serif italic">"Where we redefine wellness with an artistic eye."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Anti-aging & Contouring Experts Section */}
      <section className="section-padding bg-soft-gradient relative overflow-hidden">
        {/* Background Parallax Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1664902270856-e6774c9df737?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzdGV0aGljJTIwb3BlcmF0aW9uJTIwdGhlYXRlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Background Texture"
            className="w-full h-full object-cover mix-blend-overlay parallax-bg"
          />
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-accent-50/20"></div>
        </div>

        {/* Floating Foreground Images */}
       
       
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 reveal-on-scroll">
              <div className="premium-frame">
                <div className="aspect-square rounded-[35px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Anti-aging Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              {/* Text background overlay for better visibility */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 pr-8 shadow-xl border border-white/20 ml-0 lg:ml-4">
                <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-primary-500 fill-current" />
                  <span className="text-secondary-800 text-xs font-bold uppercase tracking-widest">Anti-aging & Contouring Experts</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 leading-tight mt-6">
                  Expert <br />
                  <span className="text-gradient">Medical Excellence</span>
                </h2>

                <p className="text-lg text-secondary-500 font-light leading-relaxed mt-4">
                  Our team of specialists combines medical expertise with artistic vision to deliver natural-looking results that enhance your unique beauty.
                </p>

                <div className="space-y-4 mt-6">
                  {[
                    { title: "Board Certified Surgeons", desc: "MBBS, MS, MCh qualified professionals with extensive experience" },
                    { title: "Advanced Technology", desc: "Latest medical equipment and cutting-edge techniques" },
                    { title: "Personalized Care", desc: "Tailored treatment plans designed specifically for your unique needs" }
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-6 premium-border flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary-900">{item.title}</h4>
                        <p className="text-sm text-secondary-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Excellence Section */}
      <section className="py-5 bg-gradient-to-br from-white to-medical-50">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 border border-accent-200">
              <Star className="w-4 h-4 mr-2" />
              Aesthetic Excellence
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Cutting-Edge
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Aesthetic Solutions</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-4">
              We stay updated with the latest advancements in aesthetic medicine to provide you with cutting-edge treatments that deliver exceptional results.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Advanced Treatments"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3ETreatment%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">Advanced Technology</h3>
                  <p className="text-sm text-secondary-600 mb-2">State-of-the-art equipment for superior results</p>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Expert Team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3ETeam%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">Expert Team</h3>
                  <p className="text-sm text-secondary-600 mb-2">Highly qualified medical professionals</p>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold"
                  >
                    Meet Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Natural Results"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EResults%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">Natural Results</h3>
                  <p className="text-sm text-secondary-600 mb-2">Enhancing your beauty naturally</p>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold"
                  >
                    View Results
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      {/* Features Section - Why Choose Sculpt Derma */}
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
              <Star className="text-primary-500 w-4 h-4" />
              <span className="text-primary-800 text-xs font-bold uppercase tracking-widest">Our Distinction</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">Medical <span className="text-gradient">Excellence Standards</span></h2>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto font-light leading-relaxed">
              We maintain the highest medical standards with expert professionals and advanced technology for exceptional aesthetic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-10 premium-border group hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                  <div className="group-hover:scale-125 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{feature.title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Artistry Section */}
      <section className="section-padding bg-primary-100/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-soft">
              <Star className="text-primary-500 w-4 h-4" />
              <span className="text-secondary-800 text-xs font-bold uppercase tracking-widest">Refined Artistry</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">For Your <span className="text-gradient">Exquisite Results</span></h2>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto font-light leading-relaxed">
              Our expertise extends beyond plastic surgery. Our talented providers offer the latest non-surgical treatments to rejuvenate and refine your appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Professionals", desc: "Therapies administered by expert healthcare professionals" },
              { title: "Safe Environment", desc: "High quality treatments provided in a safe, clinical environment" },
              { title: "Tailored Treatments", desc: "Tailored treatment plans to help optimise your wellbeing" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 premium-border hover:shadow-premium transition-all duration-500">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-aging Experts Section */}
      <section className="py-12 bg-gradient-to-br from-accent-50 to-primary-50 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[6/5] bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF6ZXIlMjB0cmVhdG1lbnQlMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D"
                  alt="Modern Aesthetic Clinic"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.currentTarget;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3ELaser%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest mb-1">State-of-the-Art</p>
                  <p className="text-2xl font-serif">Laser Technology</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-[40px] p-10 shadow-premium border border-accent-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-full -mr-16 -mt-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center bg-accent-100/50 text-accent-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent-200">
                    <Star className="w-4 h-4 mr-2 fill-accent-500 text-accent-500" />
                    Anti-aging Experts
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
                    1 Year Unlimited
                    <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2 italic">Laser Hair Removal</span>
                  </h2>

                  <p className="text-xl text-secondary-600 mb-8 flex items-center">
                    <span className="w-12 h-[2px] bg-accent-300 mr-4"></span>
                    Full Face & Body
                  </p>

                  <div className="text-black">
                    <p className="text-center font-medium leading-relaxed">
                      Don’t miss the exclusive opportunity!
                    </p>
                  </div>

                  <Link
                    to="/appointment"
                    className="inline-flex items-center bg-secondary-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl w-full justify-center group"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>













      {/* All Services Showcase */}
      <section className="py-6 bg-gradient-to-br from-white via-medical-50 to-primary-50">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-primary-200">
              <Star className="w-4 h-4 mr-2" />
              Our Complete Service Portfolio
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Comprehensive Medical
              <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent"> Aesthetic Solutions</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              From surgical transformations to non-invasive treatments, discover our full range of premium medical aesthetic services
            </p>
          </div>

          {/* Unlimited Circular Scroll Service Portfolio with Navigation */}
          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollServices('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-accent-50 border-2 border-accent-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-accent-600" />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollServices('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-accent-50 border-2 border-accent-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-accent-600" />
            </button>

            {/* Scroll Container */}
            <div
              ref={serviceScrollRef}
              className="relative overflow-x-auto"
              onMouseEnter={() => { isServicesPausedRef.current = true }}
              onMouseLeave={() => { isServicesPausedRef.current = false }}
            >
              <div
                className="flex gap-4 overflow-x-visible scroll-smooth hide-scrollbar-line"
                style={{
                  scrollBehavior: 'smooth',
                  width: 'max-content'
                }}
              >
                {[...Array(3)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex gap-4 min-w-max">
                    {[
                      { name: "Breast Implants", description: "Enhance natural curves with premium implants", image: serviceImages.breastAugmentation, price: "Rs. 1.4L", type: "surgical", icon: <Activity className="w-6 h-6" /> },
                      { name: "Mommy Makeover", description: "Complete post-pregnancy transformation", image: serviceImages.mommyMakeover, price: "From Rs. 2.2L", type: "surgical", icon: <Baby className="w-6 h-6" /> },
                      { name: "Rhinoplasty", description: "Precision nose reshaping surgery", image: serviceImages.rhinoplasty, price: "From Rs. 80K", type: "surgical", icon: <Activity className="w-6 h-6" /> },
                      { name: "Liposuction", description: "Advanced body contouring procedures", image: serviceImages.liposuction, price: "From Rs. 60K", type: "surgical", icon: <Dumbbell className="w-6 h-6" /> },
                      { name: "Tummy Tuck", description: "Abdominoplasty for flat abdomen", image: serviceImages.tummyTuck, price: "From Rs. 80K", type: "surgical", icon: <Dumbbell className="w-6 h-6" /> },
                      { name: "Arm Lift", description: "Tone upper arms effectively", image: serviceImages.armLift, price: "From Rs. 70K", type: "surgical", icon: <Dumbbell className="w-6 h-6" /> },
                      { name: "Gynecomastia", description: "Male breast reduction surgery", image: serviceImages.gynecomastia, price: "From Rs. 70K", type: "surgical", icon: <Activity className="w-6 h-6" /> },
                      { name: "Vaginoplasty", description: "Female genital rejuvenation", image: serviceImages.vaginoplasty, price: "From Rs. 60K", type: "surgical", icon: <Flower className="w-6 h-6" /> },
                      { name: "Dermal Fillers", description: "Restore volume and youthfulness", image: serviceImages.dermalFillers, price: "From Rs. 15K", type: "non-surgical", icon: <Syringe className="w-6 h-6" /> },
                      { name: "Botox", description: "Smooth wrinkles and fine lines", image: getNumberedImage(3), price: "From Rs. 8K", type: "non-surgical", icon: <Sparkles className="w-6 h-6" /> },
                      { name: "Laser Hair Removal", description: "Permanent hair reduction", image: getNumberedImage(4), price: "From Rs. 3K", type: "non-surgical", icon: <Zap className="w-6 h-6" /> },
                      { name: "Acne Scars Treatment", description: "Clear acne scars effectively", image: getNumberedImage(5), price: "From Rs. 5K", type: "non-surgical", icon: <StarOff className="w-6 h-6" /> },
                      { name: "Chemical Peels", description: "Skin rejuvenation treatments", image: getNumberedImage(8), price: "From Rs. 2.5K", type: "non-surgical", icon: <Beaker className="w-6 h-6" /> },
                      { name: "Lip Fillers", description: "Enhance lip volume naturally", image: serviceImages.lipFillers, price: "From Rs. 12K", type: "non-surgical", icon: <Heart className="w-6 h-6" /> },
                      { name: "Non-Surgical Facelift", description: "Non-invasive facial rejuvenation", image: getNumberedImage(9), price: "From Rs. 25K", type: "non-surgical", icon: <Activity className="w-6 h-6" /> },
                      { name: "Melasma Treatment", description: "Treat hyperpigmentation", image: getNumberedImage(6), price: "From Rs. 4K", type: "non-surgical", icon: <Palette className="w-6 h-6" /> },
                      { name: "Freckles Treatment", description: "Reduce freckles safely", image: getNumberedImage(7), price: "From Rs. 3K", type: "non-surgical", icon: <Sun className="w-6 h-6" /> }
                    ].map((service, index) => (
                      <div key={`${repeatIndex}-${index}`} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-secondary-100 hover:border-primary-300 cursor-pointer w-80 flex-shrink-0">
                        {/* Service Type Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${service.type === 'surgical'
                            ? 'bg-gradient-to-r from-accent-500 to-accent-600'
                            : 'bg-gradient-to-r from-primary-500 to-primary-600'
                            }`}>
                            {service.type === 'surgical' ? 'Surgical' : 'Non-Surgical'}
                          </span>
                        </div>

                        {/* Service Image */}
                        <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.currentTarget;
                              target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3E' + service.name + '%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Service Content */}
                        <div className="p-4">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-3">{service.icon}</span>
                            <h3 className="text-lg font-bold text-secondary-900 group-hover:text-accent-600 transition-colors">{service.name}</h3>
                          </div>
                          <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-accent-600 font-bold">{service.price}</span>
                            <Link to="/appointment" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center group">
                              Book Now
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/services" className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              View Complete Service Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-6 bg-gradient-to-br from-medical-50 to-white">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 border border-accent-200">
              <Star className="w-4 h-4 mr-2" />
              Patient Transformations
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Real People.
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Real Results</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover amazing transformations achieved by our patients with our expert aesthetic treatments
            </p>
          </div>

          {/* Enhanced Unlimited Circular Scroll Transformation Portfolio */}
          <div className="relative">
            {/* Enhanced Scroll Buttons */}
            <button
              onClick={() => scrollTransformations('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-accent-50 border-2 border-accent-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-accent-600" />
            </button>

            <button
              onClick={() => scrollTransformations('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-accent-50 border-2 border-accent-200 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-accent-600" />
            </button>

            {/* Enhanced Scroll Container */}
            <div
              ref={transformationScrollRef}
              className="relative overflow-x-auto"
              onMouseEnter={() => { isTransformationsPausedRef.current = true }}
              onMouseLeave={() => { isTransformationsPausedRef.current = false }}
            >
              <div
                className="flex gap-4 overflow-x-visible scroll-smooth hide-scrollbar-line"
                style={{
                  scrollBehavior: 'smooth',
                  width: 'max-content'
                }}
              >
                {[...Array(3)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex gap-4">
                    {beforeAfter.map((transformation, index) => (
                      <div
                        key={`${repeatIndex}-${index}`}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-accent-100 hover:border-accent-200"
                        style={{ width: '320px', flexShrink: 0 }}
                        onClick={() => setSelectedImage(transformation)}
                      >
                        <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100">
                          <img
                            src={transformation.image}
                            alt={transformation.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.currentTarget;
                              target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EResult%3C/text%3E%3C/svg%3E';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-semibold text-accent-600">View Details</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-accent-600 transition-colors">{transformation.title}</h3>
                          <p className="text-sm text-secondary-600 mb-4">Life-changing transformation</p>
                          <Link
                            to={transformation.serviceLink}
                            className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/appointment" className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-white to-medical-50">
        <div className="container">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Patient Success Stories
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              What Our
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> Patients Say</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Real experiences from real patients who chose Sculpt Derma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-200">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">{testimonial.name}</h3>
                    <div className="flex text-accent-400 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-secondary-600 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center text-sm text-secondary-500">
                  <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                  Verified Patient Experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">20% OFF</div>
              <div className="text-lg">First Consultation</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">FREE</div>
              <div className="text-lg">Skin Analysis</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">EMI</div>
              <div className="text-lg">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Why Choose
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> SculptDerma</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience the perfect blend of medical expertise and aesthetic artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Board Certified</h3>
              <p className="text-secondary-600">MBBS, MS (Surgery), MCh (Plastic Surgery) qualified specialists</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">10+ Years Experience</h3>
              <p className="text-secondary-600">Thousands of successful procedures with exceptional results</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">24/7 Support</h3>
              <p className="text-secondary-600">Round-the-clock assistance for all your post-procedure needs</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">3 Clinics in Pune</h3>
              <p className="text-secondary-600">Conveniently located at Kharadi, Wakad, and Baner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-secondary-900 mb-1">
              Meet Our
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> Expert Team</span>
            </h2>
            <p className="text-sm text-secondary-600 max-w-3xl mx-auto">
              Led by renowned medical specialists
            </p>
          </div>

          {/* Team Members Scrolling Container */}
          <div className="relative">
            <div
              ref={teamScrollRef}
              className="overflow-x-auto pb-4"
              onMouseEnter={() => { isTeamPausedRef.current = true }}
              onMouseLeave={() => { isTeamPausedRef.current = false }}
            >
              <div className="flex gap-4 min-w-max">
                {/* Dr. Akash Tarkase */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drAkashTarkase}
                      alt="Dr. Akash Tarkase"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Akash%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Akash Tarkase</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Advanced Dermal Fillers</div>
                      <div className="text-xs text-accent-600">• Cosmetic Gynaecology</div>
                      <div className="text-xs text-accent-600">• Gender Affirmation Surgery</div>
                      <div className="text-xs text-accent-600">• Non-Surgical Facelift</div>
                      <div className="text-xs text-accent-600">• Plastic & Aesthetic Surgery</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-akash" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Somnath Karad */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drSomnathKarad}
                      alt="Dr. Somnath Karad"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Somnath%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Somnath Karad</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Cosmetic Gynaecology</div>
                      <div className="text-xs text-accent-600">• Gender Affirmation Surgery</div>
                      <div className="text-xs text-accent-600">• Plastic & Aesthetic Surgery</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-somnath" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Azhar */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drAzhar}
                      alt="Dr. Azhar"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Azhar%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Azhar</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Bariatric Surgery</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-azhar" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Swarali */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drSwarali}
                      alt="Dr. Swarali"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Swarali%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Swarali</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Cosmetology</div>
                      <div className="text-xs text-accent-600">• Trichology</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-swarali" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Bhushan Darkase */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drBhushanDarkase}
                      alt="Dr. Bhushan Darkase"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Bhushan%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Bhushan Darkase</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Dermatology</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-bhushan" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Nitin Maske */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drNitinMaske}
                      alt="Dr. Nitin Maske"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Nitin%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Nitin Maske</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Dermatology</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-nitin" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Shrenik Oswal */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drShrenikOswal}
                      alt="Dr. Shrenik Oswal"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Shrenik%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Shrenik Oswal</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Cosmetic Dentistry</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-shrenik" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Pranil */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">PR</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Pranil</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Cosmetic Dentistry</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-pranil" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Rohini */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drRohini}
                      alt="Dr. Rohini"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Rohini%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Rohini</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Nutritionist</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-rohini" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Dhanashree */}
                <div className="bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300 group w-80 flex-shrink-0">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    <img
                      src={teamImages.drDhanashree}
                      alt="Dr. Dhanashree"
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EDr. Dhanashree%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">Dr. Dhanashree</h3>
                    <div className="space-y-1 mb-3">
                      <div className="text-xs text-accent-600">• Permanent Make Up</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link to="/doctor/dr-dhanashree" className="text-accent-600 hover:text-accent-700 font-semibold text-sm">
                        Open Profile
                      </Link>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <ArrowRight className="w-5 h-5 rotate-45" />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.currentTarget;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'12\' fill=\'%23666\'%3EIMG%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="md:w-1/3 p-6 bg-gradient-to-br from-primary-50 to-accent-50">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{selectedImage.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-secondary-600">
                    <Star className="w-5 h-5 mr-2 text-accent-400" />
                    <span>Expert Medical Care</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Star className="w-5 h-5 mr-2 text-accent-400" />
                    <span>Proven Results</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Star className="w-5 h-5 mr-2 text-accent-400" />
                    <span>Advanced Technology</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link
                    to={selectedImage.serviceLink}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
                    onClick={() => setSelectedImage(null)}
                  >
                    View Service Details
                  </Link>
                  <Link
                    to="/appointment"
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
                    onClick={() => setSelectedImage(null)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}




      {/* Testimonials Section */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 border border-accent-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              What Our Patients Say
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Real Stories,
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Real Results</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Hear directly from our patients about their transformative experiences at SculptDerma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Rajesh Kumar",
                treatment: "Gynecomastia Surgery",
                text: "I met Dr. Akash Tarkase and since then, he has been very supportive. He performed my gynecomastia surgery very well and made sure there were no visible scars on my chest. Under his guidance, I followed all his instructions, and my recovery was smooth and painless.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                treatment: "Sebaceous Cyst & Lipoma Removal",
                text: "I recently underwent a successful surgery of sebaceous cyst and multiple lipoma. Doctor Akash answered all my questions pre surgery. He guided me post surgery too. He has a very friendly nature, which aids in making the patient comfortable.",
                rating: 5
              },
              {
                name: "Amit Patil",
                treatment: "Scar Removal Surgery",
                text: "Very friendly very comfortable had a very nice experience with Dr. Akash sir did a scar removal surgery and results is just what I wanted. I would definitely recommend Dr. Akash for skin related issues.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-secondary-600 italic mb-3">"{testimonial.text}"</p>
                <p className="text-sm font-medium text-accent-600">{testimonial.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Guide Section */}
      <section className="py-6 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-accent-600 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Price Guide
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Transparent
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Pricing</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Clear, competitive pricing for all our aesthetic treatments with no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Breast Treatment
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Breast Augmentation with implant</span>
                  <span className="font-bold text-accent-600">Starting from ₹1.4L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Breast augmentation with Fat grafting</span>
                  <span className="font-bold text-accent-600">Starting from ₹1L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Breast Lift</span>
                  <span className="font-bold text-accent-600">₹80k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700">Breast Reduction</span>
                  <span className="font-bold text-accent-600">₹80K</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Face Treatment
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Rhinoplasty</span>
                  <span className="font-bold text-accent-600">Starting from ₹80k</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Lip Fillers</span>
                  <span className="font-bold text-accent-600">Starting from ₹15k</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Dermal Fillers</span>
                  <span className="font-bold text-accent-600">Starting from ₹20k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700">Botox</span>
                  <span className="font-bold text-accent-600">Starting from ₹8k</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Body Treatment
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Liposuction</span>
                  <span className="font-bold text-accent-600">Starting from ₹60k</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Tummy Tuck</span>
                  <span className="font-bold text-accent-600">Starting from ₹1.2L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-100">
                  <span className="text-secondary-700">Gynecomastia</span>
                  <span className="font-bold text-accent-600">Starting from ₹70k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700">Mommy Makeover</span>
                  <span className="font-bold text-accent-600">Starting from ₹2.5L</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/appointment"
              className="inline-flex items-center bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>



      {/* Clinics Section */}
      <section className="py-6 bg-white">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Visit Our
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> Clinics</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Conveniently located across Pune to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {clinics.map((clinic, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{clinic.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-secondary-600">
                    <MapPin className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Clock className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                    <span>{clinic.hours}</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Phone className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                    <span>+91 8983626437</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>











      {/* Newsletter Section */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 border border-accent-200">
              <Clock className="w-4 h-4 mr-2" />
              Sign Up for Newsletter
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Stay Updated with
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Special Offers</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-4">
              Subscribe to our newsletter and receive a 10% off for any further treatment.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-200"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe & Get 10% Off
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
                <p className="text-sm text-secondary-500 text-center mt-4">
                  "You won't find a better aesthetic medicine clinic in Pune."
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* Artistic Approach Section */}
      <section className="py-6 bg-gradient-to-br from-medical-50 to-white">
        <div className="container">
          <div className="text-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-2 border border-accent-200">
              <Star className="w-4 h-4 mr-2" />
              Artistic Approach
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
              Where Art Meets
              <span className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mt-2">Medical Science</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-4">
              Every treatment is performed with an artistic eye, ensuring natural-looking results that enhance your features and bring out your inner beauty.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Artistic Treatment"
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-family=\'sans-serif\' font-size=\'10\' fill=\'%23666\'%3EArtistic%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Artistic Vision</h3>
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    Our specialists combine medical expertise with artistic sensibility, creating treatments that enhance your natural beauty while maintaining harmony and balance.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <Palette className="text-2xl w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-secondary-900">Aesthetic Design</h4>
                      <p className="text-secondary-600 text-sm">Customized treatment plans</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <Sparkles className="text-2xl w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-secondary-900">Natural Beauty</h4>
                      <p className="text-secondary-600 text-sm">Enhancing your features</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Transformative Results</h3>
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    Experience the perfect blend of medical precision and artistic excellence for results that look natural and feel amazing.
                  </p>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Your Transformation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home
