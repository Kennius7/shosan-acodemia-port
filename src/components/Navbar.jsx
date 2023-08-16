import { useState, useEffect } from 'react';
import logo from "../assets/img/Shosan-Acodemia-Logo-small2.png";
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
        <nav className={`w-full flex justify-around items-center`}>

            <div className="md:w-[300px] sm:w-[350px] xs:w-[280px] w-[170px] flex justify-start items-center">
                <a href="/" className='flex justify-center items-center md:w-[80px] sm:w-[150px] xs:w-[80px] w-[80px]'>
                    <img src={logo} alt="Maticdrive logo"
                        className={`${scrolled
                            ? "w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] sm:w-[80px] sm:h-[80px] md:w-[38px] md:h-[38px] duration-1000"
                            : "w-[50px] h-[50px] xs:w-[55px] xs:h-[55px] sm:w-[90px] sm:h-[90px] md:w-[45px] md:h-[45px] duration-1000"} 
                        m-2`}
                    />
                </a>
                <a href="/">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className={`${scrolled
                            ? "md:text-[19px] sm:text-[35px] xs:text-[20px] text-[17px] duration-1000"
                            : "md:text-[22px] sm:text-[40px] xs:text-[22px] text-[20px] duration-1000"} 
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
                            ? "sm:w-[36px] sm:h-[36px] xs:w-[20px] xs:h-[20px] w-[18px] h-[18px] duration-1000" 
                            : "sm:w-[40px] sm:h-[40px] xs:w-[22px] xs:h-[22px] w-[22px] h-[22px] duration-1000"}
                            mr-2 xs:mr-2 sm:mr-4 object-contain`}
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"} 
                        p-4 xs:p-4 sm:p-10 bg-black-gradient absolute top-14 xs:top-16 sm:top-24 right-0 
                        w-[120px] xs:w-[150px] sm:w-[260px] mr-2 sm:mr-4 rounded-[10px] sm:rounded-[15px] sidebar 
                        flex-col opacity-90 z-20`}
                    >
                        <ul className="list-none flex justify-center flex-col mb-1 xs:mb-1 sm:mb-2">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-semibold cursor-pointer mb-2 xs:mb-3 
                                    sm:mb-[20px] text-[15px] xs:text-[17px] sm:text-[30px] 
                                    ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`${nav.id}`}>{nav.title}</a>
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

