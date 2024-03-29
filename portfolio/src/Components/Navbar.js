import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components'

function Navigation() {
  const StyledDiv = styled.div`
    a{
        color: white;
        font-weight: bold;
    }
    // a:visited{
    //     color: brown;
    // }
`;
    return (
      <StyledDiv>
      <nav className="navbar nav navbar-expand">
        <a href="/Jhanaes-Portfolio/" style={{ fontColor: 'black' }}>Jhanae Chisholm</a>
       <div className="collapse navbar-collapse submenu">
        <ul className=" navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Jhanaes-Portfolio/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Jhanaes-Portfolio/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Jhanaes-Portfolio/links">Links</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Jhanaes-Portfolio/resume">Resume</a>
            </li>
          </ul>
       </div>
      </nav>
      </StyledDiv>
    )
}

export default Navigation
