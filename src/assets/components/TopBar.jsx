import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/TopBar.css'

const TopBar = () => {
  return (
    <nav className="topbar">
      <div className="topbar-center">
        <ul>
          <li>
            <a href="/#about" className="link">
              <FontAwesomeIcon icon={faUser} />
              <span className="text"> About</span>
            </a>
          </li>
          <li>
            <a href="/#skills" className="link">
              <FontAwesomeIcon icon={faList} />
              <span className="text"> Skills</span>
            </a>
          </li>
          <li>
            <a href="/#projects" className="link">
              <FontAwesomeIcon icon={faProjectDiagram} />
              <span className="text"> Projects</span>
            </a>
          </li>
          <li>
            <a href="/#contact" className="link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text"> Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
