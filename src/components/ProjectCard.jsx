
const ProjectCard = ({ ...project }) => {

  return (
    <div className="w-[100%] xs:h-[250px] h-[200px] relative">
      <div className="proj-imgbx w-full h-full">
        <img src={project.imgUrl} 
          alt="project pics" 
          className="w-full h-full object-cover" />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>

      <a href={project.url} rel="noreferrer" target="_blank" 
        className="w-full flex justify-center items-center absolute z-2 bottom-1">

        <button className="text-white bg-[#030229]/80 font-poppins rounded-[10px] italic 
          border-2 border-yellow-600/70 px-4 py-1 md:text-[12px] sm:text-[11px] xs:text-[12px] text-[11px]">
          {project.buttonTitle}
        </button>

      </a>

    </div>
  )
}


export default ProjectCard
