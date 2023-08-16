/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";




function ConnectButton({
    mdWidthPercent=40, 
    mdHeightPixel=50,
    smWidthPercent, 
    smHeightPixel,
    xsWidthPercent, 
    xsHeightPixel,
    WidthPercent, 
    HeightPixel,
    buttonText,
    }) {

const { projectRef } = useContext(AppContext);

    const ScrollToProjects = () => {
        projectRef.current.scrollIntoView({ 
            behavior: "smooth",
        });
    }

    return (
        <div id="connect-button" onClick={() => ScrollToProjects()}
            className={`flex justify-start items-center cursor-pointer rounded-[5px] duration-1000
            md:w-[${mdWidthPercent}%] md:h-[${mdHeightPixel}px]
            sm:w-[${smWidthPercent}%] sm:h-[${smHeightPixel}px]
            xs:w-[${xsWidthPercent}%] xs:h-[${xsHeightPixel}px]
            w-[${WidthPercent}%] h-[${HeightPixel}px]`}>
            <div className="font-poppins font-bold text-center md:text-[20px] ml-5">
                {buttonText}
            </div>
        </div>
    )
}

// ConnectButton.propTypes = {
//     mdWidthPercent: PropTypes.number.isRequired,
//     mdHeightPixel: PropTypes.number.isRequired,
//     smWidthPercent: PropTypes.number.isRequired,
//     smHeightPixel: PropTypes.number.isRequired,
//     xsWidthPercent: PropTypes.number.isRequired,
//     xsHeightPixel: PropTypes.number.isRequired,
//     WidthPercent: PropTypes.number.isRequired,
//     HeightPixel: PropTypes.number.isRequired,
//     buttonText: PropTypes.string.isRequired,
//     linkString: PropTypes.string.isRequired,
//     }

export default ConnectButton