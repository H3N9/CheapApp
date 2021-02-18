import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../styles/stylesDetailPage.css"

const RocketDetail = () =>{
    const location = useLocation()
    const { rocketId } = useParams();
    const { rocket } = location.state
    const image1 = rocket.flickr_images[1]

    useEffect(() => {
        console.log(rocket)
    }, [])

    return (
            <div className="wrapper">
                <div className="column">
                    <h1>{rocket.rocket_name}</h1>
                </div>
                <div className="column">
                    <img className="imageBox" src={image1} />
                    <h1>Details</h1>
                </div>
            </div>
    )
}

export default RocketDetail