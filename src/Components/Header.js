import React from 'react';

const headerStyle = {
    color: 'white',
}

const Header = ({ title }) => {

    return(
        <div>
          <header style={headerStyle}>
            <h1>Nasa's Photo of the Day</h1>
            <h2>{title}</h2>
          </header>
        </div>
    )
}

export default Header;