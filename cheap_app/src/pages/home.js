import React, { useEffect, useState } from 'react'
import '../styles/stylesHome.css'
import { fetchData } from '../tools/fetch'
import CardHis from '../components/home/cardHis'
import Logo from '../images/home/spacexLogo.png'

const Home = ({ stylePacks }) => {
    const [jsonInfo, setJsonInfo] = useState({})
    const [jsonHis, setJsonHis] = useState([])
    const urlInfo = 'https://api.spacexdata.com/v3/info'
    const urlHis = 'https://api.spacexdata.com/v3/history'

    useEffect(() => {
        fetchData(urlInfo, setJsonInfo)
        fetchData(urlHis, setJsonHis)
    }, [])

    return (
        <React.Fragment>
            {/*Image with text on home page*/}
            <div className="boxImage">
                <img id="name-i-image" src={Logo} alt="SpaceX_logo" />
                <p id="detail-i-image">{jsonInfo.summary}</p>
            </div>

            <div id="boxHistories">
                <div id="box-h-text">
                    <h1>HISTORIES</h1>
                    <p>
                        "I think it is possible for ordinary people to choose to
                        be extraoridnay." - Elon Musk
                    </p>
                </div>
                <div id="gradientColor" />
            </div>

            {/*card*/}
            <div id="boxCard">
                <div id="boxCard-C-G">
                    <div id="gradientColor-U" />
                    <div id="boxCardContent">
                        {jsonHis.map((history) => (
                            <CardHis key={history.id} history={history} />
                        ))}
                    </div>
                    <div id="gradientColor-D" />
                </div>
            </div>

            <div id="endingLine"></div>
        </React.Fragment>
    )
}

export default Home
