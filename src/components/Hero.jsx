import HouseImg1 from "../assets/HouseImg1.jpg";
import HouseImg2 from "../assets/HouseImg2.jpg";
import HouseImg3 from "../assets/HouseImg3.jpg";
import HouseImg4 from "../assets/HouseImg4.jpg";
import HouseImg5 from "../assets/HouseImg5.jpg";
import HouseImg6 from "../assets/HouseImg6.jpg";
import HouseImg7 from "../assets/HouseImg7.jpg";
import HouseImg8 from "../assets/HouseImg8.jpg";
import HouseImg9 from "../assets/HouseImg9.jpg";
import HouseImg10 from "../assets/HouseImg10.jpg";
import HouseImg11 from "../assets/HouseImg11.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence }  from "framer-motion"

const Hero = ({ heroData }) => {


  const [currentImage, setCurrentImage] = useState(0)

  const images = [ HouseImg2, HouseImg3, HouseImg4, HouseImg5, HouseImg6, HouseImg7, HouseImg8, HouseImg9, HouseImg10, HouseImg11]
   
  //logic to change image after even 3secs 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])



  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-gray-500 ">
      <div className="absolute z-20 inset-0 bg-cover bg-center bg-no-repeat opacity-60 blur-sm bg-white/20 backdrop-blur-md" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      <div className="relative z-20 flex flex-col justify-center items-center mx-auto opacity-80">
        {/* Left Section */}
        <div className="flex flex-col gap-4 justify-center items-center lg:w-4xl w-full md:w-full p-5 opacity-100 mt-32 ">
          <small className="text-xs sm:text-sm text-gray-600">
            {/* <i>Hello There</i> */}
          </small>
          {heroData.headings.map((data, id) => ( 
          <h1 
          key={id}
          className="text-3xl lg:text-5xl text-center sm:text-3xl md:text-4xl font-bold leading-tight text-yellow-500">
             {data.heroH1}{" "}
              {data.heroSpan && (
                <span className="text-yellow-500 decoration-yellow-600">
                  {data.heroSpan}
                </span>
              )}
            
          </h1>
            ))}
          {/* Paragraph*/}
          <p
            className="lg:text-lg text-[19px] font-semibold text-center sm:text-sm md:text-base max-w-full md:w-[90%] text-white"
          >
            {heroData.ptext}
          </p>
       
          {/* Buttons Animation */}
          <div className="flex gap-2 flex-wrap items-start  lg:justify-start">
            {heroData.button.map((list, id) => (
              <button
                key={id}
                className={`py-2 px-4 sm:py-3 sm:px-5 text-lg sm:text-sm md:text-base transition-all ease-in-out duration-150 rounded-4xl
                  ${
                    id === 0
                      ? "hover:bg-white hover:text-yellow-600 hover:border-yellow-600 hover:border-2 text-white bg-yellow-600 hover:font-bold"
                      : "bg-white text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold"
                  }`}
              >
                {list}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
