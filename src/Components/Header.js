
//navigations

import React from "react";
import styled from 'styled-components';

const StyledHeader=styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    color: #28282B;
    
`;

const Header = props => {

    return(
        <StyledHeader>

        <div className='header-container'>
            <nav>
            <a href='#'>Home</a> | 
            <a href='#'>About</a> | 
            <a href='#'>About</a>  
            </nav>
        </div>
        </StyledHeader>
    )
}

export default Header;