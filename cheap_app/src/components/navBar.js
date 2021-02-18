import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponentHome.css'
import Logo from '../images/home/spaceLogo.png'

const NavBar = ({ addColor }) => {
    return (
        <div className={addColor}>
            <BoxNav text={'Launch'} path="/launch" />
            <BoxNav text={'Rockets'} path="/rockets" />
            <BoxNav text={'Home'} path="/" />
            <div id="logo">
                <img src={Logo} alt="Logo_SpaceX" />
            </div>
        </div>
    )
}

export default NavBar
