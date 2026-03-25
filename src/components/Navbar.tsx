// import { useState, useRef, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isServicesOpen, setIsServicesOpen] = useState(false)
//   const [isAboutOpen, setIsAboutOpen] = useState(false)
//     const location = useLocation()
//   const servicesDropdownRef = useRef<HTMLDivElement>(null)
//   const aboutDropdownRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
//         setIsServicesOpen(false)
//       }
//       if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
//         setIsAboutOpen(false)
//       }
//     }

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setIsServicesOpen(false)
//         setIsAboutOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     document.addEventListener('keydown', handleKeyDown)

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [])

//   const servicesData = [
//     {
//       category: "Surgical Procedures",
//       services: [
//         { name: "Breast Implants", href: "/services/breast-implants" },
//         { name: "Mommy Makeover", href: "/services/mommy-makeover" },
//         { name: "Rhinoplasty", href: "/services/rhinoplasty" },
//         { name: "Breast Reduction", href: "/services/breast-reduction" },
//         { name: "Liposuction", href: "/services/liposuction" },
//         { name: "Gynecomastia", href: "/services/gynecomastia" },
//         { name: "Tummy Tuck", href: "/services/tummy-tuck" },
//         { name: "Neck Lift", href: "/services/necklift" },
//         { name: "Labiaplasty", href: "/services/labiaplasty" },
//         { name: "Cheek Augmentation", href: "/services/cheek-augmentation" },
//         { name: "Arm Lift", href: "/services/arm-lift" },
//         { name: "Vaginoplasty", href: "/services/vaginoplasty" },
//         { name: "Vaginal Reconstruction", href: "/services/vaginal-reconstruction" }
//       ]
//     },
//     {
//       category: "Non-Surgical Treatments",
//       services: [
//         { name: "Dermal Fillers", href: "/services/dermal-fillers" },
//         { name: "Botox", href: "/services/botox" },
//         { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
//         { name: "Acne Scars Treatment", href: "/services/acne-scars" },
//         { name: "Melasma Treatment", href: "/services/melasma" },
//         { name: "Freckles Treatment", href: "/services/freckles" },
//         { name: "Chemical Peels", href: "/services/chemical-peels" },
//         { name: "Lip Fillers", href: "/services/lip-fillers" },
//         { name: "Non-Surgical Facelift", href: "/services/non-surgical-facelift" },
//         { name: "360° Liposuction", href: "/services/360-liposuction" }
//       ]
//     }
//   ]

