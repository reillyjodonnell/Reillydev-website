import React, { useState, useEffect } from 'react'
import Vulcan from '../../Assets/Icons/Vulcan.svg'
import Placeholder from '../../Assets/Icons/Placeholder.svg'
import '../../CSS Components/Home.css'


export default function HomeCard(props) {
    const [descriptorIndx, changeDescriptorIndx] = useState(0)
    const [display, displayNextWord] = useState(false);
    const [mobile, displayMobile] = useState(false);

    const description = ["Software Engineer", "Programmer", "Sci-fi fan", "Thinker"];

    useEffect(() => {

        const timer = setInterval(() => {
            let x = window.innerWidth;
            if (x <= 1300) {
                displayMobile(true);
            }
            else displayMobile(false);

            let index = descriptorIndx;
            changeDescriptorIndx(index + 1)
            displayNextWord(!display)

        }, 4000);
        return () => clearInterval(timer);


    })
    let descriptorText = description[descriptorIndx % description.length];



    return (
        <>
            <div className="main-card-body">
                <div className="greeting">
                    <div className="greeting-intro">
                        <div>
                            <img className="vulcan" src={Vulcan}></img>
                        </div>
                        <div className={props.darkMode ? "greeting-intro-text dark transition" : "greeting-intro-text transition"}>
                            <h2>My name is Reilly O'Donnell</h2>
                        </div>
                    </div>
                    <div className={props.darkMode ? "greeting-profession-text transition dark " : "greeting-profession-text transition"}>
                        <h2 className="greeting-main-text">I'm a </h2>
                        <h2 className={display ? "professions animate" : "professions"}>{descriptorText}</h2>
                    </div>
                </div>
                <div className="main-card-abstract-image">

                    <img src={Placeholder} alt="" />
                </div>
            </div>


        </>


    )
}
