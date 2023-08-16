import { PropTypes } from "prop-types";
import whatsappIcon from "../assets/img/whatsapp-icon1.png";


function WhatsappButton({
    mdWidthPercent=40, 
    mdHeightPixel=50,
    smWidthPercent, 
    smHeightPixel,
    xsWidthPercent, 
    xsHeightPixel,
    WidthPercent, 
    HeightPixel,
    buttonText
    }) {

    return (
        <div id="connect-button" 
            className={`flex justify-start items-center cursor-pointer rounded-[5px] duration-1000
            md:w-[${mdWidthPercent}%] md:h-[${mdHeightPixel}px]
            sm:w-[${smWidthPercent}%] sm:h-[${smHeightPixel}px]
            xs:w-[${xsWidthPercent}%] xs:h-[${xsHeightPixel}px]
            w-[${WidthPercent}%] h-[${HeightPixel}px]`}>
            <a href="https://wa.me/+2347033325279" 
                target="_blank" 
                rel="noreferrer"
                className="font-poppins font-bold text-center md:text-[20px] ml-5">
                {buttonText}
            </a>
            <img src={whatsappIcon} alt="Wh" className="w-[25px] h-[25px] ml-3" />
        </div>
    )
}

WhatsappButton.propTypes = {
    mdWidthPercent: PropTypes.number.isRequired,
    mdHeightPixel: PropTypes.number.isRequired,
    smWidthPercent: PropTypes.number.isRequired,
    smHeightPixel: PropTypes.number.isRequired,
    xsWidthPercent: PropTypes.number.isRequired,
    xsHeightPixel: PropTypes.number.isRequired,
    WidthPercent: PropTypes.number.isRequired,
    HeightPixel: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
    }

export default WhatsappButton