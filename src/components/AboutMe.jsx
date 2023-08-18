import { useContext } from "react";
import ConnectButton from "./ConnectButton";
import { AppContext } from "./context/AppContext";
import colorSharpPics1 from "../assets/img/color-sharp.png";
import colorSharpPics2 from "../assets/img/color-sharp2.png";



// eslint-disable-next-line react/prop-types
const AboutMe = () => {
  
  const { aboutRef } = useContext(AppContext);


  return (
    <section id="aboutme" ref={aboutRef}
      className="skill w-full h-[700px] relative flex flex-col justify-center items-center mb-[200px]">

      <div className="flex flex-col justify-center items-start rounded-[64px] bg-black/95 w-[80%] 
        h-[950px] absolute z-[1] -top-[10%] pl-[110px] py-[60px]">

          <div className="flex justify-center items-center mb-10 -mt-[100px]">
            <div className="font-poppins text-center font-bold text-white text-[45px]">
              About me
            </div>
          </div>

          <div className="w-[90%]">
            <div className="w-full text-gray-300 text-start italic text-[17px] mb-6 leading-[25px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Kenny Ogbogu and I am a software 
              programmer, as well as a graphics designer, 
              video editor, and an audio editor. Presently, I am the CEO of Shosan&apos;s Acodemia, a startup 
              for web and software solutions. Shosan&apos;s Acodemia also has an academy for teaching programming 
              courses and trainings for related fields. <br/> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It has always been my passion to create new things, 
              especially things with aesthetic value, hence my love for fine arts, computer based art and designs, 
              and inevitably programming. Programming for me is a fascinating form of creativity, where you can 
              type in lines of code, and voila, something new has been created! <br/> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was also my desire to see others who wanted to 
              express their creativities in these same areas, 
              do so and find expression, that led me and motivated me to establish Shosan&apos;s Acodemia, 
              where people can be taught and guided on the journey to becoming the creative they always 
              wanted to be, especially as programmers. <br/> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also at Shosan&apos;s Acodemia, we offer web 
              development, mobile app development, video creation 
              and graphics design services , etc. at affordable prices tailored to your business needs.
            </div>
          </div>

          <div className="w-full mt-10">
            <ConnectButton 
              mdWidthPercent={40}
              mdHeightPixel={50}
              smWidthPercent={30}
              smHeightPixel={50}
              xsWidthPercent={40}
              xsHeightPixel={50}
              WidthPercent={30}
              HeightPixel={40}
              buttonText="See My Work"
              />
          </div>

      </div>

      <div className="flex justify-between items-center absolute z-2 top-[80%] w-full">
        <img src={colorSharpPics1} alt="colorsharp pics" className="w-[40%] h-[40%]"/>
        <img src={colorSharpPics2} alt="colorsharp pics" className="w-[40%] h-[40%]"/>
      </div>

    </section>
  )
}

export default AboutMe

