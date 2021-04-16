import React from 'react';
import styled, { keyframes } from 'styled-components'
import theme from '../Theme/index'


const StyledHeader = styled.header`
    color: white,
`

const Header = ({title}) => {


    
    return (
        <StyledHeader>
        <header>
          <h1>Nasa's Photo of the Day</h1>
          <h2>{title}</h2>
        </header>
        </StyledHeader>
    );
};

export default Header;