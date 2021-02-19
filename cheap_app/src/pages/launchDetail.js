import React from 'react'
import '../styles/styleLaunchDetail.css'
import {useLocation} from 'react-router-dom'


const LaunchDetail = () => {
    const location = useLocation()
    const { launch } = location.state
    const {launch_date_utc} = launch

    return (
        <div id="detail-b">
            <div id="boxDetail-1">
                <div id="date">
                    <h1>30</h1>
                    <h1>10</h1>
                    <h1>2000</h1>
                </div>

                <div id="im-detail">

                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    
                </div>



                <div id="logoImage">

                </div>
            </div>
        </div>
    )
}

export default LaunchDetail