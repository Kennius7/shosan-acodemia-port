import myResume from "../assets/docs/Kenny Ogbogu CV.pdf";
import { useState } from "react";



function DownloadButton() {
    const [downloadStatus, setDownloadStatus] = useState(false);
    const [buttonText, setButtonText] = useState("Download my Resume");

    const downloadClick = () => {
        setDownloadStatus(true);

        if (downloadStatus) {
            setButtonText("Downloading...");
            setTimeout(() => {
                setButtonText("Download my Resume")
            }, 3000);
        }
    }

    return (
        <>
            <a href={myResume} onClick={downloadClick} download>
                <button
                    className={`flex justify-start items-center cursor-pointer rounded-[5px] duration-1000 
                    bg-white md:w-[30%] md:h-[50px] sm:w-[45%] sm:h-[50px] xs:w-[40%] xs:h-[40px] 
                    w-[50%] h-[40px]`}>

                    <div className="font-poppins md:tracking-wider tracking-normal font-bold xs:text-center 
                        text-start xs:leading-none leading-[16px] md:text-[17px] xs:text-[18px] text-[15px] 
                        md:ml-[5%] xs:ml-5 ml-3">
                        {buttonText}
                    </div>

                </button>
            </a>
        </>
    )
}


export default DownloadButton