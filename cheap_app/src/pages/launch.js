import React, { useEffect, useState } from 'react'
import '../styles/styleLaunch.css'
import {fetchData} from '../tools/fetch'
import CardLaunch from '../components/launch/cardLaunch'

const Launch = () => {
    const [launchData, setLaunchData] = useState([])
    const urlLuanch = "https://api.spacexdata.com/v3/launches"

    useEffect(() => {
        fetchData(urlLuanch, setLaunchData)
    }, [])


    return (
        <React.Fragment>
            <div id="launch-i">
                <h1>LAUNCH</h1>
            </div>
            <div id="spaceDetails" />

            <div id="launchDetails">
                <div id="boxDetail">
                    {launchData.map((launch, index) => (<CardLaunch key={index} id={index} launch={launch} />))}
                </div>
            </div>
            <div id="endling" />
        </React.Fragment>
    )
}

export default Launch
