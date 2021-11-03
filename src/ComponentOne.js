import React from "react";

const ComponentOne = props => {
    const {nasaAPI} = props;
    return (
        <div className='container'>
            <h2>Title: {nasaAPI.title}</h2>
                <div> </div>
            <p>Date: {nasaAPI.date}</p>
            <p>Explanation: {nasaAPI.explanation}</p>
            <p>Copyright: {nasaAPI.copyright}</p>
            <img src = {nasaAPI.url}/>
        </div>
    )
}

export default ComponentOne;