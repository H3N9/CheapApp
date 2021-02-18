import React from 'react'
import { Link } from 'react-router-dom'

const RocketBox = ({ rocket }) =>{
    const { id, flickr_images, rocket_name, description } = rocket

    return(
            <div className="box">
                <Link className="boxRocketLink" to={{
                    pathname: `/rocketsDetail/${id}`,
                    state: {
                        rocket: rocket
                    }
                }}>
                    <div className="content" style={{ backgroundImage: `url(${flickr_images[0]})` }}>
                        <h3>{rocket_name}</h3>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>
    )
}

export default RocketBox