import { useState, useEffect } from 'react';
import { AboutMe, Skills, Projects, Contact, Navbar, Footer, Banner } from './components';
import "animate.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRef } from "react";
import { AppContext } from './components/context/AppContext';
import ScrollToTop from './ScrollToTop';



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState("Home");
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const connectRef = useRef();
  
  const navLinks = [
    {
        id: "/",
        title: "Home",
        ref: homeRef
    },
    {
        id: "/aboutme",
        title: "About Me",
        ref: aboutRef
    },
    {
        id: "/skills",
        title: "Skills",
        ref: skillRef
    },
    {
        id: "/projects",
        title: "Projects",
        ref: projectRef
    },
    {
        id: "/connect",
        title: "Let's Connect",
        ref: connectRef
    }
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  return (
    <AppContext.Provider value={{ 
      homeRef, aboutRef, skillRef, projectRef, 
      connectRef, active, setActive, navLinks, 
      clicked, setClicked
    }}>

      <BrowserRouter>

        <div className={`flex flex-col main-bg-2 relative`}>

          <div className={`w-full ${scrolled 
          ? "bg-primary fixed z-[3] duration-1000" 
          : "bg-transparent absolute z-[3] duration-1000"}`}>
            <Navbar />
          </div>
          
          <ScrollToTop/>

          <Routes>
            <Route path="/" element={<Banner/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<AboutMe/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Skills/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Projects/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Contact/>} />
          </Routes>

          <Footer />

        </div>

      </BrowserRouter>

    </AppContext.Provider>
  )
}

export default App
