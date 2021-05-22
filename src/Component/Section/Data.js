import img from "../../Assests/Images/hello.svg";
import img2 from "../../Assests/Images/Web_developer.svg";
import imgTcs from "../../Assests/Images/tcs.png";
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightTxt: true,
  lightTextDesc: true,
  topLine: " About Me",
  headline: "Hello, my name is Sourav Saha.",
  describtion:
    "I am an full-stack web developer working at a MNC for past 2 years. Designing web pages is a hobby of mine. Remotely available at souravsaha@gmail.com",
  buttonLabel: "Download Résumé",
  imgStart: false,
  img: img,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  imageHeading: false,
};
export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightTxt: false,
  lightTextDesc: false,
  topLine: "Work experience",
  headline: "Web Developer (2019 - Present) ",
  describtion:
    "#Involved in developing  web components using React.js and Vue.js.",
  describtion2:
    "#Contribute to the technical design and development of REST API using Node.js to fetch data from database.",
  buttonLabel: "Go to top",
  imgStart: false,
  img: img2,
  alt: "cs",
  dark: false,
  primary: false,
  darkText: true,
  imageHeading: imgTcs,
};
