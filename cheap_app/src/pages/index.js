import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../components/navBar'
import Launch from './launch'
import Rockets from './rockets'
import Home from './home'
import '../styles/stylesPages.css'

const Index = () => {
    return (
        <Router>
            <NavBar />
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



export default Index