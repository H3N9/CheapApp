import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponents.css'
import Logo from '../images/home/spaceLogo.png'

const NavBar = ({color}) => {
    return (
        <div className={color} >
            <BoxNav text={"Launch"} path="/launch" />
            <BoxNav text={"Rockets"} path="/rockets" />
            <BoxNav text={"Home"} path="/" />
            <div id="logo">
                <img id="logo" src={Logo} alt="Logo_SpaceX" />
            </div>
            
        </div>
    )
}

export default NavBar