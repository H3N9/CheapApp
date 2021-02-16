import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponents.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <BoxNav text={"Launch"} />
            <BoxNav text={"Rockets"} />
            <BoxNav text={"Home"} />
        </div>
    )
}

export default NavBar