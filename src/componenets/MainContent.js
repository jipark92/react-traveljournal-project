import React from "react";

export default function MainContent(props) {
    return (
        <main className="content">
            <div className="image-container">
                <img src={props.img} className="location-image"/>
            </div>
            <div className="info">
                <p>{props.location}</p>
                <h1>{props.title}</h1>
                <p>{props.enddate} to {props.startdate}</p>
                <p>{props.description}</p>
            </div>
        </main>
    )
}