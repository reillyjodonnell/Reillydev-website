import React from 'react'
import '../../CSS Components/Cards/PortfolioCard.css'

export default function Portfolio(props) {
    return (
        <div className="main-text" >
            <h3 style={props.darkMode ? { color: 'white' } : null}>Portfolio</h3>

        </div>
    )
}
