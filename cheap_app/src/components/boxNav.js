import React from 'react'
import "../styles/stylesComponents.css"

const BoxNav = ({text, clickHandle}) => {
    return (
        <div className="boxNav">
            <p>{text}</p>
        </div>
    )
}

export default BoxNav