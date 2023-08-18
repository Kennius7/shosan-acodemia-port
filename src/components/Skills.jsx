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
      name: "Reactjs",
      title: "Web Development",
      img: features01,
      percent: "90%",
    },
    {
      id: 1,
      name: "Nextjs",
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
      name: "Nodejs",
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
    isNavigation: true,
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
      700: { perPage: 2},
      400: { perPage: 2},
      200: { perPage: 1},
    },
};



  return (
    <section ref={skillRef}
      className="skill w-full h-[780px] relative flex flex-col justify-center items-center">

      <div className="w-full absolute z-[1] top-[10%]">

        <div className="flex flex-col justify-center items-start my-10 pl-[200px]">
          <h2 className="text-start tracking-widest text-[45px] mb-2">Skills</h2>
          <p className="text-start font-semibold text-[25px] font-poppins tracking-wider">
            These are some of my skills and competencies acquired over the years
          </p>
        </div>

        <div className="rounded-[64px] bg-black/95 w-[80%] h-[500px] m-auto pt-24">
          <Splide options={splideOptions}>
              {featureSlide.map((card) => (
                <SplideSlide key={card.id}>
                  <div className="w-full flex flex-col justify-center items-center">

                    <div className="w-[90%] flex flex-col justify-center items-center relative">

                      <img 
                        src={card.img} 
                        alt={card.name} 
                        className="w-[86%] h-[86%] bg-center bg-cover"/>

                      <div className="absolute z-[2] top-[45%] right-[41%] text-white 
                        font-semibold italic text-[25px]">
                        {card.percent}
                      </div>

                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="font-poppins font-semibold text-center text-[25px] text-grad">
                        {card.name}
                      </div>
                      <div className="font-poppins italic text-center text-[18px] text-dimWhite">
                        {card.title}
                      </div>
                    </div>

                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </div>

      </div>

      <div className="flex justify-between items-center absolute z-2 top-[55%] w-full">
        <img src={colorSharpPics1} alt="colorsharp pics" className="w-[40%] h-[40%]"/>
        <img src={colorSharpPics2} alt="colorsharp pics" className="w-[40%] h-[40%]"/>
      </div>
      
    </section>
  )
}


export default Skills
