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
                    <div>
                        <h2>About</h2>
                        <p><b>first flight :</b> {rocket.first_flight}</p>
                        <p><b>rocket_type:</b> {rocket.rocket_type}</p>
                        <p><b>country :</b> {rocket.country}</p>
                        <p><b>company :</b> {rocket.company}</p>
                    </div>
                    <div>
                        <img src={image1} width="100%" />
                    </div>
                </div>
                <div className="detailList" style={{ marginTop: 100 }}>
                    <div className="titleDetailList">
                        <h2>size</h2>
                    </div>
                    <div className="detailListInfo">
                        <div>
                            <h3>height</h3>
                            <p>{rocket.height.meters} m ({rocket.height.feet} ft)</p>
                        </div>
                        <div >
                            <h3>diameter</h3>
                            <p>{rocket.diameter.meters} m ({rocket.diameter.feet} ft)</p>
                        </div>
                        <div>
                            <h3>mass</h3>
                            <p>{rocket.mass.kg} kg ({rocket.mass.lb} lb)</p>
                        </div>
                    </div>
                </div>
                <div className="detailList" style={{ marginTop: 100 }}>
                    <div className="titleDetailList">
                        <h2>payload weights</h2>
                    </div>
                    <div className="detailListInfo">
                        {payload_weights.map((payload_weight) =>{
                            return(
                                <div>
                                    <h3>{payload_weight.name}</h3>
                                    <p>{payload_weight.kg} kg ({payload_weight.lb} lb)</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*}
            <div className="wrapper">
            <div>
                            <h3>{payload_weights}</h3>
                            <p>kg {payload_weights} m ({rocket.height.feet} ft)</p>
                        </div>
                <div className="column">
                    <h1>{rocket.rocket_name}</h1>
                    <br></br><br></br>
                    <p>{rocket.description}</p>
                </div>
                <div className="column">
                    <img className="imageBox" src={image1} />
                    Details
                </div>
            </div>
            <div className="wrapper">
                <div className="column">
                    <h1>About</h1>
                    <br></br><br></br>
                    <p><b>first flight :</b> {rocket.first_flight}</p>
                    <p><b>country :</b> {rocket.country}</p>
                    <p><b>company :</b> {rocket.company}</p>
                </div>
                <div className="column">
                    <img className="imageBox" src={image2} />
                </div>
            </div>
            <div className="wrapper">
                <div className="column">
                    <h1>size</h1>
                    <br></br><br></br>
                    <div className="infoList">
                        <div>
                            <h2>height</h2>
                            <div>
                                <p><b>meters: </b>{rocket.height.meters}</p>
                                <p><b>feet: </b>{rocket.height.feet}</p>
                            </div>
                        </div>
                        <div>
                            <h2>diameter</h2>
                        </div>
                        <div>
                            <h2>mass</h2>
                        </div> 
                    </div>
                </div>
                <div className="column">
                    <img className="imageBox" src={image2} />
                </div>
            </div>
        {*/}
        </>
    )
}

export default RocketDetail