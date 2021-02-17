import React from 'react'

const RocketBox = ({ rocket }) =>{
    const { flickr_images, rocket_name } = rocket
    console.log(flickr_images[0])

    return(
        <div>
            <img src={flickr_images[0]} width={200} height={200}/>
            <h1>{rocket_name}</h1>
        </div>
    )
}

export default RocketBox