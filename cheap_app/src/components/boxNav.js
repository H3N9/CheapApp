import React from 'react'
import "../styles/stylesComponents.css"
import {Link} from 'react-router-dom'

const BoxNav = ({text, path}) => {
    return (
        <Link className="boxNav" to={path} >
            <p>{text}</p>
        </Link>
    )
}

export default BoxNav