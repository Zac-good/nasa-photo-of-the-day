import React from 'react';


const APOD = ({ image }) => {

    // const { photo } = props;
    return (
        <div className= 'apod-container'>
            <img src={image} alt='Nasa POTD' width='70%'></img>
        </div>
    );
};
export default APOD;