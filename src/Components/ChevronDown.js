import React from 'react'
import '../CSS Components/PrimaryContent.css'

import WhiteDown from '../Assets/Icons/WhiteChevronDown.svg'
import BlackDown from '../Assets/Icons/BlackChevronDown.svg'

export default function ChevronDown(props) {
    return (
        <div onClick={props.updateCard} className="chevron-down">
            <img src={props.darkMode ? WhiteDown : BlackDown} alt="" srcset="" />
        </div>
    )
}
