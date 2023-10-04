import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";



const ProjectCard = ({ ...project }) => {
  const {clicked, setClicked} = useContext(AppContext);
  const [btnText, setBtnText] = useState(project.buttonTitle);

  const handleClick = () => {
    if (!clicked) {
      setBtnText("Button clicked");
      setClicked(!clicked);
    } else {
      setBtnText(project.buttonTitle);
      setClicked(!clicked);
    }
  }

  useEffect(()=>{
    console.log("Checking something");
  }, [project])

  return (
    <div className="w-[100%] xs:h-[300px] h-[200px] relative">
      <div className="proj-imgbx w-full h-full">
        <img src={project.imgUrl} 
          alt="project pics" 
          className="w-full h-full object-cover" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button 
          onClick={()=>handleClick()}
          className="text-white bg-black font-poppins rounded-[10px] p-2 absolute z-2 bottom-1">
          {btnText}
        </button>
      </div>
    </div>
  )
}


export default ProjectCard
