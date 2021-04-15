import React from 'react';


const APOD = ({ image }) => {

    // const { photo } = props;
    return (
        <div className= 'apod-container'>
            <img src={image} alt='Nasa POTD'></img>
        </div>
    );
};
export default APOD;