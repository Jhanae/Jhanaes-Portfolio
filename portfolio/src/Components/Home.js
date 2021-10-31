import React from 'react';
// import pic from '../Pictures/background.jpg';

function Home() {
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg stickyNote1">
                    <p>About</p>
                </div>     
                <div className="col-lg stickyNote2">
                    <p>Projects</p>
                </div> 
            </div> 
            <div className="row">      
                <div className="col-lg stickyNote3">
                    <p>Links</p>
                </div> 
                <div className="col-lg stickyNote4">
                    <p>Resume</p>
                </div> 
            </div>
        </div>
    )
}

export default Home
