import React, { useEffect, useState } from 'react'
import '../CSS Components/PrimaryContent.css'
import Vulcan from '../Assets/Icons/Vulcan.svg'
import Placeholder from '../Assets/Icons/Placeholder.svg'
import WhiteDown from '../Assets/Icons/WhiteChevronDown.svg'
import BlackDown from '../Assets/Icons/BlackChevronDown.svg'


import Header from './Header'

export default function PrimaryContent() {
    const [descriptorIndx, changeDescriptorIndx] = useState(0)
    const [darkMode, enableDarkMode] = useState(false);
    const [display, displayNextWord] = useState(false);



    const description = ["Software Engineer", "Programmer", "Sci-fi fan", "Thinker"];

    useEffect(() => {
        const timer = setInterval(() => {
            let index = descriptorIndx;
            changeDescriptorIndx(index + 1)
            displayNextWord(!display)

        }, 5000);
        return () => clearInterval(timer);


    })


    const toggleDarkMode = () => {
        enableDarkMode(!darkMode)
    }
    let descriptorText = description[descriptorIndx % description.length];



    return (
        <div className="background">
            <section className="main-content">
                <div className={darkMode ? "main-card-dark transition" : "main-card transition"} >

                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <div className="main-card-body">

                        <div className="greeting">
                            <div className="greeting-intro">
                                <div>
                                    <img className="vulcan" src={Vulcan}></img>
                                </div>

                                <div className={darkMode ? "greeting-intro-text dark transition" : "greeting-intro-text transition"}>
                                    <h2>My name is Reilly</h2>
                                </div>
                            </div>

                            <div className={darkMode ? "greeting-profession-text transition dark " : "greeting-profession-text transition"}>
                                <h2>I'm a </h2>
                                <h2 className={display ? "professions animate" : "professions"}>{descriptorText}</h2>
                            </div>
                        </div>
                        <div className="main-card-abstract-image">

                            <img style={{ height: "20rem" }} src={Placeholder} alt="" />
                        </div>


                    </div>
                    <div className="chevron-down">
                        <img src={darkMode ? WhiteDown : BlackDown} alt="" srcset="" />
                    </div>



                </div>

            </section>



        </div>
    )
}
