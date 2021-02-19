import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import RocketBox from '../components/rocket/rocketBox'
import '../styles/stylesRocketPage.css'

const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() =>{
        fetchData('https://api.spacexdata.com/v3/rockets', (data) =>{
            setRockets(data)
        })
    }, [])

    return(
        <React.Fragment>
            <div id="rocket-i">
                <div><h1>ROCKET</h1></div>
                <div className="gradientColor"></div>
            </div>
            <div className="container">
                {rockets.map((rocket) =>{
                    return(
                        <RocketBox key={rocket.id} rocket={rocket}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Rockets
