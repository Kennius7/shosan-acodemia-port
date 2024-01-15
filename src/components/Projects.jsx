import { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import { AppContext } from "./context/AppContext";
import { softwareProjects, contentProjects, projectSplideOptions } from "./data.js";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";




const Projects = () => {

  const [active, setActive] = useState("software");
  const projectButton1 = "software";
  const projectButton2 = "content";
  const projectButton3 = "others";
  const { projectRef } = useContext(AppContext);


  return (
    <section ref={projectRef} 
      className="project bg-black relative pt-[100px] mt-[200px] xs:h-[1000px] h-[800px]">

      <div>
        <div className="flex flex-col justify-center items-center mb-[40px]">
          <h2 className="mb-[20px] sm:text-[45px] xs:text-[40px] text-[35px]">Projects</h2>
          <p className="text-center text-[#B8B8B8] md:text-[20px] sm:text-[20px] 
            xs:text-[18px] text-[16px] md:w-[55%] sm:w-[70%] xs:w-[80%] w-[90%]">
            Over the years, I&apos;ve worked on a number of projects. 
            Below are a list of some of the notable ones I&apos;ve done.
          </p>
        </div>

        <div id="projects-tabs">

          <div className="w-full flex xs:mb-20 mb-10 justify-center items-center text-white font-poppins 
            font-semibold">

            <div className={`${active === projectButton1 
              ? "text-white duration-1000 bg-blue-500" 
              : "text-gray-500 duration-1000 bg-transparent"} 
              flex justify-center items-center border border-blue-500 border-r-0 rounded-l-[12px] 
              hover:bg-blue-500 duration-1000 cursor-pointer md:w-[20%] 
              sm:w-[25%] xs:w-[30%] w-[32%] md:h-[50px] xs:h-[45px] h-[40px]`}
              onClick={() => setActive(projectButton1)}
            >
              <div className="md:text-[18px] sm:text-[16px] xs:text-[14px] text-[10px] font-poppins">
                Software Projects
              </div>
            </div>

            <div className={`${active === projectButton2 
              ? "text-white duration-1000 bg-blue-500" 
              : "text-gray-500 duration-1000 bg-transparent"} 
              flex justify-center items-center border border-blue-500 border-x-0 md:w-[20%] 
              sm:w-[25%] xs:w-[30%] w-[32%] md:h-[50px] xs:h-[45px] h-[40px] 
              hover:bg-blue-500 duration-1000 cursor-pointer`}
              // onClick={() => setActive(projectButton2)}
            >
              <div className="md:text-[18px] sm:text-[16px] xs:text-[14px] text-[10px] font-poppins">
                Content Creation
              </div>
            </div>

            <div className={`${active === projectButton3 
              ? "text-white duration-1000 bg-blue-500" 
              : "text-gray-500 duration-1000 bg-transparent"} 
              flex justify-center items-center border border-blue-500 border-l-0 rounded-r-[12px] 
              hover:bg-blue-500 duration-1000 cursor-pointer md:w-[20%] 
              sm:w-[25%] xs:w-[30%] w-[32%] md:h-[50px] xs:h-[45px] h-[40px]`}
              // onClick={() => setActive(projectButton3)}
            >
              <div className="md:text-[18px] sm:text-[16px] xs:text-[14px] text-[10px] font-poppins">
                Other Projects
              </div>
            </div>

          </div>

          <div id="slideInUp" className="">

            <div className={`${active === projectButton1 ? "block" : "hidden"} 
              w-[98%] m-auto rounded-[10px] border-4 border-slate-800`}>
              <Splide options={projectSplideOptions} 
                className="w-full flex justify-around items-center">
                {
                  softwareProjects.map((project, index) => {
                    return (
                      <SplideSlide key={index}>
                        <ProjectCard {...project}/>
                      </SplideSlide>
                    )
                  })
                }
              </Splide>
            </div>

            <div className={`${active === projectButton2 ? "block" : "hidden"} 
              w-[98%] m-auto rounded-[10px] border-4 border-slate-800`}>
              <Splide options={projectSplideOptions} 
                className="w-full flex justify-around items-center">
                {
                  contentProjects.map((project, index) => {
                    return (
                      <SplideSlide key={index}>
                        <ProjectCard {...project}/>
                      </SplideSlide>
                    )
                  })
                }
              </Splide>
            </div>

            <div className={`${active === projectButton3 ? "block" : "hidden"} 
              w-[98%] m-auto rounded-[10px] border-4 border-slate-800`}>
                <Splide options={projectSplideOptions} 
                  className="w-full flex justify-around items-center">
                  {
                    contentProjects.map((project, index) => {
                      return (
                        <SplideSlide key={index}>
                          <ProjectCard {...project}/>
                        </SplideSlide>
                      )
                    })
                  }
                </Splide>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}



export default Projects
