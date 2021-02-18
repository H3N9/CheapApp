import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponents.css'
import Logo from '../images/home/spaceLogo.png'

const NavBar = ({addColor}) => {
    return (
        <div className={addColor} >
            <BoxNav text={"Launch"} path="/launch" />
            <BoxNav text={"Rockets"} path="/rockets" />
            <BoxNav text={"Home"} path="/" />
            <img  src={Logo} alt="Logo_SpaceX" />
            
        </div>
    )
}

export default NavBar