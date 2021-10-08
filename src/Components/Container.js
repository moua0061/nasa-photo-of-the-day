import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
        border: 1px solid #d2d2d2;
        box-shadow: 0px 1px 6px -2px #807f7f;
        border-radius: 8px;
        margin-top: 100px;
        padding: 100px;
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 100px;
        background-color: #E5E8E8;
        font-family: 'PT Sans', sans-serif;
`;

const Container = props => {

    return (
        <StyledContainer>
            <div className='main-container'>
            </div>
        </StyledContainer>
        
    )
}

export default Container;