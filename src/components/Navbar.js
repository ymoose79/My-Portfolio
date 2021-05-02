import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                
          <a className="navbar-brand" href="#"><p class='me'>Justin R Stock</p></a>
       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">experience</a>
        </li>
       <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
         </li>
        <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
    </ul>
            </div>
            </div>
        </nav>
    )
}



// <i class="fab fa-acquisitions-incorporated"></i>

export default Navbar
