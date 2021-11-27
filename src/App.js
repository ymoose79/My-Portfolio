
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience.js";
import Portfolio from "./components/Portfolio.js";
import Contacts from "./components/Contacts.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 3,
                // color: ""
              }
            }
          }
        }}
                  />
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio/>
      <Experience />
      <Services />
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
