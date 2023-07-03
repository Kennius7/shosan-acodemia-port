import features01 from "../assets/img/Meter-90.png";
import features02 from "../assets/img/Meter-60.png";
import features03 from "../assets/img/Meter-90.png";
import features04 from "../assets/img/Meter-60.png";
import features05 from "../assets/img/Meter-60.png";
import features06 from "../assets/img/Meter-97.png";
import features07 from "../assets/img/Meter-90.png";
import features08 from "../assets/img/Meter-90.png";





const Skills = () => {
  
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


  return (
    <section 
      className="skill w-full h-[780px] relative flex flex-col justify-center items-center" 
      id="skills"
    >
      <div className="skill-bx w-[90%] absolute z-[1] top-[10%]">
        <div className="-mt-6 -mb-6">
          <h2 className="tracking-widest">Skills</h2>
          <p className="text-[16px] italic tracking-wider">These are some of my skills and competencies acquired over the years</p>
        </div>

        <div className="w-full flex-wrap flex justify-center items-center">
          {featureSlide.map((card) => (
              <div key={card.id} className="w-[20%] flex flex-col justify-center items-center m-5">

                <div className="w-full flex flex-col justify-center items-center relative">
                  <img src={card.img} alt={card.name} className="w-[95%] h-[95%] bg-center bg-cover" />
                  <div className="absolute z-[2] top-[45%] right-[40%] text-white font-semibold tracking-wider">
                    {card.percent}
                  </div>
                </div>
                
                <div className="flex flex-col w-[300px] justify-center items-center">
                  <div className="font-poppins font-semibold text-center text-[17px] text-grad">
                    {card.name}
                  </div>
                  <div className="font-poppins italic text-center text-[13px] text-dimWhite w-[50%]">
                    {card.title}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}


export default Skills
