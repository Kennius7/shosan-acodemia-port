import myResume from "../assets/docs/Kenny Dev CV January 2024.pdf";
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
            <a href={myResume} onClick={downloadClick} target="_blank" rel="noreferrer" download>
                <button
                    className={`flex justify-center items-center cursor-pointer rounded-[10px] duration-1000 
                    bg-white md:w-[35%] md:h-[50px] sm:w-[50%] sm:h-[50px] xs:w-[50%] xs:h-[40px] 
                    xxs:w-[56%] xxs:h-[40px] w-[70%] h-[35px]`}>

                    <div className="font-poppins md:tracking-wider tracking-normal font-semibold sm:text-center 
                        text-start xs:leading-none leading-[16px] md:text-[15px] sm:text-[15px] xs:text-[14px] 
                        text-[13px]">
                        {buttonText}
                    </div>

                </button>
            </a>
        </>
    )
}



export default DownloadButton