import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../components/navBar'
import Launch from './launch'
import Rockets from './rockets'
import Home from './home'

const Index = () => {
    return (
        <Router>
          <NavBar />

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
            
        </Router>
      )
}



export default Index