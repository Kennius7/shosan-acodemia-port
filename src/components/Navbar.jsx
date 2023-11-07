import { useState, useEffect } from 'react';
import logo from "../assets/img/shosanacodemia-logo111.png";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import { useContext } from 'react';
import { AppContext } from './context/AppContext';



function Navbar() {
    const { active, setActive, navLinks } = useContext(AppContext);
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const PageScroll = (sectionRef) => {
        sectionRef.current.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
        });
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <nav className={`w-full flex justify-around items-center md:h-[70px] sm:h-[80px] xs:h-[70px] h-[60px]`}>

            <div className="md:w-[25%] sm:w-[50%] xs:w-[48%] w-[50%] flex justify-around items-center">

                <a href="/" className="flex justify-center items-center md:w-[20%] sm:w-[20%] 
                    xs:w-[22%] w-[23%]">
                    <img src={logo} alt="Shosanacodemia logo"
                        className={`${scrolled
                            ? "w-[70%] h-[70%] xs:w-[40px] xs:h-[40px] sm:w-[40%] sm:h-[40%] md:w-[35px] md:h-[35px] duration-1000"
                            : "w-[80%] h-[80%] xs:w-[42px] xs:h-[42px] sm:w-[45%] sm:h-[45%] md:w-[40px] md:h-[40px] duration-1000"} 
                            m-2`}
                    />
                </a>

                <a href="/" className="md:w-[80%] sm:w-[80%] xs:w-[78%] w-[70%]">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className={`${scrolled
                            ? "md:text-[19px] sm:text-[25px] xs:text-[21px] xxs:text-[18px] text-[16px] duration-1000"
                            : "md:text-[22px] sm:text-[30px] xs:text-[22px] xxs:text-[20px] text-[18px] duration-1000"} 
                            font-semibold text-white w-full flex justify-start items-center`}>
                            Shosan&apos;s
                            <span className="text-grad">
                                &nbsp;Acodemia
                            </span>
                        </div>
                    </div>
                </a>

            </div>

            <div className="w-full md:w-full sm:w-[500px] flex flex-1 justify-end items-center">

                <div className="w-[650px] md:flex hidden justify-end items-center">
                    <ul className={`list-none flex justify-center items-center`}>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-semibold cursor-pointer hover:border-b-4 
                                hover:pb-2 hover:border-blue-700 mr-4 flex justify-center items-center
                                ${active === nav.title ? "text-white" : "text-gray-500"} 
                                ${scrolled
                                ? "text-[13px] navText1 duration-1000"
                                : "text-[15px] navText2 duration-1000"}`}
                                onClick={() => {
                                    setActive(nav.title);
                                    PageScroll(nav.ref);
                                    setTimeout(() => {setActive("")}, 5000);
                                }}
                            >
                                { nav.title }
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="md:hidden flex justify-end items-center sm:w-[100px] xs:w-[40px]">
                    <div className="w-full flex justify-end">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className={`${scrolled 
                            ? "sm:w-[30px] sm:h-[30px] xs:w-[22px] xs:h-[22px] w-[20px] h-[20px] duration-1000" 
                            : "sm:w-[35px] sm:h-[35px] xs:w-[25px] xs:h-[25px] w-[22px] h-[22px] duration-1000"}
                            mr-2 xs:mr-2 sm:mr-4 object-contain`}
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"} 
                        p-4 xs:p-4 sm:p-8 bg-black-gradient absolute top-14 xs:top-16 sm:top-20 right-0 
                        w-[40%] xxs:w-[35%] xs:w-[150px] sm:w-[240px] mr-2 sm:mr-4 rounded-[10px] sm:rounded-[18px] sidebar 
                        flex-col opacity-90 z-20`}
                    >
                        <ul className="list-none flex justify-center flex-col mb-1 xs:mb-1 sm:mb-1">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-semibold cursor-pointer text-[11px] 
                                    xxs:text-[12px] xs:text-[15px] sm:text-[18px] 
                                    ${active === nav.title 
                                        ? "text-white" 
                                        : "text-dimWhite"}
                                    ${nav.id === "/connect" 
                                        ? "sm:mb-0 xs:mb-1 mb-0" 
                                        : "sm:mb-[16px] xs:mb-3 mb-2"}`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        PageScroll(nav.ref);
                                        // setTimeout(() => {setActive("")}, 5000);
                                        setToggle(!toggle);
                                    }}
                                >
                                    {nav.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar

