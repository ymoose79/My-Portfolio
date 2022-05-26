// rafce =>  the shortcut for the following;

import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Bio</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>Jan 1979 - May 2007</h3>
            <p>
              I put myself through college, majored in Fine Arts with a
              specialization in painting. Won a couple scholarships for over-all
              body of work and a paper I wrote. Bought a motorcycle some plane
              tickets and just started traveling.{" "}
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>May 2007 - Jan 2017</h3>
            <p>
              After graduating college, there was more travel. I sold artwork in
              Spain where I gained a better than average understanding of
              spanish. Met up with some hedgefund guys (randomly) that had an
              advantage blackjack team. Met my wife then settled down here in
              Jacksonville.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>June 2017 - Mar 2019</h3>
            <p>
              Worked 50 hour weeks for a custom cabinet and furniture maker. No
              benefits and long hours but I enjoyed the work. The one skill I
              say that translates well to coding is in the architecture:
              everything from creating a blueprint to breaking down the job into
              components and finally production.{" "}
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2019 - Feb 2021</h3>
            <p>
              I started working nights when my daughter was born. After my son
              came around year and a half later, it became clear I need a career
              change.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>Feb 2021 - current</h3>
            <p>
              #learnToCode. I enjoy taking data from an API and displaying that
              information, especially in Graph format. I've been fairly active
              on slack. I posted my portfolio for review and a company
              (SpinSpire) reached out to me. I sarted a mentorship with them
              this past Oct. I've been learning Svelte as well as other useful
              things like becoming more familiar with git. It's really been
              advantageous to be in a production enviornment.{" "}
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Experience;
