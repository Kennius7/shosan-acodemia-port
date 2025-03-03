/* eslint-disable no-unused-vars */
import { useState, useRef, useContext, useEffect } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { AppContext } from "./context/AppContext";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../../FirebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";




const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    receiverEmail: "ogbogukenny@yahoo.com",
    mainSubjectTitle: "Shosan Acodemia Emails",
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  // const [status, setStatus] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [regData, setRegData] = useState([]);
  // const [statusText, setStatusText] = useState("I'd like to hear from you...")
  // const formRef = useRef();
  const { connectRef } = useContext(AppContext);
  const { firstName, lastName, email, phone, subject, message } = formDetails;

  const apiUrlProd = "https://portfolios-project-server.netlify.app/.netlify/functions/api/send-email";

  // const upperCaseRegex = /[A-Z]/;
  // const lowerCaseRegex = /[a-z]/;
  // const specialCharRegex = /[!@#$%^&*()_:";'<>,./?=-`~]/
  // const numberRegex = /[0-9]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const timeout = 20000;



  useEffect(() => {
    const fetchRegData = () => {
        const regDataRef = collection(db, "Shosan-Emails");
        const q = query(regDataRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const regDataFireBase = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setRegData(regDataFireBase);
            // setIsPolling(!isPolling);
        })
    }

    if (regData.length === 0) {
        setTimeout(() => {
            fetchRegData();
            console.log(`Reg Data polling...`)
        }, 30000);
    }

    // if (regData.length !== 0) {
    //     const regDataFetch = regData.length === 0 ? "None" : regData;
    //     console.log(`Registration data fetched: ${regDataFetch}`);
    // }
  }, [regData])

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const SignUpTimeOut = () => {
    setTimeout(() => {
        setIsSubmit(false);
        setTimeout(() => {
          setErrors({});
        }, 3000);
    }, 2000);
  }

  const generateHighestId = () => {
    if (regData.length === 0) {
        return 0
    } 
    if (regData.length > 0) {
        const ids = regData.map(item => item.regID);
        const highestId = Math.max(...ids);
        return (highestId + 1);
    }
  }

  const validateForm = () => {
    // const errors = {};

    // Validate first name
    if (!formDetails.firstName.trim()) {
        errors.firstName = 'First Name is required';
        SignUpTimeOut();
    }

    // Validate last name
    if (!formDetails.lastName.trim()) {
        errors.lastName = 'Last Name is required';
        SignUpTimeOut();
    }

    // Validate email
    if (!formDetails.email.trim() || !emailRegex.test(formDetails.email)) {
        errors.email = 'Valid email is required';
        SignUpTimeOut();
    }

    // Validate phone number
    // if (!numberRegex.test(parseInt(formDetails.number.toString().slice(1)))) {
    //     errors.number = 'Valid number is required';
    //     SignUpTimeOut();
    // }

    if (formDetails.phone === "") {
        errors.phone = 'Please type in a phone number';
        SignUpTimeOut();
    }

    if (!formDetails.subject.trim()) {
      errors.subject = 'Please type in a subject';
      SignUpTimeOut();
    }

    if (!formDetails.message.trim()) {
      errors.message = 'Please type in a message body';
      SignUpTimeOut();
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmailForm = async () => {
    try {
        const response = await axios.post(apiUrlProd, formDetails, { timeout })
        console.log(`${response.data.emailMessage}`);
        toast(response.data.formMessage, { type: "success" });
        setTimeout(() => setIsSubmit(false), 4000);
    } catch (error) {
        console.log(error);
        if (error.code === "ECONNABORTED") {
            console.error(`Sending took too long: ${error}`);
            toast(error.data.data.timeoutMessage, { type: "error" });
            setTimeout(() => setIsSubmit(false), 4000);
        } else {
            setIsSubmit(false);
            console.error(`Email sending failed: ${error}`);
            toast(error.data.data.errorMessage, { type: "error" });
            setTimeout(() => setIsSubmit(false), 4000);
        }
    }
  }

  const handleSubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    console.log(formDetails);
  
    if (validateForm()) {
        if (navigator.onLine) {
            console.log("App online");
            const regDataRef = collection(db, "Shosan-Emails");
            addDoc(regDataRef, {
              firstname: formDetails.firstName,
              lastname: formDetails.lastName,
              email: formDetails.email,
              phone: parseInt(formDetails.phone.toString().slice(1)),
              subject: formDetails.subject,
              message: formDetails.message,
              createdAt: Timestamp.now().toDate(),
              regID: generateHighestId(),
            })
            .then(()=>{
                sendEmailForm();
                console.log("Registration successful");
                toast("Registration successful", { type: "success" });
                setTimeout(() => { setIsSubmit(false) }, 2000);
            })
            .catch((error)=>{
                console.log("Error Registering", error);
                toast("Error Registering", { type: "error" });
                setTimeout(() => {
                  setIsSubmit(false);
                }, 2000);
            })
  
        }
        if (!navigator.onLine) {
            console.log("App offline");
            toast("It seems you're offline", { type: "warning" });
            setTimeout(() => {
              setIsSubmit(false);
            }, 2000);
        }
    } else {
        console.log("No Registration");
    }
  };




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formDetails);
  //   console.log(phone);

  //   if (!firstName || !lastName || !email || !phone || !subject || !message) {
  //     setButtonText("Send?");
  //     setStatusText("Please fill out all necessary fields");
  //     setTimeout(() => {
  //       setButtonText("Send Message")
  //       setStatusText("I'd like to hear from you...");
  //     }, 4000);
  //     return;
  //   }

  //   if (
  //         validatePassword(upperCaseRegex, phone) || 
  //         validatePassword(lowerCaseRegex, phone) || 
  //         validatePassword(specialCharRegex, phone)
  //       ) {
  //     setButtonText("Send?");
  //     setStatusText("All phone number characters should be numbers");
  //     setTimeout(() => {
  //       setButtonText("Send Message")
  //       setStatusText("I'd like to hear from you...");
  //     }, 5000);
  //     return;
  //   }

  //   if (phone.toString().length < 10 || phone.toString().length > 10) {
  //     setButtonText("Send?");
  //     setStatusText("Phone number should be 10 digits long");
  //     setTimeout(() => {
  //       setButtonText("Send Message")
  //       setStatusText("I'd like to hear from you...");
  //     }, 5000);
  //     return;
  //   }


  //   setButtonText("Sending...");
  //   emailjs.sendForm('service_n10fnh6', 'template_zx24zti', formRef.current, 'h-F7iEPReaPmY032e')
  //   .then((result) => {
  //     console.log(result.text, result.status);
  //     setTimeout(() => {
  //       setStatus({ success: true, message: 'Message sent successfully'});
  //       setButtonText("Message Sent")
  //     }, 3000);
  //     setTimeout(() => {
  //       e.target.reset();
  //       setButtonText("Send Message");
  //       setStatus({});
  //     }, 7000);
  //   }, (error) => {
  //     console.log(error.text, error.status);
  //     setTimeout(() => {
  //       setStatus({ success: false, message: 'Something went wrong, please try again later.'});
  //       setButtonText("Message Not Sent");
  //     }, 3000);
  //     setTimeout(() => {
  //       // e.target.reset();
  //       setButtonText("Please Try Again");
  //     }, 7000);
  //     setTimeout(() => {
  //       setButtonText("Send Message");
  //       setStatus({});
  //     }, 11000);
  //   });
  // };



  return (
    <section 
      ref={connectRef} 
      className="contact flex justify-center items-center w-full sm:h-[900px] xs:h-[1000px] xxs:h-[1200px] h-[800px]">

      <div className="flex sm:flex-row-reverse flex-col justify-center items-center w-full">

        <div className="sm:w-[49%] xs:w-[90%] w-[92%] xs:mb-0 mb-[20px]">
          <img src={contactImg} alt="Contact Us Pics" className="w-full h-auto"/>
        </div>

        <div className="flex flex-col justify-center sm:items-center items-start sm:w-[47%] w-[96%]">

          <div className="w-[90%]">

            <h2 className="font-bold text-white xs:text-[45px] xxs:text-[35px] text-[30px] xs:mb-[30px] mb-[20px] w-full">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit}>
              {/* <div>

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

              </div> */}

              <div>

                <div className="flex flex-col justify-center items-center h-[80px] xs:mb-4 mb-3">
                  <input type="text" 
                    value={firstName} 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    className="h-[65%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                    xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"
                  />
                  {
                    errors.firstName &&  
                    <p className="h-[35%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.firstName}
                    </p>
                  }
                </div>

                <div className="flex flex-col justify-center items-center h-[80px] xs:mb-4 mb-3">
                  <input type="text" 
                    value={lastName} 
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                    className="h-[65%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"
                  />
                  {
                    errors.lastName &&  
                    <p className="h-[35%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.lastName}
                    </p>
                  }
                </div>

                <div className="flex flex-col justify-center items-center h-[80px] xs:mb-4 mb-3">
                  <input type="email" 
                    value={email} 
                    name="email"
                    placeholder="Email Address" 
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className="h-[65%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"
                  />
                  {
                    errors.email &&  
                    <p className="h-[35%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.email}
                    </p>
                  }
                </div>

                <div className="flex flex-col justify-center items-center h-[80px] xs:mb-4 mb-3">
                  <input type="text" 
                    value={phone} 
                    name="phone"
                    placeholder="Phone No: +234..."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    className="h-[65%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"
                  />
                  {
                    errors.phone &&  
                    <p className="h-[35%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.phone}
                    </p>
                  }
                </div>

                <div className="flex flex-col justify-center items-center h-[80px] xs:mb-4 mb-3">
                  <input type="text" 
                    value={subject} 
                    name="subject"
                    placeholder="Email Subject" 
                    onChange={(e) => onFormUpdate('subject', e.target.value)}
                    className="h-[65%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xs:placeholder:text-[16px] 
                      xxs:placeholder:text-[15px] placeholder:text-[14px] placeholder:font-semibold"
                  />
                  {
                    errors.subject &&  
                    <p className="h-[35%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.subject}
                    </p>
                  }
                </div>

                <div className="flex flex-col justify-center items-center h-[140px]">
                  <textarea type="text" 
                    value={message} 
                    name="message"
                    placeholder="Message" 
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    className="h-[80%] xs:text-[18px] text-[13px] xxs:pl-3 pl-2 xxs:h-[100px] 
                      xs:placeholder:text-[16px] xxs:placeholder:text-[15px] placeholder:text-[14px] 
                      placeholder:font-semibold"
                  >
                  </textarea>
                  {
                    errors.message &&  
                    <p className="h-[20%] font-sans text-red-300 sm:text-[15px] xs:text-[13px] text-[12px] italic 
                      w-full pl-1">
                      {errors.message}
                    </p>
                  }
                </div>

                <button 
                  type="submit" 
                  className="font-poppins xs:rounded-[8px] rounded-[6px] sm:text-[18px] xs:text-[16px] 
                  xxs:text-[15px] text-[13px] md:w-[45%] sm:w-[60%] xs:w-[45%] w-[60%] xs:h-[55px] xxs:h-[50px] 
                  h-[45px] xs:mt-[25px] mt-[18px]flex justify-center items-center bg-slate-200">
                  {
                    !isSubmit 
                      ?
                        <span className="text-center">{buttonText}</span>
                      : 
                        <div className='flex justify-center items-center rotate'>
                          <AiOutlineLoading3Quarters size={24} color="blue" />
                        </div>
                  }
                </button>

              {/* <div className="flex flex-col justify-center items-start navText3 xs:mt-3 mt-1 xxs:pl-2 pl-1">
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
              </div> */}

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}


export default Contact

