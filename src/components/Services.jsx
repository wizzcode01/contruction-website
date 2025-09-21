import { motion } from "framer-motion";
import services1 from "../assets/services-img.avif";
import services2 from "../assets/services-img2.avif";
import services3 from "../assets/services-img3.avif";

const Services = () => {
  const services = [
    {
      title: "Building Construction",
      description:
        "We build spaces where dreams thrive, blending innovation and expertise to create lasting structures that inspire generations.",
      image: services1,
      delay: 0.2
    },
    {
      title: "Development Consultancy",
      description:
        "Guidance rooted in experience, empowering clients to achieve their development goals with confidence.",
      image: services2,
      delay: 0.4
    },
    {
      title: "Project Management",
      description:
        "Efficiency and excellence from start to finish, keeping projects on track and teams aligned with precision and passion.",
      image: services3,
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-gray-100 font-bold text-4xl lg:text-5xl">Our Services</h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: service.delay, ease: "easeOut" }}
              className="group relative h-80 lg:h-96 border-2 border-yellow-600 rounded-xl overflow-hidden hover:border-yellow-500 transition-colors duration-300"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-gray-100 text-xl lg:text-2xl font-bold leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-4 group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-semibold text-sm lg:text-base transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-600/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-8">Ready to bring your vision to life?</p>
          <button 
           onClick={() => window.open("mailto:epdconstruction1@gmail.com?subject=Service%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20services.", "_blank")}
          className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
