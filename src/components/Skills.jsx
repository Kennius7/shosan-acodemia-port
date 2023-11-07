import { skillSetSlide, skillSplideOptions } from "./data";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";



const Skills = () => {

  const { skillRef } = useContext(AppContext);


  return (
    <section ref={skillRef}
      className="skill relative flex flex-col justify-center items-center w-full md:h-[750px] 
        sm:h-[700px] xs:h-[400px] xxs:h-[340px] h-[800px]">

      <div className="flex flex-col justify-center items-center w-full absolute z-[1] md:top-[20%] sm:top-[10%] 
        xs:-top-[4%] -top-[1%]">

        <div className="flex justify-center items-center xs:my-10 my-4 w-full">

          <div className="flex flex-col justify-center items-start md:w-[55%] sm:w-[60%] 
            xs:w-[78%] w-[90%] md:-ml-[20%] sm:-ml-[10%] xs:-ml-[7%] ml-[1%]">

            <h2 className="text-start tracking-widest sm:text-[45px] xs:text-[33px] text-[30px] mb-2">
              Skills
            </h2>
            <p className="text-start font-semibold md:text-[22px] sm:text-[20px] xs:text-[15px] text-[14px] 
              font-poppins tracking-wider">
              These are some of the skills and competencies I have acquired over the years, 
              ranging from web development to graphic design, social media management and others.
            </p>

          </div>

        </div>

        <div className="sm:rounded-[64px] xs:rounded-[50px] rounded-[30px] bg-black/95 sm:w-[80%] w-[95%] 
          md:h-[500px] sm:h-[400px] xs:h-[280px] h-[290px] md:pt-[7%] sm:pt-[5%] xs:pt-[6%] pt-[8%]">

          <Splide options={skillSplideOptions}>
              {skillSetSlide.map((card) => (
                <SplideSlide key={card.id}>
                  <div className="w-full flex flex-col justify-center items-center">

                    <div className="xs:w-[90%] w-[96%] flex flex-col justify-center items-center">
                      <img src={card.img} alt={card.name} 
                        className="bg-center bg-cover sm:w-[86%] sm:h-[86%] xs:w-[80%] xs:h-[80%] 
                          w-[95%] h-[95%]"/>
                    </div>

                    <div className="flex flex-col justify-center items-center xs:mt-0 mt-[20px]">
                      <div className="font-poppins font-semibold text-center md:text-[25px] sm:text-[22px] 
                        xs:text-[18px] text-[16px] text-grad">
                        {card.name}
                      </div>
                      <div className="font-poppins italic text-center md:text-[18px] sm:text-[16px] xs:text-[14px] 
                        text-[13px] text-dimWhite sm:w-full w-[70%]">
                        {card.title}
                      </div>
                    </div>

                  </div>
                </SplideSlide>
              ))}
          </Splide>

        </div>

      </div>
      
    </section>
  )
}


export default Skills
