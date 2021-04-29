import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Text to figure out later</h1>
                <Typed
                    className='typed-text'
                    strings={['Web Dev with TONS of experience', '...TONS of LIFE experience']}
                    typeSpeed={40}
                    backSpeed={10}
                    loop                
                />
                <a href="#" className="btn-main-offer">contact me</a>

            </div>
        </div>
    )
}

export default Header
