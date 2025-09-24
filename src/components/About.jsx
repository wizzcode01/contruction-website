import { motion } from "framer-motion";
import ejiroImg4 from "../assets/DeWatermark.jpeg"

 
const About = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white p-4 sm:p-5">
      <div className="w-full lg:w-[85%] flex justify-center items-center lg:ml-32 lg:m-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
          
          <motion.figure
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            
            className="w-full h-full sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-full lg:h-full flex-shrink-0 mx-auto order-2"
          >
            <img
              src={ejiroImg4}
              alt="Hero"
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
          </motion.figure>

          {/* Text Section with Slide In */}
          <div
        
            className="flex gap-4 flex-col mt-6 sm:mt-10 md:text-left order-1"
          >
          <motion.div
           initial={{opacity:0, y:100}}
           animate={{opacity:1, y:0}}
           transition={{duration:1.5, delay: 1, ease:"easeOut"}}
           viewport={{once:true}}
          className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 leading-snug">
               About us
            </h1>

            <p className="text-gray-700 text-[17px] sm:text-sm md:text-base leading-relaxed">
                Daniel Ejiro Praise is a visionary leader in the construction and real estate industry, serving as the CEO of EPD CONSTRUCTION SERVICES. 
                With years of experience in construction management, building design, project coordination, and real estate development, he brings innovation, precision, and excellence to every project.
            </p>
             

            {/* Button with Hover Animation */}
            <div
              className="flex  md:justify-start items-center cursor-pointer gap-2 mt-4 sm:mt-5"
            >
              <button className="py-2 px-4 sm:py-3 sm:px-5 text-white bg-yellow-600  border-2 rounded-lg hover:bg-yellow-700 hover:text-white transition duration-300 text-sm sm:text-base cursor-pointer">
                LEARN MORE
              </button>
            </div>
          </motion.div>
             <div className="text-left">
                <motion.h2
                  initial={{opacity:0, x:-100}}
                  animate={{opacity:1, x:0}}
                  transition={{duration:1.5, delay: 1, ease:"easeOut"}}
                  viewport={{once:true}}
                className="text-yellow-600 font-bold text-lg">Our Promise</motion.h2>
                <motion.p 
                   initial={{opacity:0, x:-100}}
                  animate={{opacity:1, x:0}}
                  transition={{duration:1, delay: 1, ease:"easeOut"}}
                  viewport={{once:true}}
                className="text-2xl text-gray-700 font-bold">We create enduring works that stand the test of time, reflecting both our dedication and your vision.</motion.p>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;
