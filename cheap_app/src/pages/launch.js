import React, { useEffect, useState } from 'react'
import '../styles/styleLaunch.css'
import {fetchData} from '../tools/fetch'
import CardLaunch from '../components/launch/cardLaunch'

const Launch = () => {
    const [launchData, setLaunchData] = useState([])
    const [displayLaunch, setDisplayLaunch] = useState([])
    const [years, setYears] = useState([])
    const [selectYear, setSelectYear] = useState('any')
    const [selectResult, setSelectResult] = useState('any')
    const [searchName, setSearchName] = useState('')
    const urlLuanch = "https://api.spacexdata.com/v3/launches"

    const setLaunchDataPage = (launches) =>{
        setLaunchData(launches)
        setDisplayLaunch(launches)
        const set = new Set(launches.map((item) => item.launch_year))
        const years = Array.from(set)
        setYears(years)
    }

    const filterLuanch = ({ year, result, name }) =>{
        let newLaunches = launchData.slice()
        
        /* filter and reverse year */
        if (year === "any"){}
        else if (year === "reverse"){
            newLaunches.reverse()
        }
        else{
            newLaunches = newLaunches.filter((launch) =>{
                return (launch.launch_year === year)
            })
        }

        /* filter result launch_success */
        if (result !== "any"){
            newLaunches = newLaunches.filter((launch) =>{
                const isResult = (result === "success")?true:false
                if (launch.launch_success === null && !isResult){
                    return true
                }
                return launch.launch_success === isResult
            })
        }
        /* filter mission_name launch */
        newLaunches = newLaunches.filter((launch) =>{
            return launch.mission_name.toLowerCase().includes(name.toLowerCase())
        })

        setDisplayLaunch(newLaunches)
    }

    const selectYearHandle = (e) =>{
        const year = e.target.value
        filterLuanch({ year, result: selectResult,  name: searchName})
        setSelectYear(year)
    }

    const setSelectResultHandle = (e) =>{
        const result = e.target.value
        filterLuanch({ year: selectYear, result,  name: searchName})
        setSelectResult(result)
    }

    const searchNameHandle = (e) =>{
        const name = e.target.value
        filterLuanch({ year: selectYear, result: selectResult, name})
        setSearchName(name)
    }

    useEffect(() => {
        fetchData(urlLuanch, setLaunchDataPage)
    }, [])

    return (
        <React.Fragment>
            <div id="launch-i">
                <h1>LAUNCH</h1>
            </div>
            <div id="searchBar" >
                <div className="selectBox">
                    <div className="select">
                        <select name="slct" id="slct" onChange={selectYearHandle}>
                            <option value="0" selected disabled>YEAR</option>
                            <option value="any">ANY YEAR</option>
                            <option value="reverse">REVERSE YEAR</option>
                            {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
                        </select>
                    </div>
                    <div className="select">
                        <select name="slct" id="slct" onChange={setSelectResultHandle}>
                            <option value="0" selected disabled>RESULT</option>
                            <option value="any" >ANY RESULT</option>
                            <option value="success" >SUCCESS</option>
                            <option value="fail" >FAIL</option>
                        </select>
                    </div>
                </div>
                <div className="input">
                    <input value={searchName} onChange={searchNameHandle} placeholder="Search name"/>
                </div>
            </div>
            <div id="launchDetails">
                <div id="boxDetail">
                    {displayLaunch.map((launch, index) => (<CardLaunch key={index} id={launch.flight_number} launch={launch} />))}
                </div>
            </div>
            <div id="endling" />
        </React.Fragment>
    )
}

export default Launch
