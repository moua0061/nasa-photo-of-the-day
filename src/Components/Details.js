
//all text content goes here such as title, explanations, date and author 

import React from 'react'
import styled from 'styled-components';

//title
//date
//explanations
//copyright

//texts = aligned to the left
//title = italicized 
//copyright = bold

const Details = props => {
    
    return(
        <div className='main-content'>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.explanation}</p>
            <p>{props.copyright}</p>
        </div>
    )
}

export default Details;
