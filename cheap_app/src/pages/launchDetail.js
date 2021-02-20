import React, { useEffect, useState } from 'react'
import '../styles/styleLaunchDetail.css'
import {useParams, useLocation} from 'react-router-dom'
import {fetchData} from '../tools/fetch'
import LaunchInfo from '../components/launch/launchInfo'


const LaunchDetail = () => {
    const location = useLocation()
    const {launchId} = useParams()
    const [launchInfo, setLaunchInfo] = useState(false)

    useEffect(() => {
        if(location.state === undefined){
            const urlLaunch = `https://api.spacexdata.com/v3/launches/${launchId}`
            fetchData(urlLaunch, setLaunchInfo)
        }
        else{
            setLaunchInfo(location.state)
        }
        
        
    }, [])


    return (
        <>
        {launchInfo && (<LaunchInfo launch={launchInfo}/>)}
        </>
    )
}

export default LaunchDetail