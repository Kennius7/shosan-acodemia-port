import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";



function ConnectButton({buttonText}) {

const { projectRef } = useContext(AppContext);

    const ScrollToProjects = () => {
        projectRef.current.scrollIntoView({ 
            behavior: "smooth",
        });
    }

    return (
        <div id="connect-button" onClick={() => ScrollToProjects()}
            className={`flex justify-start items-center cursor-pointer rounded-[5px] duration-1000
            md:w-[30%] md:h-[50px] sm:w-[45%] sm:h-[50px] xs:w-[40%] xs:h-[40px] w-[50%] h-[40px]`}>

            <div className="font-poppins md:tracking-wider tracking-normal font-bold text-center 
                md:text-[17px] xs:text-[18px] text-[15px] md:ml-[5%] xs:ml-5 ml-3">
                {buttonText}
            </div>

        </div>
    )
}

ConnectButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    }

export default ConnectButton