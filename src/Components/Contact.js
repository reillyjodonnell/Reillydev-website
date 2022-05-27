import React from 'react';
import '../CSS Components/Contact.css';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alien from '../Assets/Icons/Alien.svg';
import { useTheme } from '../contexts/ThemeContext';

export default function Skills() {
  const { darkMode } = useTheme();

  const SocialMediaIcon = ({ link, icon }) => {
    return (
      <button className="SocialMediaIcon-button">
        <a target="_blank" rel="noreferrer" href={link}>
          {icon}
        </a>
      </button>
    );
  };

  return (
    <>
      <section id="contact">
        <div className={darkMode ? 'blog-header' : 'blog-header-light'}>
          <img alt="alien" src={Alien} />
          <h1>Contact Me</h1>
        </div>
        <div className="Contact-container">
          <div className="Contact-form">
            <span className="Contact-main-message">Send me a message!</span>
            <span className="Contact-secondary-message">
              Use the force, Luke!
            </span>

            <div className="Contact-form-input-container">
              <label className="Contact-form-label">Your name</label>
              <input
                type="text"
                className="Contact-form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="Contact-form-input-container">
              <label className="Contact-form-label">Your email:</label>
              <input
                type="text"
                className="Contact-form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="Contact-form-input-container">
              <label className="Contact-form-label">Your message:</label>
              <input
                type="text"
                className="Contact-form-input"
                placeholder="My favorite Star Wars movie is Episode __"
              />
            </div>
            <button className="Contact-form-submit">Send</button>
          </div>
          <div className="Contact-social-container">
            <span className="Contact-social-container-title">The socials</span>
            <div className="socials-list">
              <SocialMediaIcon
                link="https://twitter.com/reillyjodonnell"
                icon={<FontAwesomeIcon className="fa-2x" icon={faTwitter} />}
              />
              <SocialMediaIcon
                link="https://www.github.com/reillyjodonnell/"
                icon={<FontAwesomeIcon className="fa-2x" icon={faGithub} />}
              />
              <SocialMediaIcon
                link="https://www.linkedin.com/in/reillyjodonnell/"
                icon={<FontAwesomeIcon className="fa-2x" icon={faLinkedin} />}
              />
              <SocialMediaIcon
                link="mailto:odonnell.reilly.j@gmail.com.com?subjectThe%20Force%20is%20Strong%20With%20This%20One"
                icon={<FontAwesomeIcon className="fa-2x" icon={faEnvelope} />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
