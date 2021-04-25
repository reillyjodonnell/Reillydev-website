import React, { useState, useEffect } from 'react'
import '../CSS Components/Header.css'
import Moon from '../Assets/Icons/Moon.svg'
import Sun from '../Assets/Icons/Sun.svg'
import MenuBar from '../Assets/Icons/MenuBar.svg'

export default function Header(props) {
    console.log(props.setActiveScreen);

    const [active, setActive] = useState(0);

    let navigationOptions = [
        {
            id: 1,
            name: 'portfolio'
        },
        {
            id: 2,
            name: 'skills'
        },
        {
            id: 3,
            name: 'hire me'
        }
    ]


    const updateNavigation = (key) => {
        console.log(key);
        setActive(key);
        props.setActiveScreen(key);
    }

    // Loop through the list assigning values starting at 0
    // When the number is selected send that to the state 
    // Update the state and rerender showing the underline







    return (
        <div className="header-wrapper">
            <header className={props.darkMode ? "header-dark transition" : "header transition"} >
                <div onClick={() => updateNavigation(0)} className={props.darkMode ? "logo-dark transition" : "logo transition"}>
                    <h2>RO</h2>
                </div>
                {props.mobile ?
                    <div className="hamburger-bar">
                        <img src={MenuBar} className="hamburger-icon" alt="" srcset="" />
                    </div>
                    :
                    <div className="nav-links">
                        {navigationOptions.map((nav) =>
                            <div id="links">
                                <h2 key={nav.id} style={active == nav.id ? { textDecoration: 'underline' } : null} onClick={() => updateNavigation(nav.id)} >
                                    {nav.name}
                                </h2>

                            </div>

                        )}
                        <div id="links">
                            <img onClick={props.toggleDarkMode} className="dark-mode-image transition" src={props.darkMode ? Sun : Moon} alt="" srcset="" />


                        </div>
                    </div>
                }
            </header>

        </div>
    )
}
