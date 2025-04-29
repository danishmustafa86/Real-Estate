import React from 'react'

export default function ChoseUsCard(props) {
    return (
        <div className="choseus">
           
            <div className="choseus-card">
                <img src={props.image} alt="Chose Us" className="choseus-image" />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            
        </div>)
}
