import React, { useEffect, useState } from 'react'
import '../styles/styleLaunchDetail.css'
import {useParams} from 'react-router-dom'
import {fetchData} from '../tools/fetch'
import LaunchInfo from '../components/launch/launchInfo'


const LaunchDetail = () => {
    const {launchId} = useParams()
    const [launchInfo, setLaunchInfo] = useState(false)

    useEffect(() => {
        const urlLaunch = `https://api.spacexdata.com/v3/launches/${launchId}`
        fetchData(urlLaunch, setLaunchInfo)
        
    }, [])


    return (
        <>
        {launchInfo && (<LaunchInfo launch={launchInfo}/>)}
        </>
    )
}

export default LaunchDetail