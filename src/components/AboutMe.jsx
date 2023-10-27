import { useContext } from "react";
import DownloadButton from "./DownloadButton";
import { AppContext } from "./context/AppContext";



// eslint-disable-next-line react/prop-types
const AboutMe = () => {
  
  const { aboutRef } = useContext(AppContext);


  return (
    <section id="aboutme" ref={aboutRef}
      className="skill w-full relative flex flex-col justify-center items-center md:h-[700px] sm:h-[800px] 
        xs:h-[800px] h-[700px] sm:mb-[200px] xs:mb-[50px] mb-[40px]">

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
                <div className="font-poppins w-full text-gray-300 text-start md:text-[19px] sm:text-[17px] 
                  xs:text-[15px] text-[14px] sm:mb-1 mb-3 md:leading-[28px] xs:leading-[25px] leading-[20px]">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Kenny Ogbogu and I am a front end 
                  React developer majorly, but with proficiency in mobile app development, graphics design, 
                  and video editing. I have about three &#40;3&#41; years of experience in web development 
                  and I have worked with professional in other projects like Matic Drive, FriendnPal etc. <br/> <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It has always been my passion to create new things, 
                  especially things with aesthetic value, hence my love for fine arts, computer based art and designs, 
                  and inevitably programming. Programming for me is a fascinating form of creativity, where you can 
                  type in lines of code, and voila, something new has been created! <br/> <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was also my desire to see others who wanted to 
                  express their creativities in these same areas, 
                  do so and find expression, which has helped me on my journey to becoming a team player, 
                  being able to work together with others while learning from each other. <br/> <br/>
                </div>
              </div>

            </div>

            <div className="w-full md:mt-4 sm:mt-4 mt-2">
              <DownloadButton />
            </div>

          </div>

      </div>

    </section>
  )
}

export default AboutMe

