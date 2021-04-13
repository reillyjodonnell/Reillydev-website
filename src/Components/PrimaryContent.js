import React, { useEffect, useState } from 'react'
import '../CSS Components/PrimaryContent.css'
import Vulcan from '../Assets/Icons/Vulcan.svg'
import Placeholder from '../Assets/Icons/Placeholder.svg'

import Header from './Header'

export default function PrimaryContent() {
    const [descriptorIndx, changeDescriptorIndx] = useState(0)


    const description = ["Software Engineer", "Programmer", "Sci-fi fan", "Thinker"];

    useEffect(() => {
        const timer = setInterval(() => {
            let index = descriptorIndx;
            changeDescriptorIndx(index + 1)

        }, 4000);
        return () => clearInterval(timer);


    })
    let descriptorText = description[descriptorIndx % description.length];

    return (
        <div className="background">
            <section className="main-content">
                <div className="main-card">

                    <Header />
                    <div className="main-card-body">

                        <div className="greeting">
                            <div className="greeting-intro">
                                <div>
                                    <img className="vulcan" src={Vulcan}></img>
                                </div>

                                <div className="greeting-intro-text">
                                    <h2>My name is Reilly</h2>
                                </div>
                            </div>

                            <div className="greeting-profession-text">
                                <h2>I'm a </h2>
                                <h2 className="professions">{descriptorText}</h2>
                            </div>
                        </div>
                        <div className="main-card-abstract-image">

                            <img style={{ height: "20rem" }} src={Placeholder} alt="" />
                        </div>

                    </div>



                </div>

            </section>



        </div>
    )
}
