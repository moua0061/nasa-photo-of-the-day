import React, { useState, useEffect } from "react";
import styled from 'styled-components';


//picture components
const StyledImg = styled.div`
    align-items: center;
`;

// <img className="APOD_image" alt='APOD image' src={`${nasaData.url}`} />

const Apod = props => {

    return (
        <StyledImg>

        <div className='img-div'>
            <img src={props.url} width ='75%' alt='Photo of the day' />
        </div>
        </StyledImg>
    )
}

export default Apod;