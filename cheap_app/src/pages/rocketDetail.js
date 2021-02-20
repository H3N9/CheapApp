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
        <React.Fragment>
            {rocket !== undefined &&
                <RocketDetailInfo rocket={rocket}/>
            }
        </React.Fragment>
    )
}

export default RocketDetail