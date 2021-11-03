import React from "react";

const ComponentOne = props => {
    const {nasaAPI} = props;
    return (
        <div className='container'>
            <h2>Title: {nasaAPI.title}</h2>
            <p>Date: {nasaAPI.date}</p>
            <p>Copyright: {nasaAPI.copyright}</p>
            <img src={nasaAPI.url} alt="NASA's investment"/>
        </div>
    )
}

export default ComponentOne;