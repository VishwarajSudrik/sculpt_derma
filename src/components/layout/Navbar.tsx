import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar, ChevronDown, ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const location = useLocation()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false)
        setIsAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const servicesData = [
    {
      category: "Surgical Procedures",
      services: [
        { name: "Breast Implants", href: "/services/breast-implants" },
        { name: "Mommy Makeover", href: "/services/mommy-makeover" },
        { name: "Rhinoplasty", href: "/services/rhinoplasty" },
        { name: "Breast Reduction", href: "/services/breast-reduction" },
        { name: "Liposuction", href: "/services/liposuction" },
        { name: "Gynecomastia", href: "/services/gynecomastia" },
        { name: "Tummy Tuck", href: "/services/tummy-tuck" },
        { name: "Neck Lift", href: "/services/necklift" },
        { name: "Labiaplasty", href: "/services/labiaplasty" },
        { name: "Cheek Augmentation", href: "/services/cheek-augmentation" },
        { name: "Arm Lift", href: "/services/arm-lift" },
        { name: "Vaginoplasty", href: "/services/vaginoplasty" },
        { name: "Vaginal Reconstruction", href: "/services/vaginal-reconstruction" }
      ]
    },
    {
      category: "Non-Surgical Treatments",
      services: [
        { name: "Dermal Fillers", href: "/services/dermal-fillers" },
        { name: "Botox", href: "/services/botox" },
        { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
        { name: "Acne Scars Treatment", href: "/services/acne-scars" },
        { name: "Melasma Treatment", href: "/services/melasma" },
        { name: "Freckles Treatment", href: "/services/freckles" },
        { name: "Chemical Peels", href: "/services/chemical-peels" },
        { name: "Lip Fillers", href: "/services/lip-fillers" },
        { name: "Non-Surgical Facelift", href: "/services/non-surgical-facelift" },
        { name: "360° Liposuction", href: "/services/360-liposuction" }
      ]
    }
  ]

  const aboutData = [
    {
      category: "",
      items: [
        { name: "Appointment", href: "/appointment" },
        { name: "About Us", href: "/about" },
        { name: "Our Doctors", href: "/about/doctors" },
        { name: "Price Guide", href: "/about/price-guide" },
        { name: "Shop", href: "/shop" },
        { name: "Image Credits", href: "/about/image-credits" }
      ]
    }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: aboutData
    },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: servicesData
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-primary-100/30 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <img 
                src="/src/assets/images/general/Sculpt-Logo-2.png" 
                alt="Sculpt Derma"
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <div className="absolute inset-0 bg-primary-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h1 className="text-2xl font-serif font-bold text-gradient ml-2 hidden" style={{display: 'none'}}>
              SculptDerma
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      ref={item.name === 'Services' ? servicesDropdownRef : aboutDropdownRef}
                      onMouseEnter={() => {
                        if (item.name === 'Services') {
                          setIsServicesOpen(true)
                        } else if (item.name === 'About') {
                          setIsAboutOpen(true)
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Services') {
                          setIsServicesOpen(false)
                        } else if (item.name === 'About') {
                          setIsAboutOpen(false)
                        }
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          if (item.name === 'Services') {
                            setIsServicesOpen(false)
                          } else if (item.name === 'About') {
                            setIsAboutOpen(false)
                          }
                        }}
                        className={`px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center ${
                          location.pathname.startsWith(item.href)
                            ? 'text-primary-600 border-b-2 border-primary-600'
                            : 'text-secondary-600 hover:text-primary-600'
                        }`}
                        aria-haspopup="true"
                        aria-expanded={item.name === 'Services' ? isServicesOpen : isAboutOpen}
                        aria-label={`${item.name} menu`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3 h-3 ml-1.5 transition-transform duration-300 ${
                          (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
                        }`} />
                      </Link>
                      
                      {/* Services Dropdown Menu - Luxury Enhanced */}
                      {item.name === 'Services' && isServicesOpen && (
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-2xl shadow-premium border border-primary-100/50 rounded-2xl mt-4 z-50 overflow-hidden"
                          style={{ width: '800px' }}
                          role="menu"
                        >
                          <div className="p-8 bg-gradient-to-br from-white/90 to-primary-50/20">
                            <div className="grid grid-cols-2 gap-8">
                              {item.dropdownItems?.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-4">
                                  <h3 className="text-xs font-black text-primary-600 uppercase tracking-[0.2em] border-b border-primary-100 pb-3">
                                    {category.category}
                                  </h3>
                                  <div className="grid grid-cols-1 gap-1">
                                    {(category as any).services?.map((service: any, serviceIndex: any) => (
                                      <Link
                                        key={serviceIndex}
                                        to={service.href}
                                        className="block px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-200 group flex items-center"
                                        onClick={() => setIsServicesOpen(false)}
                                        role="menuitem"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-300 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {service.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-primary-100/50 text-center">
                              <Link
                                to="/services"
                                className="btn-primary py-2 px-6 text-xs inline-flex"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                View All Bespoke Treatments
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* About Dropdown Menu */}
                      {item.name === 'About' && isAboutOpen && (
                        <div 
                          className="absolute top-full left-0 bg-white/95 backdrop-blur-2xl shadow-premium border border-primary-100/50 rounded-2xl mt-4 z-50 overflow-hidden"
                          style={{ width: '280px' }}
                          role="menu"
                        >
                          <div className="p-4">
                            {item.dropdownItems?.map((category, categoryIndex) => (
                              <div key={categoryIndex} className="space-y-1">
                                {(category as any).items?.map((listItem: any, itemIndex: any) => (
                                  <Link
                                    key={itemIndex}
                                    to={listItem.href}
                                    className="block px-4 py-3 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-200"
                                    onClick={() => setIsAboutOpen(false)}
                                    role="menuitem"
                                  >
                                    {listItem.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-secondary-600 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+918983626437"
              className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 mr-2 text-primary-500" />
              <span>Connect</span>
            </a>
            <Link
              to="/appointment"
              className="btn-primary !px-6 !py-2.5 text-xs"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Ritual
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-secondary-700 hover:bg-primary-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-primary-50 animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setIsServicesOpen(!isServicesOpen)
                        else if (item.name === 'About') setIsAboutOpen(!isAboutOpen)
                      }}
                      className={`w-full text-left px-4 py-3 text-base font-bold uppercase tracking-widest flex items-center justify-between rounded-xl ${
                        location.pathname.startsWith(item.href) ? 'bg-primary-50 text-primary-600' : 'text-secondary-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {((item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen)) && (
                      <div className="pl-6 space-y-1 animate-slide-up">
                        {item.dropdownItems?.flatMap(cat => (cat as any).services || (cat as any).items).map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.href}
                            className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-base font-bold uppercase tracking-widest rounded-xl ${
                      location.pathname === item.href ? 'bg-primary-50 text-primary-600' : 'text-secondary-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-primary-50">
              <Link
                to="/appointment"
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>

  )
}

export default Navbar