import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
          

const Navbar = () => {

    
   const [isOpen, setIsOpen] = useState(false)     
    const toggler = () => {
    if(isOpen === false){
       setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
  }
    return (
    <div>  
    <div className="h-auto relative w-full overflow-x-hidden bg-gray-950">
          <div className="h-auto flex justify-between items-center p-10 ">
                    <span className=" text-white font-bold lg:text-lg sm:text-base md:text-lg text-sm">EPD CONSTRUCTION</span>
                
                    {/* Desktop links */}
                    <div className="hidden md:flex justify-center items-center sm:gap-3 md:gap-4 lg:gap-8 text-white font-semibold cursor-pointer text-xs sm:text-sm md:text-base ">
                        <Link to="/" className="hover:text-gray-100 transition-all duration-500 ease-in-out text-amber-500 hover:bg-blue-950 transition-all duration-200 ease-out py-2 px-3 rounded-3xl">Home</Link>
                        <Link to="/services" className="hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Services</Link>
                        <Link to="/" className="hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">About</Link>
                        <Link to="/AdminLogin" className=" hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Projects</Link>
                        <Link to="/AdminLogin" className=" hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Testimonials</Link>
                    </div>
                    <button to="/login" className="hidden md:flex text-sm bg-white font-bold text-yellow-600  px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-3xl
                    hover:bg-yellow-600 hover:border-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Contact Me</button>
              
                     {/* toggler for mobile */}
                    <div className="md:hidden text-2xl cursor-pointer z-30" onClick={toggler}>
                      {isOpen ? <FaTimes className="text-yellow-600"/> : <FaBars className="text-yellow-600"/>}
                    </div>
            </div>   
         
    </div>    
         {isOpen &&(   
                <div 
                //   key="mobile-menu"
                // initial={{y:-50, opacity:0}}
                // animate={{y:0, opacity:1}}
                // exit={{y:-50, opacity:0}}
                // transition={{duration:0.3, ease:"easeInOut"}}
                className={`md:hidden absolute top-10 left-0 flex flex-col justify-between items-start text-white font-semibold cursor-pointer gap-4 text-lg mt-4
                w-full bg-gray-950 bg-opacity-95 z-50 py-6 p-5 transition-all duration-500 ease-in-out ${isOpen? "top-20 opacity-100 translate-y-0" : "top-0 opacity-0 -translate-y-full pointer-events-none"}`}
                 style={{ height: "auto", maxHeight: "calc(100vh - 5rem)", overflowY: "auto" }}
                >
                    <Link to="/" className="hover:text-gray-100 transition-all duration-500 ease-in-out text-amber-500 hover:bg-blue-950 py-2 px-3 rounded-3xl">Home</Link>
                    <Link to="/services" className="hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Services</Link>
                    <Link to="/" className="hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">About</Link>
                    <Link to="/AdminLogin" className=" hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Projects</Link>
                    <Link to="/AdminLogin" className=" hover:text-gray-100 transition-all duration-200 ease-out hover:bg-blue-950  py-2 px-3 rounded-3xl">Testimonials</Link>
                    <button to="/login" className=" text-lg bg-white font-bold text-yellow-600  px-5 sm:px-3 md:px-4 py-3 sm:py-1 md:py-2 rounded-lg
                    hover:bg-yellow-600 hover:border-2 hover:text-white transition-all duration-500 ease-in-out cursor-pointer">Contact Me</button>   
             </div> 
              )}     
    </div>          
    
    )
}
export default Navbar
          