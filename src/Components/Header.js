import React from 'react';

const Header = ({ title }) => {

    return(
        <div>
            <h1>Nasa's Photo of the Day</h1>
            <h2>{title}</h2>
        </div>
    )
}

export default Header;