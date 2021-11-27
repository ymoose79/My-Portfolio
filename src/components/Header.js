/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1 className="main-title">Web Dev</h1>
        <Typed
          className="typed-text"
          strings={[
            "TONS of Life Experiernce",
            "Concentrated on Vanilla JS",
            "Background in the Fine Arts",
            ""
          ]}
          typeSpeed={70}
          backSpeed={15}
          loop
        />
        <Link
          to="contact"
          smooth={true}
          offset={-40}
          className="btn-main-offer"
        >
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
