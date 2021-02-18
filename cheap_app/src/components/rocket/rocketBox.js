import React from 'react'

const RocketBox = ({ rocket }) => {
    const { flickr_images, rocket_name, description } = rocket
    console.log(flickr_images[0])

    return (
        <div class="box">
            <div
                class="content"
                style={{ backgroundImage: `url(${flickr_images})` }}
            >
                <h3>{rocket_name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default RocketBox
