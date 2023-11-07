import { PropTypes } from "prop-types";



function WhatsappButton({buttonText}) {

    return (
        <div id="connect-button" 
            className={`flex justify-start items-center cursor-pointer rounded-[8px] duration-1000
                md:w-[48%] md:h-[50px] sm:w-[60%] sm:h-[50px] xs:w-[45%] xs:h-[50px] xxs:w-[55%] 
                xxs:h-[40px] w-[70%] h-[35px]`}>

            <a href="https://wa.me/+2347033325279" 
                target="_blank" 
                rel="noreferrer"
                className="font-poppins font-semibold text-start md:text-[17px] 
                    sm:text-[16px] xs:text-[14px] text-[12px] md:pl-4 sm:pl-3 xs:pl-3 xxs:pl-2 pl-2">
                {buttonText}
            </a>

        </div>
    )
}


WhatsappButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    }

export default WhatsappButton