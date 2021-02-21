import React, { useState, useEffect } from 'react'
import '../styles/stylesComponentHome.css'
import { Link } from 'react-router-dom'
import Logo from '../images/home/logo.png'

const BoxNav = ({ text, path, menuActive }) => {

    return (
        <Link className={menuActive} to={{
                pathname: path,
             }}>
            {path !== "/CheapApp"? 
                (<p>{text}</p>):
                (<img className="logo" src={Logo} alt="Logo_SpaceX" alt="logo"/>)}
        </Link>
    )
}

export default BoxNav
