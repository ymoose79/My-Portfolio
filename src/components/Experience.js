// rafce =>  the shortcut for the following;

import React from 'react'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>
            </div>
            <div className='container experience-wrapper'>
            <div className='timeline-block timeline-block-left'>
                    <div className='marker'> </div>
                        <div className='timeline-content'>
                            <h3>Jan 1979 - May 2007</h3>
                            <p>I put myself through college, majored in Fine Arts with a specialization in painting.  Won a couple scholarships for over-all body of work and a paper I wrote.  Bought a motorcycle some plane tickets and just started traveling.  </p>
                        </div>
                   
              </div>
                {/*  */}
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'>  </div>
                        <div className='timeline-content'>
                            <h3>May 2007 - Jan 2017</h3>
                            <p>After graduating college, there was more travel.  I sold artwork in Spain where I gained a better than average understanding of spanish.  I was a professional raft guide and slept in a lot of tents.  Met up with some hedgefund guys (randomly) that had an advantage blackjack team.  Met my wife then settled down here in Jacksonville.</p>
                    </div>
              </div>
                {/*  */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'>  </div>
                        <div className='timeline-content'>
                            <h3>June 2017 - Mar 2019</h3>
                            <p>Worked 50 hour weeks for a custom cabinet and furniture maker.  No benefits and long hours but I enjoyed the work.  The one skill I say that translates well to coding is in the architecture: everything from creating a blueprint to breaking down the job into components and finally production.  </p>
                        </div>
                  
              </div>
                {/*  */}
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                        <div className='timeline-content'>
                            <h3>May 2019 - Feb 2021</h3>
                            <p>My first child was due in June 2019. Between daycare and healthcare, I had to leave my day job to work part-time nights so I could watch our daughter during the day.  When my son was born a year and a half later, it became clear I need a career that allows me to afford health insurance.</p>
                        </div>
                    
              </div>
                {/*  */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'> </div>
                        <div className='timeline-content'>
                            <h3>Feb 2021 - current</h3>
                            <p>So here I am, 42 years old #learnToCode.  I really enjoy taking data from an API and displaying that information, especially in Graph format.  Part of the app I'm working on is adding a level of security and will also have a CRUD component.  Part of me wishes I started learning this instead of art back in the early 2000s, but then my Bio might not be as fun to read. </p>
                        </div>
                   
              </div>
                {/*  */}
            </div>
        </div>
    )
}


export default Experience
