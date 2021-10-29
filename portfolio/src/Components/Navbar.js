import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


function Navigation() {

    return (
      <nav className="navbar nav">
        <a href="/home">Jhanae Chisholm</a>
       <div className="">
        <ul className=" navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/links">Links</a>
            </li>
          </ul>
       </div>
      </nav>
    )
}

export default Navigation
