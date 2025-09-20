import { motion } from "framer-motion"

const Services = () => {
  return (
    <div className="min-h-screen grid-cols-1 lg:grid-cols-2 bg-gray-950">
      <div className=" flex flex-col justify-center items-center gap-5 p-5">
      <h1 className="text-gray-100 font-semibold text-2xl mt-10">Our Services</h1>
      <motion.div
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, delay:0.5, ease:"easeOut"}}
       className="w-full h-74 md:w-1/2 border-2 border-yellow-600   flex flex-col justify-center items-center rounded-lg"
      >
        <div className="p-2 flex flex-col items-start gap-3 mt-10">
          <h1 className="text-gray-200 text-[20px] font-semibold">Building Contruction</h1>
          <p className="text-gray-400">We build spaces where dreams thrive, blending innovation and expertise to create lasting structures that inspire generations.</p>
        </div>
      </motion.div>
       <motion.div
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, delay:1, ease:"easeOut"}}
       className="w-full h-74 md:w-1/2 border-2 border-yellow-600  flex flex-col justify-center items-center rounded-lg"
      >
        <div className="p-2 flex flex-col items-start gap-3 mt-10">
          <h1 className="text-gray-200 text-[20px] font-semibold">Development Consultancy​</h1>
          <p className="text-gray-400">Guidance rooted in experience, empowering clients to achieve their development goals with confidence. </p>
        </div>
      </motion.div>
       <motion.div
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, delay:1.5, ease:"easeOut"}}
       className="w-full h-74 md:w-1/2 border-2 border-yellow-600  flex flex-col justify-center items-center rounded-lg"
      >
        <div className="p-2 flex flex-col items-start gap-3 mt-10">
          <h1 className="text-gray-200 text-[20px] font-semibold">Project Management ​</h1>
          <p className="text-gray-400">Efficiency and excellence from start to finish, keeping projects on track and teams aligned with precision and passion. </p>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Services