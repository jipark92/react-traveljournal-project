import React from "react";
import locationImage from '../images/location.png'

export default function MainContent(props) {
    return (
        <main className="content">
            <img src={props.img} className="location-image"/>
            <div className="info">
                <div className="location-container">
                    <img src={locationImage} className="location-pic"/>
                    <p className="location">{props.location}</p>
                    <a href={props.googleurl} className="location-link">View on Google Maps</a>
                </div>
                <h2 className="location-title">{props.title}</h2>
                <p className="date">{props.enddate} to {props.startdate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </main>
    )
}