import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponents.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <BoxNav text={"Launch"} path="/launch" />
            <BoxNav text={"Rockets"} path="/rockets" />
            <BoxNav text={"Home"} path="/" />
        </div>
    )
}

export default NavBar