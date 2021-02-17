import React, { useEffect, useState } from 'react'
import '../styles/stylesPages.css'
import homeImage from '../images/home/home.jpg'
import {fetchData} from '../tools/fetch'


const Home = () => {
    const [jsonInfo, setJsonInfo] = useState({})
    const url = "https://api.spacexdata.com/v3/info"

    useEffect(() => {
        fetchData(url, setJsonInfo)
    }, [])
    console.log(jsonInfo)
    return (
           <div className="boxImage">
               <img className="bigPic" src={homeImage} />
               <h1 id="name-i-image">
                    {jsonInfo.name}
               </h1>
               <p id="detail-i-image">
                   {jsonInfo.summary}
               </p>
           </div>
      )
}

export default Home