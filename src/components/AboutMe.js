import React from "react";
import Selfie from "./ImagesPortfolio/meOnBeach.jpeg";
import svelte from "./ImagesPortfolio/Svelte.svg";

const AboutMe = () => {
  return (
    <div id="about-me" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          {/* the mb-5 below is margin for bootstrap, rather than doing via css */}
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Selfie} alt="me..." />
            {/* <img className='badge' src='https://www.codewars.com/users/ymoose79/badges/large' alt='code wars badge' /> */}
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            I spent most of my development learning vanilla JS, started using Svelte as my front-end framework but for the past few months I've been focusing on React.  I have a basic understanding of connecting to DBs. While I haven’t focused on either MongoDB or a SQL DB,   I find the docs of the former easier to start from.  I'm currently working on a MERN air-bnb spoof to help become a little more familiar with the process.
          </p>
          <p>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-wordpress"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-bootstrap"></i>
            <i className="fab fa-react"></i>
            <img className="fab svelte" src={svelte} alt="svelte log" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
