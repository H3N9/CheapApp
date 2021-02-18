import React from 'react'


const CardHis = ({history, id}) => {
    const {title, details, links, event_date_utc} = history
    const dateTime = new Date(event_date_utc)
    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEPT",
        "OCT",
        "NOV",
        "DEC"
    ]
    const date = dateTime.getDate()
    const month = months[dateTime.getMonth()]
    const year = dateTime.getFullYear()
    const link = links.wikipedia? links.wikipedia:links.article? links.article:links.reddit
    
    
    return (
        <div className="card">

            <div className="dateCard">
                <h1>{date}</h1>
                <h1>{month}</h1>
                <h1>{year}</h1>
            </div>

            <div className="textCard">
                <h1 className="titleCard">{title}</h1>
                <p className="detailCard">{details}</p>
            </div>

        </div>
    )
}

export default CardHis