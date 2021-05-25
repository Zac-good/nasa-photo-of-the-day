import React from 'react';
import styled, { keyframes } from 'styled-components'
import theme from '../Theme/index'


const StyledHeader = styled.div`
    color: ${pr => pr.theme.white};
    `

const Header = ({title}) => {


    
    return (
        <StyledHeader>
        <div>
        <header>
          <h1>Nasa's Photo of the Day</h1>
          <h2>{title}</h2>
        </header>
        </div>
        </StyledHeader>
        
    );
};

export default Header;