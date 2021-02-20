import React from 'react'
import BoxNav from './boxNav'
import '../styles/stylesComponentHome.css'


const NavBar = ({ addColor }) => {
    return (
        <div className={addColor}>
            <BoxNav text={'Home'} path="/CheapApp" />
            <BoxNav text={'Rockets'} path="/rockets" />
            <BoxNav text={'Launch'} path="/launch" />   
        </div>
    )
}

export default NavBar
