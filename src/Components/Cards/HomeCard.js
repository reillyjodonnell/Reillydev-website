import React from 'react';
import '../../CSS Components/Home.css';
import Typewriter from 'typewriter-effect';
import Space from '../../Assets/Space.svg';
import Space2 from '../../Assets/Rocket.svg';
import { useTheme } from '../../contexts/ThemeContext';

export default function HomeCard() {
  const { darkMode } = useTheme();

  const description = [
    'Sci-fi fan',
    'Software Engineer',
    'JavaScript Developer',
    'Programmer',
    'React Developer',
  ];

  return (
    <>
      <div className="main-card-body">
        <div className="main-card-greeting">
          {/* <div
            className={
              darkMode
                ? 'greeting-intro-text dark transition'
                : 'greeting-intro-text transition'
            }
          >
            <span className="wave"> 👋🏼 </span>
            <span className="my-name-is">My name is</span>
          </div> */}
          <div className="greeting-intro-name-text">
            <h2 className="name">Reilly O'Donnell </h2>
          </div>

          <div className="greeting-subtext ">
            <span>
              I'm a software engineer and a huge Star Wars fan. Try your best to
              find all of the Star Wars easter eggs on this site!
            </span>
          </div>
          <div className="hidden-text-container">
            <span className="hidden-text">Use the force, Luke!</span>
          </div>
          <div className="Homecard-blog-button-container">
            <a href="https://blog.reilly.dev" rel="noreferrer" target="_blank">
              <button className="Homecard-blog-button ">
                Check out my blog
              </button>
            </a>
          </div>
        </div>
        <div className="main-card-abstract-image">
          {darkMode ? (
            <img
              alt="starry sky with rocket"
              className="abstract-image"
              src={Space}
            />
          ) : (
            <img
              alt="starry sky with rocket"
              className="abstract-image"
              src={Space2}
            />
          )}
        </div>
      </div>
    </>
  );
}
