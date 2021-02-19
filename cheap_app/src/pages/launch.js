import React, { useEffect, useState } from 'react'
import '../styles/styleLaunch.css'
import {fetchData} from '../tools/fetch'
import CardLaunch from '../components/launch/cardLaunch'

const Launch = () => {
    const [launchData, setLaunchData] = useState([])
    const [years, setYears] = useState([])
    const [searchName, setSearchName] = useState('')
    const urlLuanch = "https://api.spacexdata.com/v3/launches"

    const setLaunchDataPage = (launches) =>{
        setLaunchData(launches)
        const set = new Set(launches.map((item) => item.launch_year))
        const years = Array.from(set)
        setYears(years)
    }

    const setSearchNameHandle = (e) =>{
        setSearchName(e.target.value)
    }

    useEffect(() => {
        fetchData(urlLuanch, setLaunchDataPage)
    }, [])

    useEffect(() =>{
        if (launchData.length > 0){
            const set = new Set(launchData.map((item) => item.launch_year))
            const years = Array.from(set) 
        }
    }, [launchData])

    return (
        <React.Fragment>
            <div id="launch-i">
                <h1>LAUNCH</h1>
            </div>
            <div id="spaceDetails" >
                <div className="select">
                    <select name="slct" id="slct">
                        <option value="0" selected disabled>YEAR</option>
                        <option value="any">ANY YEAR</option>
                        <option value="reverse">REVERSE YEAR</option>
                        {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
                    </select>
                </div>
                <div className="select">
                    <select name="slct" id="slct">
                        <option value="0" selected disabled>RESULT</option>
                        <option value="any" >ANY RESULT</option>
                        <option value="success" >SUCCESS</option>
                        <option value="fail" >FAIL</option>
                    </select>
                </div>
                <div className="input">
                    <input value={searchName} onChange={setSearchNameHandle}/>
                </div>
            </div>
            <div id="launchDetails">
                <div id="boxDetail">
                    {launchData.map((launch) => (<CardLaunch launch={launch} />))}
                </div>
            </div>
            <div id="endling" />
        </React.Fragment>
    )
}

export default Launch