//   const aboutData = [
//     {
//       category: "",
//       items: [
//         { name: "Appointment", href: "/appointment" },
//         { name: "About Us", href: "/about" },
//         { name: "Our Doctors", href: "/about/doctors" },
//         { name: "Price Guide", href: "/about/price-guide" },
//         { name: "Shop", href: "/shop" },
//         { name: "Image Credits", href: "/about/image-credits" }
//       ]
//     }
//   ]

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { 
//       name: 'About', 
//       href: '/about',
//       hasDropdown: true,
//       dropdownItems: aboutData
//     },
//     { 
//       name: 'Services', 
//       href: '/services',
//       hasDropdown: true,
//       dropdownItems: servicesData
//     },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="container">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0 flex items-center">
//             <img 
//               src="/src/assets/img/Sculpt-Logo-2.png" 
//               alt="Sculpt Derma"
//               className="h-12 w-auto object-contain"
//               onError={(e) => {
//                 const target = e.currentTarget as HTMLImageElement;
//                 target.style.display = 'none';
//                 const nextElement = target.nextElementSibling as HTMLElement;
//                 if (nextElement) {
//                   nextElement.style.display = 'block';
//                 }
//               }}
//             />
//             <h1 className="text-2xl font-serif font-bold text-gradient hidden" style={{display: 'none'}}>
//               SculptDerma
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navigation.map((item) => (
//                 <div key={item.name} className="relative">
//                   {item.hasDropdown ? (
//                     <div 
//                       className="relative"
//                       ref={item.name === 'Services' ? servicesDropdownRef : aboutDropdownRef}
//                       onMouseEnter={() => {
//                         if (item.name === 'Services') {
//                           setIsServicesOpen(true)
//                         } else if (item.name === 'About') {
//                           setIsAboutOpen(true)
//                         }
//                       }}
//                     >
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault()
//                           if (item.name === 'Services') {
//                             setIsServicesOpen(!isServicesOpen)
//                           } else if (item.name === 'About') {
//                             setIsAboutOpen(!isAboutOpen)
//                           }
//                         }}
//                         className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
//                           location.pathname.startsWith(item.href)
//                             ? 'text-primary-600 border-b-2 border-primary-600'
//                             : 'text-gray-700 hover:text-primary-600'
//                         }`}
//                         aria-haspopup="true"
//                         aria-expanded={item.name === 'Services' ? isServicesOpen : isAboutOpen}
//                         aria-label={`${item.name} menu`}
//                       >
//                         {item.name}
//                         <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//                           (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
//                         }`} />
//                       </button>
                      
//                       {/* Dropdown Menu */}
//                       {(item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) && (
//                         <div 
//                           className="absolute top-full left-0 bg-white shadow-2xl border border-primary-100 rounded-xl mt-2 z-50 backdrop-blur-sm"
//                           style={{ width: '320px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
//                           onMouseLeave={() => {
//                             if (item.name === 'Services') {
//                               setIsServicesOpen(false)
//                             } else if (item.name === 'About') {
//                               setIsAboutOpen(false)
//                             }
//                           }}
//                           role="menu"
//                         >
//                           <div className="p-4 bg-gradient-to-br from-white to-primary-50/30 rounded-xl">
//                             {item.dropdownItems?.map((category, categoryIndex) => (
//                               <div key={categoryIndex} className="space-y-3">
//                                 {category.category && (
//                                   <h3 className="text-xs font-bold text-secondary-900 mb-3 text-primary-600 uppercase tracking-wide px-2 py-1 border-b border-primary-200">
//                                     {category.category}
//                                   </h3>
//                                 )}
//                                 <div className="space-y-1">
//                                   {(category as any).services?.map((service: any, serviceIndex: any) => (
//                                     <Link
//                                       key={serviceIndex}
//                                       to={service.href}
//                                       className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:shadow-md hover:scale-[1.02] rounded-lg transition-all duration-300 ease-out border border-transparent hover:border-primary-200"
//                                       onClick={() => {
//                                         if (item.name === 'Services') {
//                                           setIsServicesOpen(false)
//                                         } else if (item.name === 'About') {
//                                           setIsAboutOpen(false)
//                                         }
//                                       }}
//                                       role="menuitem"
//                                     >
//                                       {service.name}
//                                     </Link>
//                                   ))}
//                                   {(category as any).items?.map((listItem: any, itemIndex: any) => (
//                                     <Link
//                                       key={itemIndex}
//                                       to={listItem.href}
//                                       className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:shadow-md hover:scale-[1.02] rounded-lg transition-all duration-300 ease-out border border-transparent hover:border-primary-200"
//                                       onClick={() => {
//                                         if (item.name === 'Services') {
//                                           setIsServicesOpen(false)
//                                         } else if (item.name === 'About') {
//                                           setIsAboutOpen(false)
//                                         }
//                                       }}
//                                       role="menuitem"
//                                     >
//                                       {listItem.name}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       to={item.href}
//                       className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                         location.pathname === item.href
//                           ? 'text-primary-600 border-b-2 border-primary-600'
//                           : 'text-gray-700 hover:text-primary-600'
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Desktop CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="tel:+918983626437"
//               className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
//             >
//               <Phone className="w-4 h-4 mr-2" />
//               <span className="text-sm font-medium">+91 8983626437</span>
//             </a>
//             <Link
//               to="/appointment"
//               className="btn-primary flex items-center"
//             >
//               <Calendar className="w-4 h-4 mr-2" />
//               Book Appointment
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//             >
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navigation.map((item) => (
//               <div key={item.name}>
//                 {item.hasDropdown ? (
//                   <div>
//                     <Link
//                       to={item.href}
//                       onClick={() => {
//                         if (item.name === 'Services') {
//                           setIsServicesOpen(!isServicesOpen)
//                         } else if (item.name === 'About') {
//                           setIsAboutOpen(!isAboutOpen)
//                         }
//                         setIsOpen(false)
//                       }}
//                       className={`w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center justify-between ${
//                         location.pathname.startsWith(item.href)
//                           ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
//                           : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
//                       }`}
//                     >
//                       {item.name}
//                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
//                         (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
//                       }`} />
//                     </Link>
                    
//                     {/* Mobile Dropdown */}
//                     {((item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen)) && (
//                       <div className="pl-4 pr-3 py-3 space-y-3">
//                         {item.dropdownItems?.map((category, categoryIndex) => (
//                           <div key={categoryIndex} className="mb-3">
//                             <h4 className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wide border-b border-primary-200 pb-1">
//                               {category.category}
//                             </h4>
//                             <div className="space-y-1">
//                               {(category as any).services?.map((service: any, serviceIndex: any) => (
//                                 <Link
//                                   key={serviceIndex}
//                                   to={service.href}
//                                   className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
//                                   onClick={() => {
//                                     if (item.name === 'Services') {
//                                       setIsServicesOpen(false)
//                                     } else if (item.name === 'About') {
//                                       setIsAboutOpen(false)
//                                     }
//                                     setIsOpen(false)
//                                   }}
//                                 >
//                                   {service.name}
//                                 </Link>
//                               ))}
//                               {(category as any).items?.map((listItem: any, itemIndex: any) => (
//                                 <Link
//                                   key={itemIndex}
//                                   to={listItem.href}
//                                   className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
//                                   onClick={() => {
//                                     if (item.name === 'Services') {
//                                       setIsServicesOpen(false)
//                                     } else if (item.name === 'About') {
//                                       setIsAboutOpen(false)
//                                     }
//                                     setIsOpen(false)
//                                   }}
//                                 >
//                                   {listItem.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
//                       location.pathname === item.href
//                         ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
//                         : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <div className="pt-4 pb-3 border-t border-gray-200">
//               <div className="px-3 space-y-2">
//                 <a
//                   href="tel:+918983626437"
//                   className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
//                 >
//                   <Phone className="w-4 h-4 mr-2" />
//                   <span className="text-sm font-medium">+91 8983626437</span>
//                 </a>
//                 <Link
//                   to="/appointment"
//                   className="btn-primary flex items-center justify-center"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Calendar className="w-4 h-4 mr-2" />
//                   Book Appointment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react'

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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/src/assets/img/Sculpt-Logo-2.png" 
              alt="Sculpt Derma"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <h1 className="text-2xl font-serif font-bold text-gradient hidden" style={{display: 'none'}}>
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
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          if (item.name === 'Services') {
                            setIsServicesOpen(!isServicesOpen)
                          } else if (item.name === 'About') {
                            setIsAboutOpen(!isAboutOpen)
                          }
                        }}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          location.pathname.startsWith(item.href)
                            ? 'text-primary-600 border-b-2 border-primary-600'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                        aria-haspopup="true"
                        aria-expanded={item.name === 'Services' ? isServicesOpen : isAboutOpen}
                        aria-label={`${item.name} menu`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Services Dropdown Menu - Enhanced with Grid Layout */}
                      {item.name === 'Services' && isServicesOpen && (
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl border border-primary-100 rounded-xl mt-2 z-50"
                          style={{ 
                            width: '750px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            maxHeight: '80vh',
                            overflowY: 'auto'
                          }}
                          role="menu"
                        >
                          <div className="p-6 bg-gradient-to-br from-white to-primary-50/30 rounded-xl">
                            <div className="grid grid-cols-2 gap-6">
                              {item.dropdownItems?.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-3">
                                  <h3 className="text-sm font-bold text-primary-600 mb-3 uppercase tracking-wide border-b border-primary-200 pb-2">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-1">
                                    {(category as any).services?.map((service: any, serviceIndex: any) => (
                                      <Link
                                        key={serviceIndex}
                                        to={service.href}
                                        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:shadow-md rounded-lg transition-all duration-300 ease-out border border-transparent hover:border-primary-200"
                                        onClick={() => {
                                          setIsServicesOpen(false)
                                        }}
                                        role="menuitem"
                                      >
                                        {service.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* View All Services Link */}
                            <div className="mt-6 pt-4 border-t border-primary-100 text-center">
                              <Link
                                to="/services"
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                View All Services
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* About Dropdown Menu */}
                      {item.name === 'About' && isAboutOpen && (
                        <div 
                          className="absolute top-full left-0 bg-white shadow-2xl border border-primary-100 rounded-xl mt-2 z-50"
                          style={{ width: '250px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                          role="menu"
                        >
                          <div className="p-4 bg-gradient-to-br from-white to-primary-50/30 rounded-xl">
                            {item.dropdownItems?.map((category, categoryIndex) => (
                              <div key={categoryIndex} className="space-y-1">
                                {(category as any).items?.map((listItem: any, itemIndex: any) => (
                                  <Link
                                    key={itemIndex}
                                    to={listItem.href}
                                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:shadow-md hover:scale-[1.02] rounded-lg transition-all duration-300 ease-out border border-transparent hover:border-primary-200"
                                    onClick={() => {
                                      setIsAboutOpen(false)
                                    }}
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
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
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
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918983626437"
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+91 8983626437</span>
            </a>
            <Link
              to="/appointment"
              className="btn-primary flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setIsServicesOpen(!isServicesOpen)
                        } else if (item.name === 'About') {
                          setIsAboutOpen(!isAboutOpen)
                        }
                      }}
                      className={`w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center justify-between ${
                        location.pathname.startsWith(item.href)
                          ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {((item.name === 'Services' && isServicesOpen) || (item.name === 'About' && isAboutOpen)) && (
                      <div className="pl-4 pr-3 py-3 space-y-3">
                        {item.dropdownItems?.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="mb-3">
                            <h4 className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wide border-b border-primary-200 pb-1">
                              {category.category}
                            </h4>
                            <div className="space-y-1">
                              {(category as any).services?.map((service: any, serviceIndex: any) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    if (item.name === 'Services') {
                                      setIsServicesOpen(false)
                                    } else if (item.name === 'About') {
                                      setIsAboutOpen(false)
                                    }
                                    setIsOpen(false)
                                  }}
                                >
                                  {service.name}
                                </Link>
                              ))}
                              {(category as any).items?.map((listItem: any, itemIndex: any) => (
                                <Link
                                  key={itemIndex}
                                  to={listItem.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    if (item.name === 'Services') {
                                      setIsServicesOpen(false)
                                    } else if (item.name === 'About') {
                                      setIsAboutOpen(false)
                                    }
                                    setIsOpen(false)
                                  }}
                                >
                                  {listItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-3 space-y-2">
                <a
                  href="tel:+918983626437"
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">+91 8983626437</span>
                </a>
                <Link
                  to="/appointment"
                  className="btn-primary flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar