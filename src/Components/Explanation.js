import React, {useState} from 'react';
const explanationStyle = {
    color: 'white',
};
const Explanation = ({ about }) => {

    return(
        <div style={explanationStyle}>
            <p>{about}</p>
        </div>
    )
}

export default Explanation;