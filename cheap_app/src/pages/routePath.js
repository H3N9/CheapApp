import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/navBar'
import Launch from './launch'
import Rockets from './rockets'
import Home from './home'
import '../styles/stylesHome.css'

const screenHeight = window.innerHeight

const RoutePath = () => {
    const [stylePacks, setStylePacks] = useState(defaultStlyes)

    const handleScroll = useCallback(() => {
        const stylesChange = { ...stylePacks }
        const scrollY = (window.pageYOffset / screenHeight) * 100 + 100 //percent pageYOffset percent from screen window

        if (scrollY > 110 && stylePacks.navBar === defaultStlyes.navBar) {
            stylesChange.navBar = scrollStyles.navBar
        } else {
            stylesChange.navBar = defaultStlyes.navBar
        }

        setStylePacks(stylesChange)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Router>
            <NavBar addColor={stylePacks.navBar} />
            <div id="content">
                <Switch>
                    <Route exact path="/">
                        <Home stylePacks={stylePacks} />
                    </Route>
                    <Route path="/launch">
                        <Launch />
                    </Route>
                    <Route path="/rockets">
                        <Rockets />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const defaultStlyes = {
    navBar: 'navBar',
    histories: 'name-i-b',
    detail: 'name-i-b',
}
const scrollStyles = {
    navBar: 'navBar addColor',
    histories: 'name-i-b leftStyle',
    detail: 'name-i-b rightStyle',
}

export default RoutePath
