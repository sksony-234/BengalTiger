import React from 'react'
import styled from 'styled-components';

const Dot = () => {
  return (
    <DotStyle>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </DotStyle>
  )
}

export default Dot;

const DotStyle =styled.div`
    display:flex;
    .dot{
        height:7.83px;
        width:7.83px;
        border-radius:50%;
        background-color:#F9B145;
        margin:5px;
    }
`;