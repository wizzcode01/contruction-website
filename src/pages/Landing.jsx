import Hero from "../components/Hero"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Clients from "../components/Values"


const Landing = () => {

    const heroData = {
    headings:  [ 
            {
                heroH1: "Building Dreams, Delivering Excellence", 
                
            },
        ],
    
        ptext: "At EPD CONSTRUCTION SERVICES, we bring innovation, precision, and passion to every project from building design to real estate development and project management.",
        button: ["view my portfolio",  "Hire me"]
   }

    return (
       <>
        <Navbar/>
        <Hero heroData={heroData}/>
        <About/>
        <Clients/>
      </>
    ) 
}

export default Landing