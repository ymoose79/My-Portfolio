import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience.js";
import Portfolio from "./components/Portfolio.js";
import Contacts from "./components/Contacts.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
