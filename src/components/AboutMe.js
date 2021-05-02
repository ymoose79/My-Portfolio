import React from 'react';
import Selfie from '../meOnBeach.jpeg';

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
                    <p>After the birth of our second child, my wife and I looked at each other and we realized I need to do something else.  Family's a pretty powerful motivation for setting and driving towards goals.  Considering my background in Fine Arts coupled with a love for puzzels, transitioning to a career in Web Development seemed like the logical solution.</p>
                    <p>I originaly envisioned myself in a UI/UX role.  I've always loved design regardless of medium.  I started my  own company (now defunct) which I did the branding for as well as all the social media, promotions, gathering testimonials, etc... You wear a lot of hats when it's just you in a company.  I've got a painting in a permanent collection in Galicia, Spain. I was a woodworker that made custom cabinets and furniture.    
                    </p>
                    <p>I love design, but what's attracting me to coding is the same thing that attracts me to the Fine Arts, which at it's heart is conceptual problem solving.  Artists look at society or some construct, and find a problem, that others may not see. Then, they attempt to depict the solution in their medium of choice: be it song, sculpture, archetecture, etc...        

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
