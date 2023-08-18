import { PropTypes } from "prop-types";
import whatsappIcon from "../assets/img/whatsapp-icon1.png";


function WhatsappButton({buttonText}) {

    return (
        <div id="connect-button" 
            className={`flex justify-start items-center cursor-pointer rounded-[5px] duration-1000
                md:w-[40%] md:h-[50px] sm:w-[60%] sm:h-[50px] xs:w-[40%] xs:h-[50px] w-[30%] h-[40px]`}>

            <a href="https://wa.me/+2347033325279" 
                target="_blank" 
                rel="noreferrer"
                className="font-poppins font-bold text-center md:text-[20px] sm:text-[19px] md:ml-5 sm:ml-3">
                {buttonText}
            </a>
            <img src={whatsappIcon} alt="Wh" className="w-[25px] h-[25px] md:ml-4 sm:ml-3" />

        </div>
    )
}


WhatsappButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    }

export default WhatsappButton