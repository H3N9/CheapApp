import React, { useEffect, useState } from 'react'
import '../styles/stylesPages.css'
import homeImage from '../images/home/home.jpg'
import {fetchData} from '../tools/fetch'
import CardHis from '../components/cardHis'


const Home = () => {
    const [jsonInfo, setJsonInfo] = useState({})
    const [jsonHis, setJsonHis] = useState({})
    const urlInfo = "https://api.spacexdata.com/v3/info"

    useEffect(() => {
        fetchData(urlInfo, setJsonInfo)
    }, [])
    
    return (
        <React.Fragment>
            {/*Image with text on home page*/}
           <div className="boxImage">
               <img className="bigPic" src={homeImage} alt="blank"/>
               <h1 id="name-i-image">
                    {jsonInfo.name}
               </h1>
               <p id="detail-i-image">
                   {jsonInfo.summary}
               </p>
           </div>

           {/*content history*/}

            <div id="spaceBetween">
                <div id="traingle" >
                </div>
                <h1 id="name-i-b">Histories</h1>
                
            </div>
           
           {/*card*/}
            <div>
                <CardHis />
                <CardHis />
                <CardHis />
                <CardHis />
            </div>

            

        </React.Fragment>
      )
}

export default Home