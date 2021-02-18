import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../styles/stylesDetailPage.css"

const RocketDetail = () =>{
    const location = useLocation()
    const { rocketId } = useParams();
    const { rocket } = location.state
    const image1 = rocket.flickr_images[1]
    const image2 = "https://www.gannett-cdn.com/media/2018/02/05/USATODAY/USATODAY/636534298458151698-020518-spacex-falcon-heavy-NO-TEXT-2.png"

    useEffect(() => {
        console.log(rocket)
    }, [])

    return (
        <>
            <div className="wrapper">
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
        </>
    )
}

export default RocketDetail