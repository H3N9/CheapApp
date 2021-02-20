import React from 'react'
import '../styles/stylesComponentHome.css'
import { Link } from 'react-router-dom'
import Logo from '../images/home/logo.png'

const BoxNav = ({ text, path }) => {
    return (
        <Link className="boxNav" to={path}>
            {path !== "/CheapApp"? 
                (<p>{text}</p>):
                (<img className="logo" src={Logo} alt="Logo_SpaceX" alt="logo"/>)}
        </Link>
    )
}

export default BoxNav
