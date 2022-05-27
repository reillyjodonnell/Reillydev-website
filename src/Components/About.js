import React from 'react';
import Reilly from '../Assets/Reilly-2.png';
import '../CSS Components/Home.css';
import '../CSS Components/Cards/AboutCard.css';
import { useTheme } from '../contexts/ThemeContext';
import Satellite from '../Assets/Icons/Satellite.svg';

export default function HomeCard(props) {
  const { darkMode } = useTheme();

  return (
    <>
      <section id="about">
        <div
          className={
            darkMode ? 'about-container-dark' : 'about-container-light'
          }
        >
          <div className="about-background">
            <div className="greeting">
              <div className="greeting-intro">
                <div
                  className={
                    darkMode
                      ? 'greeting-intro-text dark transition'
                      : 'greeting-intro-text transition'
                  }
                ></div>
                <div
                  className={
                    darkMode
                      ? 'about-text dark transition'
                      : 'about-text transition'
                  }
                >
                  <div className="navigation-header">
                    <img alt="satellite" src={Satellite} />
                    <h1>About Me</h1>
                  </div>
                  <br />

                  <span className="About-main-text">Hey! I'm Reilly 😎</span>
                  <br />
                  <br />

                  <span className="About-secondary-text">
                    I'm a software Engineer with a passion for building quality
                    software. I'm a husband, dad, and casual{' '}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.youtube.com/watch?v=xA8-6X8aR3o&t=1s"
                    >
                      <span className="About-text-bold">musician. 🎹</span>
                    </a>
                  </span>
                  <br />
                  <br />
                  <span className="About-secondary-text">
                    I'm a really big fan of JavaScript and the fantastic
                    community surrounding it. When I'm not coding I'm either
                    doing karaoke or playing with my 18 month old. I'm an avid
                    sci-fi fan! I'm currently wrapping up on the last few books
                    of the Foundation series.
                  </span>
                  <br />
                  <br />
                  <span className="About-secondary-text">
                    Here's some of the technologies I've been working with:
                  </span>
                  <br />
                  <ul className="technology-list light-text">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Remix</li>
                    <li>SQLite</li>
                    <li>NodeJS</li>
                    <li>esbuild</li>
                  </ul>
                </div>
              </div>
              <div
                className={
                  darkMode
                    ? 'greeting-profession-text transition dark '
                    : 'greeting-profession-text transition'
                }
              ></div>
            </div>
            <div className="gradient">
              <div className="about-card-image">
                <img alt="me!" src={Reilly} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
