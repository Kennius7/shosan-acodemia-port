import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

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
    <section id="connect" 
      className="contact w-full">

      <div className="w-full flex flex-row-reverse justify-center items-center">

        <div className="w-[50%]">
          <TrackVisibility>
            {
              ({ isVisible }) =>
              <img src={contactImg} alt="Contact Us"
                className={isVisible ? "animate__animated animate__zoomIn" : ""}/>
            }
          </TrackVisibility>
        </div>

        <div className="w-[50%]">

          <TrackVisibility className="w-full">
            {({ isVisible }) =>
              <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""} w-full`}>

                <h2>Get In Touch</h2>

                <form ref={form} onSubmit={handleSubmit}>
                
                  <div>

                    <div>
                      <input type="text" 
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </div>

                    <div>
                      <input type="text" 
                        value={formDetails.lastName} 
                        placeholder="Last Name" 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </div>

                    <div>
                      <input type="email" 
                        value={formDetails.email} 
                        placeholder="Email Address" 
                        onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </div>

                    <div>
                      <input type="tel" 
                        value={formDetails.phone} 
                        placeholder="Phone No." 
                        onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </div>

                    <div>
                      <textarea type="text" 
                        value={formDetails.message} 
                        placeholder="Message" 
                        onChange={(e) => onFormUpdate('message', e.target.value)}>
                      </textarea>
                    </div>

                    <button type="submit" className="rounded-3">
                      <span>{buttonText}</span>
                    </button>

                    {
                      status.message &&
                      <div>
                        <p className={status.success === false ? "text-red-300" : "text-green-400"}>
                        {status.message}
                        </p>
                      </div>
                    }

                  </div>

                </form>

              </div>}
          </TrackVisibility>

        </div>

      </div>

    </section>
  )
}


export default Contact

