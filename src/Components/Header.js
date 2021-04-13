import React, { useState } from 'react'
import '../CSS Components/Header.css'
import Moon from '../Assets/Icons/Moon.svg'
import Sun from '../Assets/Icons/Sun.svg'

export default function Header() {
    const [darkMode, toggleDarkMode] = useState(false);

    const enableDarkMode = () => {
        toggleDarkMode(!darkMode);
    }

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <h2>RO</h2>
                </div>
                <div className="nav-links">
                    <h2 id="links">
                        portfolio
                    </h2>
                    <h2 id="links">
                        skills
                    </h2>
                    <h2 id="links">
                        hire me
                    </h2>
                    {darkMode ? <img id="links" onClick={enableDarkMode} className="dark-mode-image" src={Sun} alt="" srcset="" />

                        : <img id="links" onClick={enableDarkMode} className="dark-mode-image" src={Moon} alt="" srcset="" />}

                </div>

            </header>

        </div>
    )
}
