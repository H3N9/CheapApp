import React from 'react'


const CardHis = ({history}) => {
    const {title, details, links} = history
    const link = links.wikipedia? links.wikipedia:links.article? links.article:links.reddit
    return (
        <div className="card">

            <div className="boxCardTitle">
                {title}
            </div>

            <div className="textCard">
                <a href={link}>
                    {details}
                </a>
            </div>
        </div>
    )
}

export default CardHis