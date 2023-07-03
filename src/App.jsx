import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';




function App() {
  const [scrolled, setScrolled] = useState(false);
  
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
      <div className={`flex flex-col main-bg relative`}>

        <div className={`w-full ${scrolled 
        ? "bg-primary fixed z-[3] duration-1000" 
        : "bg-transparent absolute z-[3] duration-1000"}`}>
          <Navbar />
        </div>

        <Banner/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>


        <div className="w-full">
          <Footer />
        </div>

      </div>
  )
}

export default App
