import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion"

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're your trusted local choice for building and civil engineering. With expertise in diverse designs and a commitment to excellence, we deliver top-tier results in construction and allied fields.
          </p>
        </motion.div>

        {/* Animated Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-600 transition-colors duration-300"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Inspirational Quote */}
        <motion.div 
          className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center"
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <blockquote className="text-xl md:text-2xl font-medium text-yellow-500 leading-relaxed italic">
            "Building is not just about bricks and mortar, it's about dreams taking shape, aspirations reaching heights, and legacies being built upon the foundation of passion and perseverance"
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Call to Action Section
const CallToActionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          Ready to start your Dream Facility Project?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-300"
          variants={itemVariants}
        >
          Talk to Oat Construction today.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get a FREE Estimate
          </motion.button>
          <motion.a 
            href="tel:+2348052482318"
            className="border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "white",
              color: "#1f2937"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone />
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Animated Footer Section
const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Services', 'Project', 'Internship', 'Contact Us'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Animated Company Info */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            variants={sectionVariants}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-yellow-500 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                EPD CONSTRUCTION SERVICES
              </motion.h3>
              <p className="text-gray-300 leading-relaxed">
                EPD Construction is an indigenous Building and Civil Engineering Construction Company capable of handling every conceivable design in building, civil engineering and allied fields.
              </p>
            </div>

            {/* Animated Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Contact Info</h4>
              
              <motion.div 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Ozoro Delta State</p>
                  <p className="text-gray-300">Kwala, Delta.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className="text-yellow-500" />
                <div>
                  <p className="text-gray-300">0906 468 3506, ,0912 252 0791</p>
                 
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className="text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">epdconstruction1@gmail.com</p>
                </div>
              </motion.div>
            </div>

            {/* Animated Social Media */}
            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "#eab308"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Quick Links */}
          <motion.div variants={sectionVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <motion.a 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Animated Our Services */}
          <motion.div variants={sectionVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <motion.a 
                    href="#"
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Copyright */}
      <motion.div 
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            ©2025. EPD CONSTRUCTION. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

// Complete Animated Page Component
const ConstructionPage = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesSection />
      <CallToActionSection />
      <Footer />
    </motion.div>
  )
}

export default ConstructionPage