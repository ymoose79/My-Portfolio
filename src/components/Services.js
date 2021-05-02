import React from 'react'
import Scorpio from '../Scorpio.png'
import Sagittarius from '../Sagittarius.png'
import Cancer from '../Cancer.png'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Services</h1>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-4 col-sm-g">
                        <div className="box">
                            <img className='circle' src={Scorpio} alt='Scorpio' />
                            <h3>tutorials</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            </div>
                        </div>
                        {/*  =  */}
                        <div className="col-md-4 col-sm-g">
                        <div className="box">
                        <img className='circle' src={Cancer} alt='Cancer' />
                                <h3>web scraping</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            </div>
                        </div>
                        {/*  =  */}
                        <div className="col-md-4 col-sm-g">
                        <div className="box">
                        <img className='circle' src={Sagittarius} alt='Sagittarius' />
                                <h3>branding</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Services
