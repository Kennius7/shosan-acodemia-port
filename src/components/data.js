import features01 from "../assets/img/logos-edits-react.webp";
import features02 from "../assets/img/logos-edits-nextjs.webp";
import features03 from "../assets/img/logos-edits-react-native.webp";
import features04 from "../assets/img/logos-edits-nodejs.webp";
import features05 from "../assets/img/logos-edits-python.webp";
import features06 from "../assets/img/logos-edits-premiere-pro.webp";
import features07 from "../assets/img/logos-edits-photoshop.webp";
import features08 from "../assets/img/logos-edits-after-effect.webp";
import features09 from "../assets/img/logos-edits-git.webp";
import features10 from "../assets/img/logos-edits-sanity.webp";
import features11 from "../assets/img/logos-edits-redux.webp";
import features12 from "../assets/img/logos-edits-typescript.webp";
import features13 from "../assets/img/logos-edits-mongodb.webp";
import features14 from "../assets/img/logos-edits-firebase.webp";
import features15 from "../assets/img/logos-edits-javascript.webp";
import features16 from "../assets/img/logos-edits-bootstrap.webp";
import features17 from "../assets/img/logos-edits-tailwindcss.webp";
import features18 from "../assets/img/logos-edits-css3.webp";
import features19 from "../assets/img/logos-edits-html5.webp";

import projImg1 from "../assets/projectImages/vampfi.webp";
import projImg2 from "../assets/projectImages/FriendnPal-Screenshot.webp";
import projImg3 from "../assets/projectImages/Matic Drive-Screenshot.webp";
import projImg4 from "../assets/projectImages/Arcromride-Screenshot.webp";
import projImg5 from "../assets/projectImages/Shosan CBT-Screenshot.webp";
import projImg6 from "../assets/projectImages/Judyhub-Screenshot.webp";
import projImg7 from "../assets/projectImages/4.jpg";
import projImg8 from "../assets/projectImages/4.jpg";
import projImg9 from "../assets/projectImages/4.jpg";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";




export const skillSetSlide = [
    {
      id: 0,
      name: "React.js",
      title: "Web Development",
      img: features01,
    },
    {
      id: 1,
      name: "Next.js",
      title: "Web Development",
      img: features02,
    },
    {
      id: 2,
      name: "React Native",
      title: "Mobile App Development",
      img: features03,
    },
    {
      id: 3,
      name: "Node.js",
      title: "Server Side Development",
      img: features04,
    },
    {
      id: 4,
      name: "Python",
      title: "Software Development",
      img: features05,
    },
    {
      id: 5,
      name: "Premiere Pro",
      title: "Video Content Creation",
      img: features06,
    },
    {
      id: 6,
      name: "Photoshop",
      title: "Graphics Design",
      img: features07,
    },
    {
      id: 7,
      name: "After Effects",
      title: "Video Effects Creation",
      img: features08,
    },
    {
      id: 8,
      name: "Git",
      title: "Version Source Control",
      img: features09,
    },
    {
      id: 9,
      name: "Sanity Database",
      title: "Database Management",
      img: features10,
    },
    {
      id: 10,
      name: "Redux",
      title: "State Management",
      img: features11,
    },
    {
      id: 11,
      name: "Typescript",
      title: "Web Development",
      img: features12,
    },
    {
      id: 12,
      name: "Mongo DB",
      title: "Database Management",
      img: features13,
    },
    {
      id: 13,
      name: "Firebase",
      title: "Database Management",
      img: features14,
    },
    {
      id: 14,
      name: "Javascript",
      title: "Software Development",
      img: features15,
    },
    {
      id: 15,
      name: "Bootstrap",
      title: "Styling Framework",
      img: features16,
    },
    {
      id: 16,
      name: "Tailwind CSS",
      title: "Utility Styling Framework",
      img: features17,
    },
    {
      id: 17,
      name: "CSS 3",
      title: "Styling Markup Language",
      img: features18,
    },
    {
      id: 18,
      name: "HTML 5",
      title: "Markup Language",
      img: features19,
    },
  ];

export const softwareProjects = [
    {
      title: "Vamp Facility Intelligence Website",
      description: "Front End Development and Design",
      imgUrl: projImg1,
      buttonTitle: "Vampfi Link",
      url: "https://vampfi.com/",
    },
    {
      title: "FriendnPal Website",
      description: "Front End Development and Design",
      imgUrl: projImg2,
      buttonTitle: "FriendnPal Link",
      url: "https://friendnpal.com",
    },
    {
      title: "Matic Drive Website",
      description: "Front End Development and Design",
      imgUrl: projImg3,
      buttonTitle: "Matic Drive Link",
      url: "https://maticdrive.com",
    },
    {
        title: "Arcromride App",
        description: "Mobile App Development",
        imgUrl: projImg4,
        buttonTitle: "Arcromride Link",
        url: "https://www.arcromride.com/",
    },
    {   title: "Computer based test",
        description: "Front End Development and Design",
        imgUrl: projImg5,
        buttonTitle: "Computer Test Link",
        url: "https://shosan-computer-based-test.netlify.app/",
    },
    {   title: "Judyhub Website",
        description: "Front End Development and Design",
        imgUrl: projImg6,
        buttonTitle: "Judyhub Link",
        url: "https://judyhub.netlify.app/",
    },
  ];

export const contentProjects = [
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg7,
      buttonTitle: "Instagram link1"
    },
    {
      title: "Business Startup",
      description: "Content creation and Digital Marketing",
      imgUrl: projImg8,
      buttonTitle: "Instagram link2"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg9,
      buttonTitle: "Instagram link3"
    },
  ];

export const projectSplideOptions = {
    // width: "90%",
    perPage: 3,
    perMove: 1,
    type: 'loop',
    speed: 1000,
    keyboard: 'global',
    autoplay: true,
    autoplaySpeed: 3000,
    rewind: true,
    rewindSpeed: 2000,
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 4000,
    easing: "linear",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1100: { perPage: 3},
      580: { perPage: 2},
      100: { perPage: 1}
    },
  };

export const skillSplideOptions = {
    // width: "90%",
    perPage: 4,
    perMove: 1,
    type: 'loop',
    speed: 1000,
    keyboard: 'global',
    autoplay: true,
    autoplaySpeed: 3000,
    rewind: true,
    rewindSpeed: 2000,
    isNavigation: false,
    arrows: true,
    focus: 0,
    start: 0,
    interval: 4000,
    easing: "linear",
    gap: '0.5rem',
    pagination: false,
    extensions: { AutoScroll },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
    padding: '1rem',
    mediaQuery: "min",
    breakpoints: {
      1000: { perPage: 4},
      580: { perPage: 3},
      300: { perPage: 2},
      100: { perPage: 1},
    },
  };


