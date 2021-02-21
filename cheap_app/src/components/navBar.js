import React from 'react'
import BoxNav from './boxNav'
import { useActiveMenu } from '../pages/routePath'
import '../styles/stylesComponentHome.css'

const NavBar = ({ addColor }) => {
    const {homeMenuActive, rocketMenuActive, launchMenuActive} = useActiveMenu()
    return (
        <div className={addColor}>
            <BoxNav text={'Home'} path="/CheapApp" menuActive={homeMenuActive} />
            <BoxNav text={'Rockets'} path="/rockets" menuActive={rocketMenuActive} />
            <BoxNav text={'Launches'} path="/launch" menuActive={launchMenuActive} />   
        </div>
    )
}

export default NavBar
