import React, { useEffect, useState } from 'react'
import '../styles/stylesPages.css'
import homeImage from '../images/home/home.jpg'
import {fetchData} from '../tools/fetch'
import CardHis from '../components/cardHis'
import Logo from '../images/home/spacexLogo.png'


const Home = () => {
    const [jsonInfo, setJsonInfo] = useState({})
    const [jsonHis, setJsonHis] = useState([])
    const urlInfo = "https://api.spacexdata.com/v3/info"
    const urlHis = "https://api.spacexdata.com/v3/history"

    useEffect(() => {
        fetchData(urlInfo, setJsonInfo)
        fetchData(urlHis, setJsonHis)
    }, [])
    
    return (
        <React.Fragment>
            {/*Image with text on home page*/}
           <div className="boxImage">
                    <img id="name-i-image" src={Logo} alt="SpaceX_logo"/>
                <p id="detail-i-image">
                    {jsonInfo.summary}
                </p>
               
           </div>

           {/*content history*/}

           {/* <div id="spaceBetween">
                <div id="traingle" >
                </div>
                <h1 className="name-i-b leftStyle">Histories</h1>
                <h1 className="name-i-b rightStyle">Details</h1>
            </div>*/}
           
           {/*card*/}
            <div id="boxHistories">

                <div id="spaceBetween">
                    <div id="traingle" />
                    <h1 className="name-i-b leftStyle">Histories</h1>
                    <h1 className="name-i-b rightStyle">Details</h1>
                </div>

                <div id="displayCard">
                    {jsonHis.map((history) => (<CardHis key={history.id} history={history} />))}
                </div>
                
            </div>

            {/* Ending lines*/}
            <div id="endLing">

            </div>

            

        </React.Fragment>
      )
}

export default Home