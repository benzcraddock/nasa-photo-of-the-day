import React from "react";

const ComponentTwo = props => {
    const {nasaAPI} = props;
    return (
        <div>
            <p>Explanation: {nasaAPI.explanation} </p>
        </div>
    )
}

export default ComponentTwo;
