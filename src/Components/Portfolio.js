import React from 'react';
import Planet from '../Assets/Icons/Planet.svg';
import Memesfr from '../Assets/Screenshots/Desktop.png';
import '../CSS Components/Portfolio.css';
import { ReactComponent as ReactIcon } from '../Assets/Icons/React.svg';
import { ReactComponent as JavaScript } from '../Assets/Icons/JavaScript.svg';
import { ReactComponent as MaterialUI } from '../Assets/Icons/MaterialUI.svg';
import { ReactComponent as Firebase } from '../Assets/Icons/Firebase.svg';
import { ReactComponent as CSSIcon } from '../Assets/Icons/CSS.svg';
import Project from './Project';

export default function Portfolio({ darkMode }) {
  return (
    <>
      <section id="portfolio">
        <div>
          <div className="portfolio-container">
            <div className="portfolio-header navigation-header">
              <img src={Planet} alt="A planet" />

              <h1>Here's What I've Worked On</h1>
            </div>
            <Project
              codeLink="https://github.com/reillyjodonnell/memesfr-beta"
              projectImage={Memesfr}
              projectTitle="Memesfr"
              projectLink="https://memesfr.com"
              projectDescription="A serverless, full-stack social media application that allows users to
                  share memes within the community. Users can post, like, and
                  favorite memes."
              technologies={[
                'React',
                'Firebase',
                'JavaScript',
                'Material-UI',
                'CSS',
              ]}
              technologiesIcons={[
                ReactIcon,
                Firebase,
                JavaScript,
                MaterialUI,
                CSSIcon,
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
