import { FaArrowRight }  from "react-icons/fa"
import {motion} from "framer-motion"
const Values = () => {

   const coreValues = [
      "Professionalism",
      "Diligence",
      "Integrity",
      "Creativity",
      "Accountability"
      ];
    return (
        <div className="bg-gray-950">
        <div className="flex flex-col gap-4 m-5 p-4">
            <h1 className="text-yellow-500 text-2xl font-semibold">Our Core Values</h1>
         <motion.div 
            className="flex flex-col text-white gap-2 text-lg md:text-2xl font-bold"
            >
            {coreValues.map((value, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
                  className="flex gap-5 items-center"
               >
                  <FaArrowRight className="bg-white text-yellow-600 p-1 rounded-full text-2xl" />
                  <h1>{value}</h1>
               </motion.div>
            ))}
            </motion.div> 
      </div>
      </div>
    )
}

export default Values