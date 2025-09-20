import { FaArrowRight }  from "react-icons/fa"

const Values = () => {
    return (
        <div className="bg-gray-950">
        <div className="flex flex-col gap-4 m-5 p-4">
            <h1 className="text-yellow-500 text-2xl font-semibold">Our Core Values</h1>
            <div className="flex flex-col text-white gap-2 text-lg md:text-2xl font-bold">
              <div className="flex gap-5 items-center">
                 <FaArrowRight className="bg-white text-yellow-600 p-1 rounded-full text-2xl"/>
                 <h1>Professionalism</h1>
              </div>
               <div className="flex gap-5 items-center">
                <FaArrowRight  className="bg-white text-yellow-600 p-1 rounded-full text-2xl"/>
                 <h1>Diligence</h1>
              </div>
               <div className="flex gap-5 items-center">
                 <FaArrowRight  className="bg-white text-yellow-600 p-1 rounded-full text-2xl"/>
                 <h1>Integrity</h1>
              </div>
               <div className="flex gap-5 items-center">
                <FaArrowRight  className="bg-white text-yellow-600 p-1 rounded-full text-2xl"/>
                 <h1>Creativity</h1>
              </div>
               <div className="flex gap-5 items-center">
                <FaArrowRight  className="bg-white text-yellow-600 p-1 rounded-full text-2xl"/>
                 <h1>Accountability</h1>
              </div>
            </div>
      </div>
      </div>
    )
}

export default Values