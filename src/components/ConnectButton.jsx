import { PropTypes } from "prop-types";


function ConnectButton({
    mdWidthPercent=40, 
    mdHeightPixel=50,
    smWidthPercent, 
    smHeightPixel,
    xsWidthPercent, 
    xsHeightPixel,
    WidthPercent, 
    HeightPixel,
    }) {

    return (
        <div id="connect-button" 
            className={`flex justify-start items-center cursor-pointer rounded-[5px] 
            md:w-[${mdWidthPercent}%] md:h-[${mdHeightPixel}px]
            sm:w-[${smWidthPercent}%] sm:h-[${smHeightPixel}px]
            xs:w-[${xsWidthPercent}%] xs:h-[${xsHeightPixel}px]
            w-[${WidthPercent}%] h-[${HeightPixel}px]`}>
            <a href="#connect"
                className="font-poppins font-bold text-center md:text-[20px] ml-5">
                Let&apos;s Connect
            </a>
        </div>
    )
}

ConnectButton.propTypes = {
    mdWidthPercent: PropTypes.number.isRequired,
    mdHeightPixel: PropTypes.number.isRequired,
    smWidthPercent: PropTypes.number.isRequired,
    smHeightPixel: PropTypes.number.isRequired,
    xsWidthPercent: PropTypes.number.isRequired,
    xsHeightPixel: PropTypes.number.isRequired,
    WidthPercent: PropTypes.number.isRequired,
    HeightPixel: PropTypes.number.isRequired,
    }

export default ConnectButton