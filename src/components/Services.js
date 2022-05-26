import React from "react";
import Scorpio from "./ImagesPortfolio/Scorpio.png";
import Sagittarius from "./ImagesPortfolio/Sagittarius.png";
import Cancer from "./ImagesPortfolio/Cancer.png";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">Strengths</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-g">
            <div className="box">
              <img className="circle" src={Scorpio} alt="Scorpio" />
              <h3>Attention to Detail</h3>
              <p>
                For example, the icons in this section are the zodiacs for my
                wife and 2 kids. It's not over-the-top, but everything, no
                matter how small, has meaning.
              </p>
            </div>
          </div>
          {/*  =  */}
          <div className="col-md-4 col-sm-g">
            <div className="box">
              <img className="circle" src={Cancer} alt="Cancer" />
              <h3>Problem Solving</h3>
              <p>
                The challenging thing about being self-taught isn't coming up
                with ideas for apps or websites, it's finding answers when
                you're stuck.{" "}
              </p>
            </div>
          </div>
          {/*  =  */}
          <div className="col-md-4 col-sm-g">
            <div className="box">
              <img className="circle" src={Sagittarius} alt="Sagittarius" />
              <h3>Life Experience</h3>
              <p>
                From my arts background, to starting my own company, all the
                travel I've done... There's a lot I bring to the table that I
                feel would make a valued addition to any team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
