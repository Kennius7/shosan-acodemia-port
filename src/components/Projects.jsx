import { useState } from "react";
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import projImg1 from "../assets/projectImages/Vampfi.jpg";
import projImg2 from "../assets/projectImages/Globattle.jpg";
import projImg3 from "../assets/projectImages/arcromride.jpg";
import projImg4 from "../assets/projectImages/1.jpg";
import projImg5 from "../assets/projectImages/2.jpg";
import projImg6 from "../assets/projectImages/4.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const softwareProjects = [
    {
      title: "Vamp Facility Intelligence Website",
      description: "Front End Development and Design",
      imgUrl: projImg1,
    },
    {
      title: "Glo Dance Battle Of The Year Website",
      description: "Front End Development and Design",
      imgUrl: projImg2,
    },
    {
      title: "Arcromride App",
      description: "Mobile App Development",
      imgUrl: projImg3,
    },
  ];

  const contentProjects = [
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const [active, setActive] = useState("software");
  const projectButton1 = "software";
  const projectButton2 = "content";
  const projectButton3 = "others";




  return (
    <section className="project" id="projects">

      <div>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Over the years, I&apos;ve worked on several projects ranging from software development 
              projects, all the way to content creation, and even Microwave telecoms projects.
              Below are a list of some of the notable ones I&apos;ve done. 
            </p>

            <div id="projects-tabs">

              <div className="w-full flex mb-20 justify-center items-center text-white font-poppins 
                font-semibold">

                <div className={`${active === projectButton1 
                  ? "text-white duration-1000" 
                  : "text-gray-500 duration-1000"} 
                  flex justify-center items-center border border-blue-500 border-r-0 rounded-l-[25px] 
                  hover:bg-blue-500 duration-1000 cursor-pointer w-[20%] h-[50px]`}
                  onClick={() => setActive(projectButton1)}
                >
                  <div>Software Project</div>
                </div>
                
                <div className={`${active === projectButton2 
                  ? "text-white duration-1000" 
                  : "text-gray-500 duration-1000"} 
                  flex justify-center items-center border border-blue-500 border-x-0 w-[20%] h-[50px] 
                  hover:bg-blue-500 duration-1000 cursor-pointer`}
                  onClick={() => setActive(projectButton2)}
                >
                  <div>Content Creation</div>
                </div>

                <div className={`${active === projectButton3 
                  ? "text-white duration-1000" 
                  : "text-gray-500 duration-1000"} 
                  flex justify-center items-center border border-blue-500 border-l-0 rounded-r-[25px] 
                  hover:bg-blue-500 duration-1000 cursor-pointer w-[20%] h-[50px]`}
                  onClick={() => setActive(projectButton3)}
                >
                  <div>Other Projects</div>
                </div>

              </div>

              <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                <div className={`${active === projectButton1 ? "block" : "hidden"}`}>
                  <div className="w-full flex justify-around items-center">
                    {
                      softwareProjects.map((project, index) => {
                        return (<ProjectCard1 key={index} {...project}/>)
                      })
                    }
                  </div>
                </div>

                <div className={`${active === projectButton2 ? "block" : "hidden"}`}>
                  <div className="w-full flex justify-around items-center">
                    {
                      contentProjects.map((project1, index1) => {
                        return (
                          <ProjectCard2
                            key={index1}
                            {...project1}
                            />
                        )
                      })
                    }
                  </div>
                </div>

                <div className={`${active === projectButton3 ? "block" : "hidden"}`}>
                  <p>Project listings coming soon.</p>
                </div>

              </div>

            </div>
          </div>}
        </TrackVisibility>
      </div>

    </section>
  )
}



export default Projects
