import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import RocketDetailList from '../components/rocket/rocketDetailList'
import "../styles/stylesDetailPage.css"

const RocketDetail = () =>{
    const location = useLocation()
    const { rocketId } = useParams();
    const { rocket } = location.state
    const payload_weights = rocket.payload_weights
    const engines = rocket.engines
    const image1 = rocket.flickr_images[1]

    const size = {
        height: `${rocket.height.meters} m (${rocket.height.feet} ft)`,
        diameter: `${rocket.diameter.meters} m (${rocket.diameter.feet} ft)`,
        mass: `${rocket.mass.kg} kg (${rocket.mass.lb} lb)`
    }

    const payloadWeights = payload_weights.reduce((acc, curr) =>{
        return {...acc, [curr.name]: `${curr.kg} kg (${curr.lb} lb)`}
    }, {})

    const sea_level = {
        isp: engines.isp.sea_level,
        thrust: `${engines.thrust_sea_level.kN} kN (${engines.thrust_sea_level.lbf} lbf)`
    }

    const vacuum = {
        isp: engines.isp.vacuum,
        thrust: `${engines.thrust_vacuum.kN} kN (${engines.thrust_vacuum.lbf} lbf)`
    }


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
                        <div className="detailLeftInfo">
                            <h2>About</h2>
                            <p><b>first flight :</b> {rocket.first_flight}</p>
                            <p><b>rocket_type:</b> {rocket.rocket_type}</p>
                            <p><b>country :</b> {rocket.country}</p>
                            <p><b>company :</b> {rocket.company}</p>
                        </div>
                        <div className="detailLeftInfo">
                            <h2>engines</h2>
                            <p><b>type :</b> {engines.type}</p>
                            <p><b>number :</b> {engines.number}</p>
                            <div className="detailListRow">
                                <RocketDetailList title="sea_level" data={sea_level} />
                                <RocketDetailList title="vacuum" data={vacuum} />
                            </div>
                        </div>
                    </div>
                    <div className="detailRight">
                        <div><img src={image1} width="100%" /></div>
                        <RocketDetailList title="size" data={size} />
                        <RocketDetailList title="payload weights" data={payloadWeights} />
                        {/*}
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
                            {*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RocketDetail