import React from "react";

const ComponentOne = props => {
    const {nasaAPI} = props;
    return (
        <div>
            <h2>Title: {nasaAPI.title}</h2>
            <p>Copyright: {nasaAPI.copyright}</p>
        </div>
    )
}

export default ComponentOne;