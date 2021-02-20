import React from 'react'
import '../../styles/styleLaunchDetail.css'

const BoxTextDetail = ({leftText, rightText, title, success}) => {
    const styleTitle = title? "title":""
    const styleSuccess = success? "success":success === undefined? "":"fail"
    return (
        <div className="boxTextDetail">
                <div className="leftText">
                    <h1 className={`detailText ${styleTitle} ${styleSuccess}`}>{leftText}</h1>
                </div>
                    <div className="rightText">
                <h1 className={`detailText ${styleTitle} ${styleSuccess}`}>{rightText}</h1>
            </div>   
        </div>
    )
}

export default BoxTextDetail