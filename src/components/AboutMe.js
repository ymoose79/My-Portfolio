import React from 'react';
import Selfie from './ImagesPortfolio/meOnBeach.jpeg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className='row'>
                <div className="col-lg-6 col-xm-12">
                    {/* the mb-5 below is margin for bootstrap, rather than doing via css */}
                    <div className="photo-wrap mb-5">
                        <img className='profile-img' src={Selfie} alt='me...' />
                        {/* <img className='badge' src='https://www.codewars.com/users/ymoose79/badges/large' alt='code wars badge' /> */}
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About Me</h1>
                    <p>2021 is all about acquiring web dev skills.  Primarily I've been focusing on JS, I'm also learning the MERN stack.  I've hit a hitch with my shell path I haven't been able to resolve, which is unfortunate because I really enjoy the back-end work.  In the mean time, I launched a website on Wordpress for the experience.    
                    </p>
                    <p>
                        <i class="fab fa-js-square"></i>
                        <i class="fab fa-wordpress"></i>
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3-alt"></i>
                        <i class="fab fa-node-js"></i>
                        <i class="fab fa-bootstrap"></i>
                        <i class="fab fa-react"></i>
                    </p>
                
                </div>
            </div>
        </div>
    )
}

export default AboutMe
