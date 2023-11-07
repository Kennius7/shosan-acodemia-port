import { useState, useEffect, useContext } from "react";
import headerImg from "../assets/img/shosan-pics-small.webp";
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
      className={`flex flex-col justify-center items-center relative w-full sm:h-[700px] xs:h-[1000px] 
        h-[900px]`}>

      <div className="flex sm:flex-row flex-col sm:justify-around justify-center items-center 
        text-white absolute z-[1] xs:top-[15%] top-[10%] w-full">

        <div className="md:w-[46%] sm:w-[46%] w-full md:ml-4 ml-0">
        
          <div className="flex flex-col justify-center items-start sm:w-full w-[90%] xs:ml-4 ml-2">

            <div className="flex justify-start items-center tagline rounded-[5px] md:w-[40%] sm:w-[55%] 
              xs:w-[40%] w-[45%] sm:h-[55px] xs:h-[50px] h-[45px]">
              <span className="text-center md:text-[20px] sm:text-[22px] xs:text-[18px] text-[16px] 
                md:ml-5 sm:ml-3 ml-2">
                Hi, I&apos;m Kenny
              </span>
            </div>

            <h1 className="font-semibold md:tracking-normal sm:tracking-tighter tracking-normal md:text-[50px] 
              sm:text-[45px] xs:text-[43px] text-[30px] md:mb-4 sm:mb-6 xs:mb-3 mb-2 md:w-full sm:w-[150%] w-full">
              {`I'm a`}
              <span className="txt-rotate">
                <span className="wrap">
                  {text}
                </span>
              </span>
            </h1>

            <p className="w-full md:text-[17px] sm:text-[18px] xs:text-[17px] text-[16px] md:mb-10 
              sm:mb-8 xs:mb-8 mb-5">
              I love the idea of using software to design solutions and troubleshooting 
              complex problems. I believe in the power of programming to transform and build unique 
              digital experiences.<br /> <br className="xs:block hidden" />
              As a team player, and one who loves building new relationships, I enjoy working with other
              professionals who are striving to achieve a common goal/result.
            </p>

            <WhatsappButton buttonText="Chat me on WhatsApp" />

          </div>

        </div>

        <div className="flex justify-center items-center md:w-[44%] sm:w-[46%] md:-mt-12 sm:mt-0 xs:mt-4">
          <div className="flex justify-center items-center w-full">
            <img src={headerImg} alt="Header Img" 
              className="md:w-[98%] md:h-[98%] sm:w-[100%] sm:h-[100%] xs:w-[80%] xs:h-[80%] w-[82%] h-[82%]" />
          </div>
        </div>

      </div>

    </section>
  );
};


export default Banner;
