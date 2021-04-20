import React, { useState } from 'react'
import '../CSS Components/Header.css'
import Moon from '../Assets/Icons/Moon.svg'
import Sun from '../Assets/Icons/Sun.svg'
import MenuBar from '../Assets/Icons/MenuBar.svg'

export default function Header(props) {

    let mobile = true;


    return (
        <div className="header-wrapper">
            <header className={props.darkMode ? "header-dark transition" : "header transition"} >
                <div className={props.darkMode ? "logo-dark transition" : "logo transition"}>
                    <h2>RO</h2>
                </div>
                {mobile ?
                    <div className="hamburger-bar">
                        <img src={MenuBar} className="hamburger-icon" alt="" srcset="" />

                    </div>

                    :


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
                        <img id="links" onClick={props.toggleDarkMode} className="dark-mode-image transition" src={props.darkMode ? Sun : Moon} alt="" srcset="" />


                    </div>
                }

            </header>

        </div>
    )
}
