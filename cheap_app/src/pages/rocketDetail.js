import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchData } from '../tools/fetch'
import RocketDetailInfo from '../components/rocket/RocketDetailInfo'
import "../styles/stylesRocketDetailPage.css"

const RocketDetail = () =>{
    const location = useLocation()
    const { rocketId } = useParams();
    const [rocket, setRocket] = useState(undefined)
    const rocketUrl = `https://api.spacexdata.com/v3/rockets/${rocketId}`

    useEffect(() =>{
        if (location.state === undefined){
            fetchData(rocketUrl, setRocket)
        }
        else{
            setRocket(location.state.rocket)
        }
    }, [])

    return (
        <div className="rocketBackground">
            <div className="navDummy"></div>
            <div className="gradient">
                {rocket !== undefined &&
                    <RocketDetailInfo rocket={rocket}/>
                }
            </div>
        </div>
    )
}

export default RocketDetail