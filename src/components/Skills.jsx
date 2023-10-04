import { featureSlide } from "./data";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";



const Skills = () => {

  const { skillRef } = useContext(AppContext);

  const splideOptions = {
    // width: "90%",
    perPage: 4,
    perMove: 1,
    type: 'loop',
    speed: 1000,
    keyboard: 'global',
    autoplay: true,
    autoplaySpeed: 3000,
    rewind: true,
    rewindSpeed: 2000,
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 4000,
    easing: "linear",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1000: { perPage: 4},
      580: { perPage: 3},
      300: { perPage: 2},
      100: { perPage: 1},
    },
  };


  return (
    <section ref={skillRef}
      className="skill w-full md:h-[800px] sm:h-[700px] xs:h-[400px] xxs:h-[380px] h-[800px] relative flex flex-col justify-center items-center">

      <div className="flex flex-col justify-center items-center w-full absolute z-[1] sm:top-[10%] 
        xs:-top-[4%] -top-[1%]">

        <div className="flex flex-col justify-center sm:items-center items-start my-10 md:w-[43%] sm:w-[60%] 
          xs:w-[78%] w-[90%] sm:ml-0 ml-1">

          <h2 className="sm:text-center text-start tracking-widest sm:text-[45px] xs:text-[33px] 
            text-[30px] mb-2">
            Skills
          </h2>
          <p className="sm:text-center text-start font-semibold sm:text-[22px] xs:text-[16px] text-[17px] 
            font-poppins tracking-wider italic">
            These are some of the skills and competencies I have acquired over the years
          </p>

        </div>

        <div className="sm:rounded-[64px] xs:rounded-[50px] rounded-[30px] bg-black/95 sm:w-[80%] w-[95%] 
          md:h-[500px] sm:h-[400px] xs:h-[280px] h-[290px] md:pt-[7%] sm:pt-[5%] xs:pt-[6%] pt-[8%]">

          <Splide options={splideOptions}>
              {featureSlide.map((card) => (
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
