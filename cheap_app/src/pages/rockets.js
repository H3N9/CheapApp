import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import RocketBox from '../components/rocket/rocketBox'
import '../styles/stylesRocketPage.css'

const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        fetchData('https://api.spacexdata.com/v3/rockets', (data) => {
            console.log(data)
            setRockets(data)
        })
    }, [])

    return (
        <>
            <div class="container">
                {rockets.map((rocket) => {
                    return <RocketBox rocket={rocket} />
                })}
            </div>
        </>
    )
}

export default Rockets
