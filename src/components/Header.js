/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1 class="main-title">Web Dev</h1>
                <Typed
                    className='typed-text'
                    strings={['with TONS of experiernce', '...with TONS of LIFE  experience']}
                    typeSpeed={50}
                    backSpeed={15}
                    loop                
                />
                <a href="#" className="btn-main-offer">contact me</a>

            </div>
        </div>
    )
}

export default Header
