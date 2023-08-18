import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import { AppContext } from "./context/AppContext";




const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const form = useRef();
  const { connectRef } = useContext(AppContext);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...")

    emailjs.sendForm('service_eeeosp7', 'template_ltnvx66', form.current, 'h-F7iEPReaPmY032e')
      .then((result) => {
        console.log(result.text, result.status);
        setTimeout(() => {
          setStatus({ success: true, message: 'Message sent successfully'});
          setButtonText("Message Sent")
        }, 3000);
        setTimeout(() => {
          e.target.reset();
          setButtonText("Send Message");
          setStatus({});
        }, 7000);
      }, (error) => {
        console.log(error.text, error.status);
        setTimeout(() => {
          setStatus({ success: false, message: 'Something went wrong, please try again later.'});
          setButtonText("Message Not Sent");
        }, 3000);
        setTimeout(() => {
          e.target.reset();
          setButtonText("Please Try Again");
        }, 7000);
        setTimeout(() => {
          setButtonText("Send Message");
          setStatus({});
        }, 10000);
      });
  };



  return (
    <section ref={connectRef} className="contact flex justify-center items-center w-full h-[800px]">

      <div className="w-full flex flex-row-reverse justify-center items-center">

        <div className="w-[49%]">
          <img src={contactImg} alt="Contact Us" className="w-full h-auto"/>
        </div>

        <div className="w-[47%]">

          <div className={`w-full`}>

            <h2 className="text-[45px] font-bold mb-[30px] text-white">Get In Touch</h2>

            <form ref={form} onSubmit={handleSubmit}>
            
              <div>

                <div>
                  <input type="text" 
                    value={formDetails.firstName} 
                    placeholder="First Name" 
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    className="text-[18px] mb-3 py-3 pl-3 placeholder:text-[16px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="text" 
                    value={formDetails.lastName} 
                    placeholder="Last Name" 
                    onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                    className="text-[18px] mb-3 py-3 pl-3 placeholder:text-[16px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="email" 
                    value={formDetails.email} 
                    placeholder="Email Address" 
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className="text-[18px] mb-3 py-3 pl-3 placeholder:text-[16px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="tel" 
                    value={formDetails.phone} 
                    placeholder="Phone No." 
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    className="text-[18px] mb-3 py-3 pl-3 placeholder:text-[16px] placeholder:font-semibold"/>
                </div>

                <div>
                  <textarea type="text" 
                    value={formDetails.message} 
                    placeholder="Message" 
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    className="text-[18px] mb-3 py-3 pl-3 placeholder:text-[16px] placeholder:font-semibold">
                  </textarea>
                </div>

                <button type="submit" className="text-[18px] text-start rounded-[8px] w-[270px] h-[55px] 
                  mt-[25px] pl-4">
                  <span>{buttonText}</span>
                </button>

                <div className="flex flex-col justify-center items-start navText3 mt-3 pl-2">
                  {
                    status.message &&
                    <div>
                      <p className={`${status.success === false ? "text-black" : "text-green-400"} 
                        text-[18px] italic`}>
                      {status.message}
                      </p>
                    </div> || 
                    <div className="text-white text-[18px] italic">
                      I&apos;d like to hear from you...
                    </div>
                  }
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}


export default Contact

