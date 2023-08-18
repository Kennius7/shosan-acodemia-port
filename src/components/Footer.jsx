import facebookIcon from "../assets/img/Mfacebook.svg";
import gitHubIcon from "../assets/img/github4.svg";
import instagramIcon from "../assets/img/Minstagram.svg";
import linkedInIcon from "../assets/img/Mlinkedin.svg";
import whatsappIcon from "../assets/img/whatsapp-icon1.png";
import phoneIcon from "../assets/img/phone-icons-white.png";
import emailIcon from "../assets/img/email-icons-white.png";



function Footer() {
    return (
        <footer className="w-full flex justify-center items-center bg-gray-900">

            <div className="w-full flex flex-col xs:justify-center justify-start items-center pt-6 px-4 
                xs:px-4 sm:px-10 md:px-10">

                <div className="w-full flex justify-start">
                    <div className="w-full flex flex-row justify-between items-start ss:mb-8 ss:mt-12 sm:mt-4">

                        <div className="xs:flex hidden flex-col xs:max-w-[180px] sm:max-w-[300px] 
                            md:max-w-[300px]">
                            <a href="/">
                                <div className={`text-gray-400 font-bold md:text-[16px] sm:text-[25px] 
                                    xs:text-[17px] text-[16px] xs:mb-2 sm:mb-4`}>Shosan&apos;s
                                    <span className={`text-grad ss:mb-8`}> Acodemia</span>
                                </div>
                            </a>
                            <p className={`w-full text-gray-400 leading-[25px] xs:leading-[22px] 
                                sm:leading-[30px] md:leading-[25px] text-[14px] xs:text-[13px] sm:text-[20px] md:text-[14px]`}>
                                Let&apos;s help you design, develop and craft out efficient online platforms, 
                                graphics designs, social media marketing strategies, landing pages, etc. for 
                                your business, startup, concept or marketing strategy.
                            </p>
                        </div>

                        <div className="flex flex-col max-w-[140px] xs:max-w-[180px] sm:max-w-[300px] 
                            md:max-w-[400px]">
                            <h2 className={`text-gray-400 font-bold text-[16px] xs:text-[17px] 
                            sm:text-[25px] md:text-[16px] mb-2 xs:mb-2 sm:mb-4`}>Information</h2>
                            <ul className="list-unstyled flex flex-col text-gray-400 sm:text-[20px] 
                            text-[14px] xs:text-[13px] md:text-[15px]">
                                <li className="mb-0 xs:mb-1 sm:mb-1 md:mb-1"><a href="#aboutme">About Me</a></li>
                                <li className="mb-0 xs:mb-1 sm:mb-1 md:mb-1"><a href="#skills">My Skills</a></li>
                                <li className="mb-0 xs:mb-1 sm:mb-1 md:mb-1"><a href="#projects">Personal Projects</a></li>
                                <li className="mb-0 xs:mb-1 sm:mb-1 md:mb-1"><a href="#connect">Let&apos;s Connect</a></li>
                            </ul>
                        </div>

                        <div className={`flex flex-col justify-start max-w-[180px] xs:max-w-[180px] 
                            sm:max-w-[300px] md:max-w-[400px]`}>

                            <h2 className={`text-gray-400 font-bold sm:mb-6 xs:mb-4 mb-3 sm:text-[25px] 
                            xs:text-[17px] md:text-[16px] text-[16px]`}>
                                Have Questions?
                            </h2>

                            <ul className="w-full text-gray-400 flex flex-1 flex-col justify-start">
                                <li className="sm:mb-2 ss:mb-4">
                                    <a href="https://wa.me/+2348055549979" className="sm:mb-0 mb-2 flex flex-row justify-start items-center">
                                        <img src={phoneIcon} alt="phone" className="w-[15px] h-[15px] 
                                        ss:w-[20px] ss:h-[20px]"/>
                                        <span className="md:text-[15px] sm:text-[20px] xs:text-[13px] 
                                        text-[14px] pl-1">+2348055549979</span>
                                    </a>
                                </li>
                                <li className="sm:mb-2 ss:mb-2">
                                    <a href="mailto:shinjinchu@gmail.com" 
                                        className="flex flex-row justify-start items-center">
                                        <img src={emailIcon} alt="email" className="w-[15px] 
                                        h-[15px] ss:w-[20px] ss:h-[20px]"/>
                                        <span className={`md:text-[15px] sm:text-[20px] xs:text-[13px] 
                                        text-[15px] tracking-[-1px] xs:tracking-[0px] pl-1`}>shinjinchu@gmail.com</span>
                                    </a>
                                </li>

                                <ul className="xs:flex hidden flex-row justify-around items-center mt-4 
                                    xs:mt-2 sm:mt-1">
                                    <li>
                                        <a href="https://www.facebook.com" 
                                            target="_blank" rel="noreferrer">
                                            <img src={facebookIcon} alt="FB" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Kennius7" 
                                            target="_blank" rel="noreferrer">
                                            <img src={gitHubIcon} alt="Tw" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/+2348055549979" 
                                            target="_blank" rel="noreferrer">
                                            <img src={whatsappIcon} alt="Wh" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" 
                                            target="_blank" rel="noreferrer">
                                            <img src={instagramIcon} alt="IG" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/kenny-ogbogu-b6710137" 
                                            target="_blank" rel="noreferrer">
                                            <img src={linkedInIcon} alt="In" 
                                                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] 
                                                md:w-[25px] md:h-[25px]"/>
                                        </a>
                                    </li>
                                </ul>
                            </ul>

                        </div>

                    </div>
                </div>

                <div className="w-full flex flex-col justify-start">
                    <ul className="xs:hidden flex flex-row justify-start items-center mt-6 mb-2 w-full">
                        <li className="mr-4"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="FB" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://github.com/Kennius7" target="_blank" rel="noreferrer"><img src={gitHubIcon} alt="Tw" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://wa.me/+2348055549979" target="_blank" rel="noreferrer"><img src={whatsappIcon} alt="Wh" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="IG" className="w-[30px] h-[30px]" /></a></li>
                        <li className="mr-4"><a href="https://www.linkedin.com/company/maticdrive" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="In" className="w-[30px] h-[30px]" /></a></li>
                    </ul>

                    <div className="w-full flex xs:justify-center justify-start mb-2 xs:mb-2 sm:mb-6 md:mb-3 
                        -mt-1 xs:mt-6 sm:mt-4 md:mt-1">
                        <div className="w-[300px] xs:w-[400px] sm:w-[600px] text-gray-400 text-start 
                            xs:text-center text-[14px] xs:text-[14px] sm:text-[22px] md:text-[15px]">
                            Copyright &copy; All rights reserved | Shosan&apos;s Acodemia.
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer