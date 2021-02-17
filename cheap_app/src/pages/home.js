import React from 'react'
import '../styles/stylesPages.css'
import homeImage from '../images/home/home.jpg'


const Home = () => {
    return (
           <div className="boxImage">
               <img className="bigPic" src={homeImage} />
               <h1 id="imageText">
                    SpaceX
               </h1>
           </div>
      )
}

export default Home