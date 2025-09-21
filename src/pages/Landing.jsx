import Hero from "../components/Hero"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Clients from "../components/Clients"
import MrsSara1 from "../assets/Clients_Images/MrsSaraOgun.jpg"
import MrsSara2 from "../assets/Clients_Images/MrsSaraOgun2.jpg"
import MrsSara3 from "../assets/Clients_Images/MrsSaraOgun3.jpg"
import MrsSara4 from "../assets/Clients_Images/MrsSaraOgun4.jpg"
import MrsSara5 from "../assets/Clients_Images/MrsSaraOgun5.jpg"
import LetGoDrive1 from "../assets/Clients_Images/LetGoDrive.jpg"
import LetGoDrive2 from "../assets/Clients_Images/LetGoDrive2.jpg"
import LetGoDrive3 from "../assets/Clients_Images/LetGoDrive3.jpg"
import LetGoDrive4 from "../assets/Clients_Images/LetGoDrive4.jpg"
import LetGoDrive5 from "../assets/Clients_Images/LetGoDrive5.jpg"
import ZionChurch from "../assets/Clients_Images/ZionChurch.jpg"
import ZionChurch2 from "../assets/Clients_Images/ZionChurch2.jpg"
import ZionChurch3 from "../assets/Clients_Images/ZionChurch3.jpg"
import ZionChurch4 from "../assets/Clients_Images/ZionChurch4.jpg"
import ZionChurch5 from "../assets/Clients_Images/ZionChurch5.jpg"
import Values from "../components/Values";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose"



const Landing = () => {

    const heroData = {
    headings:  [ 
            {
                heroH1: "Building Dreams, Delivering Excellence", 
                
            },
        ],
    
        ptext: "At EPD CONSTRUCTION SERVICES, we bring innovation, precision, and passion to every project from building design to real estate development and project management.",
        button: ["Need a service?",  "Hire me"]
   }
   const clients = [
      {
        title: "Mrs Sara OGUN STATE",
        cards: {
           icon : MrsSara4,
           image: [MrsSara1, MrsSara2, MrsSara3, MrsSara5]
        } ,
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque corrupti repudiandae nostrum quae sed."


      },
       {
        title: "Let's Go Drive",
        cards: {
           icon : LetGoDrive5,
           image: [LetGoDrive1, LetGoDrive2, LetGoDrive3, LetGoDrive4]
        },
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque corrupti repudiandae nostrum quae sed."


      },
       {
        title: "Zion Highway Living Church",
        cards: {
           icon : ZionChurch2,
           image: [ZionChurch, ZionChurch3, ZionChurch4, ZionChurch5 ]
        },
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque corrupti repudiandae nostrum quae sed."

      }
   ]

    return (
       <>
        <Navbar/>
         <div id="hero"><Hero heroData={heroData}/></div>
         <div id="about"><About/></div>
         <div id="values"><Values/></div>
         <div id="clients"><Clients clients={clients}/></div>
         <div id="services"><Services/></div>
         <div id="whychoose"><WhyChoose/></div>
      </>
    ) 
}

export default Landing