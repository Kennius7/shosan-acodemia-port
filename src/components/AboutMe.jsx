// import colorSharp from "../assets/img/color-sharp.png";



const AboutMe = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  return (
    <section 
      className="skill w-full h-[550px] relative flex flex-col justify-center items-center" 
      id="aboutme">
      <div className="skill-bx flex flex-col justify-center items-center w-[80%] absolute z-[1] -top-[25%]">
          <div className="font-poppins text-center font-bold text-white text-[45px] mb-6">
            About me
          </div>
          <div className="w-[78%] text-gray-300 text-start italic text-[16px] mb-6 leading-[25px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Kenny Ogbogu and I am a software 
            programmer, as well as a graphics designer, 
            video editor, and an audio editor. Presently, I am the CEO of Shosan&apos;s Acodemia, a startup 
            for web and software solutions. Shosan&apos;s Acodemia also has an academy for teaching programming 
            courses and trainings for related fields. <br/> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It has always been my passion to create new things, 
            especially things with aesthetic value, hence my love for fine arts, computer based art and designs, 
            and inevitably programming. Programming for me is a fascinating form of creativity, where you can 
            type in lines of code, and voila, something new has been created! <br/> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was also my desire to see others who wanted to 
            express their creativities in these same areas, 
            do so and find expression, that led me and motivated me to establish Shosan&apos;s Acodemia, 
            where people can be taught and guided on the journey to becoming the creative they always 
            wanted to be, especially as programmers. <br/> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also at Shosan&apos;s Acodemia, we offer web 
            development, mobile app development, video creation 
            and graphics design services , etc. at affordable prices tailored to your business needs.
          </div>
          <a href="#connect"
            className="flex items-center font-poppins font-bold tagline2 rounded-[5px] md:text-[16px] 
              pl-2 py-2"
          >Let&apos;s Connect
          </a>
      </div>
    </section>
  )
}

export default AboutMe

