import React from 'react';
import '../CSS Components/Blog.css';
import { useTheme } from '../contexts/ThemeContext';
import Satellite from '../Assets/Icons/Comet.svg';

export default function Skills() {
  const { darkMode } = useTheme();

  const Card = (props) => {
    return (
      <a href={props.link} rel="noreferrer" target="_blank">
        <div className="card-container">
          <span className="headline">NEW ARTICLE</span>
          <h2 className="article-title">{props.title}</h2>
          <span className="article-length">{props.length} MIN</span>
        </div>
      </a>
    );
  };

  return (
    <>
      <section id="blog">
        <div className="portfolio-container">
          <div className={darkMode ? 'blog-header' : 'blog-header-light'}>
            <img alt="satellite" src={Satellite} />
            <h1>Recent Writings</h1>
          </div>
          <div className="row-cards">
            <Card
              link="https://blog.reilly.dev/react-essentials-props"
              title="React Essentials: Props"
              length="3"
            />
          </div>
          <a target="_blank" rel="noreferrer" href="https://blog.reilly.dev">
            <div
              className={darkMode ? 'blog-button' : 'blog-button blog-light'}
            >
              Visit Blog
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
