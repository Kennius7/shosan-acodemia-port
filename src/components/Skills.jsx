import features01 from "../assets/img/Meter-90.png";
import features02 from "../assets/img/Meter-60.png";
import features03 from "../assets/img/Meter-90.png";
import features04 from "../assets/img/Meter-60.png";
import features05 from "../assets/img/Meter-60.png";
import features06 from "../assets/img/Meter-97.png";
import features07 from "../assets/img/Meter-90.png";
import features08 from "../assets/img/Meter-90.png";
import colorSharpPics1 from "../assets/img/color-sharp.png";
import colorSharpPics2 from "../assets/img/color-sharp2.png";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";





const Skills = () => {

  const { skillRef } = useContext(AppContext);
  
  const featureSlide = [
    {
      id: 0,
      name: "React.js",
      title: "Web Development",
      img: features01,
      percent: "90%",
    },
    {
      id: 1,
      name: "Next.js",
      title: "Web Development",
      img: features02,
      percent: "60%",
    },
    {
      id: 2,
      name: "React Native",
      title: "Mobile App Development",
      img: features03,
      percent: "90%",
    },
    {
      id: 3,
      name: "Node.js",
      title: "Back End Development",
      img: features04,
      percent: "60%",
    },
    {
      id: 4,
      name: "Python",
      title: "Software Programming",
      img: features05,
      percent: "60%",
    },
    {
      id: 5,
      name: "Adobe Premiere Pro",
      title: "Video Content Creation",
      img: features06,
      percent: "97%",
    },
    {
      id: 6,
      name: "Adobe Photoshop",
      title: "Graphics Design",
      img: features07,
      percent: "90%",
    },
    {
      id: 7,
      name: "Adobe After Effects",
      title: "Video Effects Creation",
      img: features08,
      percent: "90%",
    },
  ];

  const splideOptions = {
    // width: "90%",
    perPage: 3,
    perMove: 1,
    type: 'loop',
    keyboard: 'global',
    autoplay: true,
    rewind: true,
    rewindSpeed: "1000",
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 1000,
    easing: "cubic-bezier()",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1000: { perPage: 3},
      500: { perPage: 2},
      100: { perPage: 1},
    },
  };


  return (
    <section ref={skillRef}
      className="skill w-full h-[800px] relative flex flex-col justify-center items-center">

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

                    <div className="xs:w-[90%] w-[96%] flex flex-col justify-center items-center relative">

                      <img src={card.img} alt={card.name} 
                        className="bg-center bg-cover sm:w-[86%] sm:h-[86%] xs:w-[80%] xs:h-[80%] 
                          w-[62%] h-[62%] "/>

                      <div className="text-white absolute z-[2] md:top-[45%] md:right-[41%] 
                        sm:top-[42%] sm:right-[40%] xs:top-[43%] xs:right-[41%] top-[45%] right-[44%]
                        font-semibold italic md:text-[25px] sm:text-[22px] text-[16px]">
                        {card.percent}
                      </div>

                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="font-poppins font-semibold text-center md:text-[25px] sm:text-[22px] 
                        xs:text-[18px] text-[19px] text-grad">
                        {card.name}
                      </div>
                      <div className="font-poppins italic text-center md:text-[18px] sm:text-[16px] xs:text-[14px] 
                        text-[15px] text-dimWhite">
                        {card.title}
                      </div>
                    </div>

                  </div>
                </SplideSlide>
              ))}
          </Splide>

        </div>

      </div>

      <div className="flex justify-between items-center absolute z-2 top-[8%] w-full">
        <img src={colorSharpPics1} alt="colorsharp pics" className="w-[48%] h-[48%]"/>
        <img src={colorSharpPics2} alt="colorsharp pics" className="w-[48%] h-[48%]"/>
      </div>

      <div className="flex justify-between items-center absolute z-2 top-[8%] w-full">
        <img src={colorSharpPics1} alt="colorsharp pics" className="w-[48%] h-[48%]"/>
        <img src={colorSharpPics2} alt="colorsharp pics" className="w-[48%] h-[48%]"/>
      </div>
      
    </section>
  )
}


export default Skills
