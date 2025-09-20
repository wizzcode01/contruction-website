import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

// Services/Why Choose Us Section
const ServicesSection = () => {
  const features = [
    {
      title: "Better Understanding of Project Needs",
      description: "Experience excellence in building and civil engineering with Oat Construction Nigeria Ltd. What sets us apart? Unrivaled respect and professionalism, even in the toughest schedules."
    },
    {
      title: "Shorter Construction Times",
      description: "As your Construction Manager in Nigeria, we cover scheduling, budgeting, subcontractor bids, quality control, safety, and total project management. Expertise and value guaranteed."
    },
    {
      title: "Greater Efficiency and Cost Savings",
      description: "Our comprehensive expertise spans the entire project lifecycle. From meticulous planning to flawless execution, we ensure competitive costs without compromising on quality standards."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're your trusted local choice for building and civil engineering. With expertise in diverse designs and a commitment to excellence, we deliver top-tier results in construction and allied fields.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div className="bg-yellow-500 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed italic">
            "Building is not just about bricks and mortar, it's about dreams taking shape, aspirations reaching heights, and legacies being built upon the foundation of passion and perseverance"
          </blockquote>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section
const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your Dream Facility Project?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Talk to Oat Construction today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get a FREE Estimate
          </button>
          <a 
            href="tel:+2348052482318"
            className="border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaPhone />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer Section
const Footer = () => {
  const quickLinks = [
    'Home',
    'About Us', 
    'Services',
    'Project',
    'Internship',
    'Contact Us'
  ]

  const services = [
    'Building Construction',
    'Civil Engineering Works',
    'Property Development / Real Estate',
    'Specialized Construction Services',
    'Development Consultancy',
    'Project Management Services',
    'EPC Projects'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Oat Construction</h3>
              <p className="text-gray-300 leading-relaxed">
                Oat Construction Nigeria Limited is an indigenous Building and Civil Engineering Construction Company capable of handling every conceivable design in building, civil engineering and allied fields.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Contact Info</h4>
              
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">1, Akintoye Street, Off Mcneil Street,</p>
                  <p className="text-gray-300">P.O. Box 2566, Sabo, Lagos.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-500" />
                <div>
                  <p className="text-gray-300">0805 248 2318, 0802 315 3564,</p>
                  <p className="text-gray-300">0814 585 1433</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">info@oatconstruction.com</p>
                  <p className="text-gray-300">oatnigltd_designbuild@yahoo.co.uk</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            ©2025. Oat Construction. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Complete Page Component
const ConstructionPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default ConstructionPage