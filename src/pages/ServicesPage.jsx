import { motion } from "framer-motion"
import { useState } from "react"

const ServicesPage = () => {
  return (
     <div className="text-center">
      <motion.div
       initial={{opacity:0, y:20}}
       animate={{opacity:1, y:0}}
       transition={{duration:1, ease:"linear"}}
       className="w-full md:w-1/ text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, perferendis reiciendis consequuntur dolorum ex facilis corporis adipisci cumque saepe rem, est culpa eum ducimus accusantium voluptas earum. Et, necessitatibus sit!
      </motion.div>
    </div>
  )
}

export default ServicesPage