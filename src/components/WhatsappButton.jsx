import { PropTypes } from "prop-types";
import whatsappIcon from "../assets/img/whatsapp-icon1.png";


function WhatsappButton({buttonText}) {

    return (
        <div id="connect-button" 
            className={`flex justify-start items-center cursor-pointer rounded-[8px] duration-1000
                md:w-[40%] md:h-[50px] sm:w-[60%] sm:h-[50px] xs:w-[40%] xs:h-[50px] w-[50%] h-[40px]`}>

            <a href="https://wa.me/+2347033325279" 
                target="_blank" 
                rel="noreferrer"
                className="font-poppins sm:font-bold font-semibold text-center md:text-[18px] 
                    sm:text-[19px] xs:text-[17px] text-[14px] md:ml-5 sm:ml-3 xs:ml-2 ml-2">
                {buttonText}
            </a>
            <img src={whatsappIcon} alt="Wh" 
                className="xs:w-[25px] xs:h-[25px] w-[22px] h-[22px] md:ml-4 sm:ml-3 xs:ml-2 ml-2" />

        </div>
    )
}


WhatsappButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    }

export default WhatsappButton