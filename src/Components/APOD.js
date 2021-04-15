import React from 'react';


const APOD = (props) => {

    const { photo } = props;
    return (
        <div className= 'apod-container'>
            <img src={photo} alt='Nasa POTD'></img>
        </div>
    );
};
export default APOD;