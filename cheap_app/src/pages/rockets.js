import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import RocketBox from '../components/rocket/rocketBox'

const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() =>{
        fetchData('https://api.spacexdata.com/v3/rockets', (data) =>{
            console.log(data)
            setRockets(data)
        })
    }, [])

    return (
        <div className="boxImage">
            <h1>Rockets</h1>
            {rockets.map((item) =>{
                return(
                    <RocketBox rocket={item}/>
                )
            })}
        </div>
    )
}


export default Rockets