import React, { useEffect } from 'react'
import '../styles/styleLaunchDetail.css'
import {useLocation} from 'react-router-dom'
import BoxTextDetail from '../components/launch/boxTextDetail'
import {fetchData} from '../tools/fetch'


const LaunchDetail = () => {
    const location = useLocation()
    const { launch } = location.state


    useEffect(() => {
        fetchData()
    }, [])



    const {launch_date_utc, mission_name, rocket, launch_site, launch_failure_details, launch_success, links } = launch
    const {rocket_name, rocket_type, second_stage} = rocket
    const {payloads} = second_stage
    const {payload_id, payload_type} = payloads[0]
    const { time, reason } = launch_failure_details || {}
    const {mission_patch_small} = links
    const {site_name} = launch_site
    const dateTime = new Date(launch_date_utc)
    const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
    ]
    const date = dateTime.getDate()
    const month = months[dateTime.getMonth()]
    const year = dateTime.getFullYear()


    const detailOfLaunch = (sucess) => {
        if(sucess) {
            return (
                <BoxTextDetail success={sucess} leftText={"LAUNCH SUCCESS"} rightText={""} title={false} />
            )
        }
        else {
            return (
                <>
                <BoxTextDetail success={sucess} leftText={"LAUNCH FAIL"} rightText={`${time} Times`} title={false} />
                <BoxTextDetail success={sucess} leftText={""} rightText={reason} title={false} />
                </>
            )
        }
    }

    return (
        <div id="detail-b">

            <div className="space-b" />

            <div id="boxDetail-1">
                <div id="date">
                    <h1>{date}</h1>
                    <h1>{month}</h1>
                    <h1>{year}</h1>
                </div>

                <div id="im-detail">

                    <BoxTextDetail leftText={"MISSION"} rightText={mission_name} title={true} />
                    <BoxTextDetail leftText={rocket_name} rightText={""} title={false} />
                    <BoxTextDetail leftText={"TYPE"} rightText={rocket_type} title={false} />
                    {detailOfLaunch(launch_success)}  
                </div>


                <div id="logoImage">
                    <img src={mission_patch_small} />
                </div>
            </div>

            <div className="space-b" />

            <div id="detailLaunch" >
                <h1>Detail</h1>

                <div className="textDetail">
                    <h3>PAYLOAD:</h3>
                    <h3>{payload_id}</h3>
                </div>

                <div className="textDetail">
                    <h3>TYPE:</h3>
                    <h3>{payload_type}</h3>
                </div>

                <div className="textDetail">
                    <h3>Launch site:</h3>
                    <h3>{site_name}</h3>
                </div>

                <div id="underlineDetail"/>

            </div>

            <div className="space-b" />


            <div id="gallaryImage">
                <div id="titleShowcase">
                    <div className="titleShowcase-t">Video</div>
                    <div className="titleShowcase-t">Gallary</div>
                </div>

                <div id="showcase">
                    <div id="video">
                        <iframe id="videoShowcase" src={`https://www.youtube.com/embed/${links.youtube_id}/`}  allowFullScreen />
                    </div>

                    <div id="gallary">
                        {links.flickr_images.map((link) => {
                            return (
                                <img src={link} class="imageShowcase" alt={link} />
                            )
                        })}
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default LaunchDetail