import React from 'react';
import About from './About';
import '../CSS Components/Skills.css';
import { useTheme } from '../contexts/ThemeContext';
import Satellite from '../Assets/Icons/Comet.svg';

export default function Skills() {
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
                    <img src={Satellite} />
                    <h1>My Skills</h1>
                  </div>
                  <span>
                    Hello! My name is Reilly O'Donnell - I absolutely love the
                    process of creating things through code. It involves a
                    combination of some of my favorite things: logic,
                    creativity, and computers! I genuinely have a passion for
                    people and always enjoy meeting new people!
                  </span>
                  <br />
                  <br />
                  <span>
                    I love spending time with my family and spending time
                    outdoors. I'd like to think I have a green thumb 🪴 I also
                    love to go camping, just not during the summer when it's in
                    the 90's. I'm an avid sci-fi fan! I'm currently reading the
                    last few books of the Foundation series.
                  </span>
                  <br />
                  <br />
                  <span>
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
              <div className="about-card-image"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
