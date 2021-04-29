import React from 'react';
import Selfie from '../meOnBeach.jpeg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className='row'>
                <div className="col-lg-6 col-xm-12">
                    {/* the mb-5 below is margin for bootstrap, rather than doing via css */}
                    <div className="photo-wrap mb-5"> 
                    <img className='profile-img' src={Selfie} alt='me...'/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About Me</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nunc scelerisque viverra mauris in aliquam sem fringilla. A condimentum vitae sapien pellentesque habitant. Auctor augue mauris augue neque gravida. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Massa vitae tortor condimentum lacinia quis vel. Aliquet nec ullamcorper sit amet risus nullam. Vestibulum morbi blandit cursus risus at ultrices. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Et netus et malesuada fames ac turpis egestas. Id consectetur purus ut faucibus pulvinar. Augue mauris augue neque gravida in. Arcu dui vivamus arcu felis bibendum ut. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Ut venenatis tellus in metus vulputate eu scelerisque felis.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
