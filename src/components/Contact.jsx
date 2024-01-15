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
    subject: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});
  const [statusText, setStatusText] = useState("I'd like to hear from you...")
  const form = useRef();
  const { connectRef } = useContext(AppContext);
  const { firstName, lastName, email, phone, subject, message } = formDetails;

  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*()_:";'<>,./?=-`~]/
  // const numberRegex = /[0-9]/;

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const validatePassword = (regex, password) => {
    const hasRegex = regex.test(password);
    return hasRegex;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
    console.log(phone);

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      setButtonText("Send?");
      setStatusText("Please fill out all necessary fields");
      setTimeout(() => {
        setButtonText("Send Message")
        setStatusText("I'd like to hear from you...");
      }, 4000);
      return;
    }

    if (
        validatePassword(upperCaseRegex, phone) || 
        validatePassword(lowerCaseRegex, phone) || 
        validatePassword(specialCharRegex, phone)
        ) {
            setButtonText("Send?");
            setStatusText("All phone number characters should be numbers");
            setTimeout(() => {
              setButtonText("Send Message")
              setStatusText("I'd like to hear from you...");
            }, 5000);
      return;
    }

    if (phone.toString().length < 10 || phone.toString().length > 10) {
          setButtonText("Send?");
          setStatusText("Phone number should be 10 digits long");
          setTimeout(() => {
            setButtonText("Send Message")
            setStatusText("I'd like to hear from you...");
          }, 5000);
    return;
  }


    setButtonText("Sending...");
    emailjs.sendForm('service_n10fnh6', 'template_zx24zti', form.current, 'h-F7iEPReaPmY032e')
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
        // e.target.reset();
        setButtonText("Please Try Again");
      }, 7000);
      setTimeout(() => {
        setButtonText("Send Message");
        setStatus({});
      }, 11000);
    });
  };



  return (
    <section 
      ref={connectRef} 
      className="contact flex justify-center items-center w-full sm:h-[800px] xs:h-[1000px] xxs:h-[900px] h-[800px]">

      <div className="flex sm:flex-row-reverse flex-col justify-center items-center w-full">

        <div className="sm:w-[49%] xs:w-[90%] w-[92%] xs:mb-0 mb-[20px]">
          <img src={contactImg} alt="Contact Us Pics" className="w-full h-auto"/>
        </div>

        <div className="flex flex-col justify-center sm:items-center items-start sm:w-[47%] w-[96%]">

          <div className="w-[90%]">

            <h2 className="font-bold text-white xs:text-[45px] xxs:text-[35px] text-[30px] xs:mb-[30px] mb-[20px] w-full">
              Get In Touch
            </h2>

            <form ref={form} onSubmit={handleSubmit}>
            
              <div>

                <div>
                  <input type="text" 
                    value={firstName} 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="text" 
                    value={lastName} 
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="email" 
                    value={email} 
                    name="email"
                    placeholder="Email Address" 
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="text" 
                    value={phone} 
                    name="phone"
                    placeholder="Phone No: +234..."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"/>
                </div>

                <div>
                  <input type="text" 
                    value={subject} 
                    name="subject"
                    placeholder="Email Subject" 
                    onChange={(e) => onFormUpdate('subject', e.target.value)}
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"/>
                </div>

                <div>
                  <textarea type="text" 
                    value={message} 
                    name="message"
                    placeholder="Message" 
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    className="xs:text-[18px] text-[13px] mb-3 xs:py-3 py-2 xxs:pl-3 pl-2 xxs:h-[100px] h-[80px] 
                      xs:placeholder:text-[16px] xxs:placeholder:text-[15px] placeholder:text-[14px] 
                      placeholder:font-semibold">
                  </textarea>
                </div>

                <button 
                  type="submit" 
                  className="font-poppins text-start xs:rounded-[8px] rounded-[6px] sm:text-[18px] xs:text-[16px] 
                  xxs:text-[15px] text-[13px] md:w-[45%] sm:w-[60%] xs:w-[45%] w-[60%] xs:h-[55px] xxs:h-[50px] 
                  h-[45px] mt-[25px] xs:pl-4 xxs:pl-3 pl-2">
                  <span className="duration-1000">{buttonText}</span>
                </button>

                <div className="flex flex-col justify-center items-start navText3 xs:mt-3 mt-1 xxs:pl-2 pl-1">
                  {
                    status.message &&
                    <div>
                      <p className={`${status.success === false ? "text-black" : "text-green-400"} 
                          xs:text-[18px] xxs:text-[16px] text-[13px] italic xs:w-full xxs:w-[80%] w-[60%] xs:leading-normal 
                          leading-[20px]`}>
                          {status.message}
                      </p>
                    </div>
                    || 
                    <div className="text-white xs:text-[18px] xxs:text-[16px] text-[14px] italic">
                      { statusText }
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

