import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import RocketBox from '../components/rocket/rocketBox'
import '../styles/stylesRocketPage.css'
import '../styles/stylesPages.css'

const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() =>{
        fetchData('https://api.spacexdata.com/v3/rockets', (data) =>{
            setRockets(data)
        })
    }, [])

    return(
        <div className="container">
            {rockets.map((rocket) =>{
                return(
                    <RocketBox key={rocket.id} rocket={rocket}/>
                )
            })}
        </div>
    )
}

export default Rockets