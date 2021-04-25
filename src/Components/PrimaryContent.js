import React, { useEffect, useState } from 'react'
import '../CSS Components/PrimaryContent.css'
import Home from './Cards/HomeCard'
import Portfolio from './Cards/PortfolioCard'
import Skills from './Cards/SkillsCard'
import HireMe from './Cards/HireMeCard'
import Header from './Header'
import Down from './ChevronDown'


export default function PrimaryContent() {
    const [activeScreen, setActiveScreen] = useState(0)

    const [descriptorIndx, changeDescriptorIndx] = useState(0)
    const [darkMode, enableDarkMode] = useState(false);
    const [display, displayNextWord] = useState(false);
    const [mobile, displayMobile] = useState(false);



    const description = ["Software Engineer", "Programmer", "Sci-fi fan", "Thinker"];

    useEffect(() => {
        console.log(activeScreen);

        const timer = setInterval(() => {
            let x = window.innerWidth;
            if (x <= 1300) {
                displayMobile(true);
            }
            else displayMobile(false);

            let index = descriptorIndx;
            changeDescriptorIndx(index + 1)
            displayNextWord(!display)

        }, 5000);
        return () => clearInterval(timer);

    })

    const updateCard = () => {
        setActiveScreen(activeScreen + 1)



    }



    const toggleDarkMode = () => {
        enableDarkMode(!darkMode)
    }




    return (
        <div className="background">
            <section className="main-content">
                <div className={darkMode ? "main-card-dark transition" : "main-card transition"} >
                    <Header setActiveScreen={setActiveScreen} darkMode={darkMode} mobile={mobile} toggleDarkMode={toggleDarkMode} />
                    {
                        activeScreen === 1 ? <Portfolio darkMode={darkMode} />
                            :
                            activeScreen === 2 ? <Skills darkMode={darkMode} />
                                :
                                activeScreen === 3 ? <HireMe darkMode={darkMode} />
                                    : <Home setActiveScreen={setActiveScreen} activeScreen={activeScreen} darkMode={darkMode} />
                    }
                </div>
                <Down />


            </section>
            <div>

            </div>



        </div>
    )
}
