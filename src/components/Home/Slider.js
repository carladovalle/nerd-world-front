import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

export function Slider() {    

  return(
    <Wrapper>           
      Slider
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 80px;
  .slideshow {
      max-width: 100%;
      height: 80vh;
      overflow: hidden;
      position: relative;
  }
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }
  .slide {
      display: inline-block;
      width: 100%;
      pointer-events: none;
      transition: transform 1s;
  }
  .slideshowDots {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5vh;
  }
  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
    opacity: .5;
  }
  .slideshowDot.active {
    background-color: #FF724C;
    opacity: 1;
  }
`;

const Slide = styled.div`
  display: inline-block;
  width: 100%;
  height: 80vh;
  transition: transform 1s;
  position: relative;
  
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

const TextBox = styled.div`
  padding: 20px;
  background-color: rgba(12, 12, 12, .5);
  word-wrap: break-word;
  position: absolute;
  bottom: 100px;
`;

const H1 = styled.h1`
  font-size: 4vw;
  font-weight: 700;
  color:  #FF724C;
  @media (max-width: 850px) {
    font-size: 6vw;
  }
`;