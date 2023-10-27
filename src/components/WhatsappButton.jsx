import { PropTypes } from "prop-types";



function WhatsappButton({buttonText}) {

    return (
        <div id="connect-button" 
            className={`flex justify-center items-center cursor-pointer rounded-[8px] duration-1000
                md:w-[40%] md:h-[50px] sm:w-[65%] sm:h-[50px] xs:w-[45%] xs:h-[50px] w-[55%] h-[40px]`}>

            <a href="https://wa.me/+2347033325279" 
                target="_blank" 
                rel="noreferrer"
                className="font-poppins font-semibold text-center md:text-[17px] 
                    sm:text-[16px] xs:text-[14px] text-[12px]">
                {buttonText}
            </a>

        </div>
    )
}


WhatsappButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    }

export default WhatsappButton