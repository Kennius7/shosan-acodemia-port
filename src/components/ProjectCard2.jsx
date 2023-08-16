// import { Col } from "react-bootstrap";

const ProjectCard2 = ({ ...project }) => {
  return (
    <div className="w-[31%] h-[300px]">
      <div className="proj-imgbx w-full h-full">
        <img src={project.imgUrl} alt="project pics" className="w-full h-full object-cover" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>
    </div>
  )
}


export default ProjectCard2
