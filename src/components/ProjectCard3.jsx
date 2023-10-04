

const ProjectCard3 = ({ ...project }) => {

  return (
    <div className="w-[100%] xs:h-[300px] h-[200px]">
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


export default ProjectCard3
