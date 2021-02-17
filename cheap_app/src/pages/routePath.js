import React, { useCallback, useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../components/navBar'
import Launch from './launch'
import Rockets from './rockets'
import Home from './home'
import '../styles/stylesPages.css'

const RoutePath = () => {
    const [color, setColor] = useState("navBar")

    const handleScroll = useCallback(() =>{
        if(window.pageYOffset > 100 && color === "navBar") {
            setColor(color+" addColor")
        }
        else{
            setColor("navBar")
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    
    return (
        <Router>
            <NavBar color={color} />
            <div id="content">
                <Switch>
                <Route exact path="/">
                    <Home />
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



export default RoutePath