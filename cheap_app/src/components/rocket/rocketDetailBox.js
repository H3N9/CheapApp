import React from 'react'

const RocketDetailBox = ({ image, info }) =>{
    return (
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
    )
}

export default RocketDetailBox