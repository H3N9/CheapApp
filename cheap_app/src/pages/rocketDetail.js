import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../styles/stylesDetailPage.css"

const RocketDetail = () =>{
    const location = useLocation()
    const { rocketId } = useParams();
    const { rocket } = location.state
    const payload_weights = rocket.payload_weights
    const image1 = rocket.flickr_images[1]
    const image2 = "https://www.gannett-cdn.com/media/2018/02/05/USATODAY/USATODAY/636534298458151698-020518-spacex-falcon-heavy-NO-TEXT-2.png"

    useEffect(() => {
        console.log(rocket)
    }, [])

    return (
        <>
            <div className="containerDetail">
                <div className="detail" id="titleDetail">
                    <h1>{rocket.rocket_name}</h1>
                    <p>{rocket.description}</p>
                </div>
                <div className="detail" id="aboutDetail">
                    <div className="detailLeft">
                        <h2>About</h2>
                        <p><b>first flight :</b> {rocket.first_flight}</p>
                        <p><b>rocket_type:</b> {rocket.rocket_type}</p>
                        <p><b>country :</b> {rocket.country}</p>
                        <p><b>company :</b> {rocket.company}</p>
                    </div>
                    <div className="detailRight">
                        <div><img src={image1} width="100%" /></div>
                        <div className="detailList">
                            <div className="titleDetailList">
                                <h3>size</h3>
                            </div>
                            <div className="detailListInfo">
                                <div>
                                    <p><b>height</b></p>
                                    <p>{rocket.height.meters} m ({rocket.height.feet} ft)</p>
                                </div>
                                <div >
                                    <p><b>diameter</b></p>
                                    <p>{rocket.diameter.meters} m ({rocket.diameter.feet} ft)</p>
                                </div>
                                <div>
                                    <p><b>mass</b></p>
                                    <p>{rocket.mass.kg} kg ({rocket.mass.lb} lb)</p>
                                </div>
                            </div>
                        </div>
                        <div className="detailList">
                            <div className="titleDetailList">
                                <h3>payload weights</h3>
                            </div>
                            <div className="detailListInfo">
                                {payload_weights.map((payload_weight) =>{
                                    return(
                                        <div>
                                            <p><b>{payload_weight.name}</b></p>
                                            <p>{payload_weight.kg} kg ({payload_weight.lb} lb)</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RocketDetail