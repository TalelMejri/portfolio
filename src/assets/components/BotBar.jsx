import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/BotBar.css';

const BotBar = () => {
  return (
    <nav className="bot-bar">
      <div className="bot-bar-center">
        <ul>
          <li>
            <a href="https://github.com/TalelMejri" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faGithub} />
              <span className="text"> GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/talel-mejri-899a73232/" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="text"> LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/talel.mejri.140/" target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon icon={faFacebook} />
              <span className="text"> Facebook</span>
            </a>
          </li>
          <li>
          <a href="https://www.youtube.com/channel/UCH3d1NuLBfPiE0IOXoz3upA" target="_blank" rel="noopener noreferrer" className="link">
            <FontAwesomeIcon icon={faYoutube} />
            <span className="text"> Youtube</span>
          </a>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default BotBar;
