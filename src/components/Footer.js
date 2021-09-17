import React from 'react';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="d-flex justify-content-md-left">
                            <p>Justin.R.Stock@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-2 col-sm-2"></div>
                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                        <div className="row ">
                            <div className="col">
                                <Link to="home" smooth={true} className="footer-nav">Home</Link >
                                <br/>
                                <Link to="about me" smooth={true} offset={-70} className="footer-nav">About me</Link >
                                <br/>
                                 <Link to="services" smooth={true} offset={-70}className="footer-nav">Strengths</Link >
                                <br/>
                            </div>
                            <div className="col">
                                <Link to="experience" smooth={true} offset={-80} className="footer-nav">Bio</Link >
                                <br/>
                                <Link to="portfolio" smooth={true} className="footer-nav">Portfolio</Link >
                                <br/>
                                <Link to="contact" smooth={true} offset={-40} className="footer-nav">Contact</Link >
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
