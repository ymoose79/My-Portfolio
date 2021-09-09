import React from 'react';
import { Link } from 'react-scroll';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                
          <Link className="navbar-brand" href="#"><p class='me'>Justin R Stock</p></Link>
       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about me" offset={-70} className="nav-link" href="#">about me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">bio</Link>
        </li>
       <li className="nav-item">
        <Link smooth={true} to="portfolio" offset={-60} className="nav-link" href="#">portfolio</Link>
         </li>
        <li className="nav-item">
        <Link smooth={true} to="contact" offset={-80} className="nav-link" href="#">contact</Link>
      </li>
    </ul>
            </div>
            </div>
        </nav>
    )
}



// <i class="fab fa-acquisitions-incorporated"></i>

export default Navbar
