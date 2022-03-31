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
            I haven’t focused on a frontend framework in particular. I’ve done
            some dabbling with React and Vue, but I’m more experienced with
            Svelte. The same with DBs and Apis. I include these in most of my
            projects. While I haven’t focused on either MongoDB or a SQL DB, I
            understand the basic method for connecting to them and from there
            I’m modeling my code based on either examples or the docs.
          </p>
          <p>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-wordpress"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-bootstrap"></i>
            <i class="fab fa-react"></i>
            <img class="fab svelte" src={svelte} alt="svelte log" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
