import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

import pantufa from '../../assets/img/pant.webp';
import decoracao from '../../assets/img/decoracao.webp';
import criativo from '../../assets/img/criativo.webp';

export function Slider() {
  const images = 
  [
    {
      'image': pantufa,
      'title': 'Produtos exclusivos'
    },
    {
      'image': decoracao,
      'title': 'Decore a sua casa'
    },
    {
      'image': criativo,
      'title': 'Presentes criativos'
    }
  ];   

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
    

  return(
    <Wrapper>           
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, idx) => (
            <Slide
              key={idx}
              image = {image.image}
            >
              <TextBox>
                <H1>{image.title}</H1>
              </TextBox>
            </Slide>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>       
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
    background-color: #f8f9fa;
    opacity: .5;
  }
  .slideshowDot.active {
    background-color: #ced4da;
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
  padding: 10px;
  background-color: rgba(12, 12, 12, .5);
  word-wrap: break-word;
  position: absolute;
  bottom: 80px;
`;

const H1 = styled.h1`
  font-size: 2vw;
  font-weight: 700;
  color:  #f8f9fa;
  @media (max-width: 850px) {
    font-size: 6vw;
  }
`;