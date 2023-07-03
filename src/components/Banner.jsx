import { useState, useEffect } from "react";
import headerImg from "../assets/img/shosan-pics-small.png";
import TrackVisibility from 'react-on-screen';
import "../../node_modules/animate.css/animate.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';



const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = [" Web Developer", "n App Developer", " Video Editor"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <section id="home" className={`flex flex-row justify-center items-start relative w-full h-[700px]`}>

      <div className="flex justify-around items-center text-white absolute z-[1] top-[15%]">

        <div className="w-[47%] md:ml-4">
          <TrackVisibility>
            {({ isVisible }) => 
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

              <span className="flex items-center tagline rounded-[5px] md:text-[20px] pl-2 py-2">Hi, I&apos;m Kenny</span>

              <h1 className="md:text-[50px] font-semibold md:mb-4">{`I'm a`} 
                <span data-period="1000" className="txt-rotate">
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
              <a href="#connect"
                className="flex items-center font-poppins font-bold tagline2 rounded-[5px] md:text-[16px] 
                  pl-2 py-2"
              >Let&apos;s Connect
              </a>
            </div>}
          </TrackVisibility>
        </div>

        <div className="flex justify-center items-center w-[40%] md:-mt-12">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img" />
              </div>}
          </TrackVisibility>
        </div>

      </div>

    </section>
  );
};


export default Banner;
