import React, {useState} from 'react';
const detailStyle = {
    color: 'white',
};
 const Details = ({ detail })  => {
    
    return (
    <>
        <h3 style={detailStyle}>{detail}</h3>
    </>
    )
}

export default Details;