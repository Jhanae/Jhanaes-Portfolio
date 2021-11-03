import React from 'react';
// import pic from '../Pictures/background.jpg';
import styled from 'styled-components'

function Home() {
    const StyledDiv = styled.div`
    a{
        color: black;
        font-weight: bold;
    }
    // a:visited{
    //     color: blue;
    // }
`;
    return (
        <StyledDiv>
        <div className="container">
            <h1 className="name">Jhanae Chisholm</h1>
            <div className="row">
                <div className="col-lg stickyNote1">
                    <a href="/Jhanaes-Portfolio/about">About</a>
                </div>     
                <div className="col-lg stickyNote2">
                    <a href="/Jhanaes-Portfolio/projects" className="">Projects</a>
                </div> 
            </div> 
            <div className="row">      
                <div className="col-lg stickyNote3">
                    <a href="/Jhanaes-Portfolio/links" className="">Links</a>
                </div> 
                <div className="col-lg stickyNote4">
                    <a href="/Jhanaes-Portfolio/resume">Resume</a>
                </div> 
            </div>
        </div>
        </StyledDiv>
    )
}

export default Home
