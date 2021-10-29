import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


function Navigation() {

    return (
      <nav className="navbar nav navbar-expand">
        <a href="/">Jhanae Chisholm</a>
       <div className="collapse navbar-collapse submenu">
        <ul className=" navbar-nav">
            <li className="nav-item active">
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
