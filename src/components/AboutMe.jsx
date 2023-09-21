import { useContext } from "react";
import DownloadButton from "./DownloadButton";
import { AppContext } from "./context/AppContext";



// eslint-disable-next-line react/prop-types
const AboutMe = () => {
  
  const { aboutRef } = useContext(AppContext);


  return (
    <section id="aboutme" ref={aboutRef}
      className="skill w-full relative flex flex-col justify-center items-center sm:h-[800px] xs:h-[800px] 
        h-[700px] sm:mb-[200px] xs:mb-[50px] mb-[40px]">

      <div className="flex flex-col justify-center items-center sm:rounded-[64px] xs:rounded-[50px] rounded-[30px] 
        bg-black/95 absolute z-[1] sm:top-0 xs:-top-[11%] -top-[15%] sm:py-[10%] py-[8%] sm:w-[80%] xs:w-[90%] 
        w-[95%]">

          <div className="flex flex-col justify-center items-center sm:w-[70%] xs:w-[80%] w-[92%]">

            <div className="flex flex-col justify-center items-center w-full">

              <div className="flex justify-start items-center sm:mb-10 mb-4 w-full">
                <div className="font-poppins text-center font-bold text-white md:text-[45px] 
                  sm:text-[40px] xs:text-[35px] text-[27px] xs:ml-4 ml-2">
                  About me
                </div>
              </div>

              <div className="w-full">
                <div className="w-full text-gray-300 text-start italic sm:text-[17px] text-[15px] 
                  sm:mb-6 mb-3 xs:leading-[25px] leading-[20px]">
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

            </div>

            <div className="w-full sm:mt-10 mt-4">
              <DownloadButton />
            </div>

          </div>

      </div>

    </section>
  )
}

export default AboutMe

