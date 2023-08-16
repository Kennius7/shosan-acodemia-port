import { useState, useEffect, useContext } from "react";
import headerImg from "../assets/img/shosan-pics-small.png";
import colorSharpPics1 from "../assets/img/color-sharp.png";
import colorSharpPics2 from "../assets/img/color-sharp2.png";
import WhatsappButton from "./WhatsappButton";
import { AppContext } from "./context/AppContext";





const Banner = () => {
  const { homeRef } = useContext(AppContext);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [" Web Developer", "n App Developer", " Video Editor", " Graphic Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  })

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }



  return (
    <section id="home" ref={homeRef}
      className={`flex flex-row justify-center items-start relative w-full h-[700px]`}>

      <div className="flex justify-around items-center text-white absolute z-[1] top-[15%] w-full">

        <div className="w-[47%] md:ml-4">
        
          <div className="w-full">

            <div className="flex justify-start items-center tagline rounded-[5px] w-[40%] h-[55px] ">
              <span className="md:text-[20px] text-center ml-5">
              Hi, I&apos;m Kenny
              </span>
            </div>

            <h1 className="md:text-[50px] font-semibold md:mb-4">{`I'm a`} 
              <span className="txt-rotate">
                <span className="wrap">
                  {text}
                </span>
              </span>
            </h1>

            <p className="w-full md:text-[17px] md:mb-6">
              I love the idea of using software to design solutions and troubleshooting 
              complex problems. I believe in the power of programming to transform and build unique 
              digital experiences.<br /> <br />
              As a team player, and one who loves building new relationships, I enjoy working with other
              professionals who are striving to achieve a common goal/result.
            </p>

            <WhatsappButton 
              mdWidthPercent={60}
              mdHeightPixel={50}
              smWidthPercent={50}
              smHeightPixel={50}
              xsWidthPercent={40}
              xsHeightPixel={50}
              WidthPercent={30}
              HeightPixel={40}
              buttonText="Let's Connect on"
              linkString="#connect"
            />

          </div>

        </div>

        <div className="flex justify-center items-center w-[40%] md:-mt-12 animate-pulse">
          <div className="w-full">
            <img src={headerImg} alt="Header Img" 
              className="w-[98%] h-[98%]" />
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center absolute z-2 top-[70%] w-full">
        <img src={colorSharpPics1} alt="colorsharp pics" className="w-[550px] h-[550px]"/>
        <img src={colorSharpPics2} alt="colorsharp pics" className="w-[550px] h-[550px]"/>
      </div>

    </section>
  );
};


export default Banner;
