import ConnectButton from "./ConnectButton";



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
    <section id="aboutme"
      className="skill w-full h-[550px] relative flex flex-col justify-center items-center">

      <div className="flex flex-col justify-center items-start rounded-[64px] bg-black/90 w-[80%] 
        absolute z-[1] -top-[10%] pl-[150px] py-[60px]">

          <div className="font-poppins text-center font-bold text-white text-[45px] mb-6">
            About me
          </div>

          <div className="w-[80%] text-gray-300 text-start italic text-[17px] mb-6 leading-[25px]">
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

          <div className="w-full mt-6">
            <ConnectButton 
              mdWidthPercent={60}
              mdHeightPixel={50}
              smWidthPercent={50}
              smHeightPixel={50}
              xsWidthPercent={40}
              xsHeightPixel={50}
              WidthPercent={30}
              HeightPixel={40}/>
          </div>

      </div>

    </section>
  )
}

export default AboutMe

