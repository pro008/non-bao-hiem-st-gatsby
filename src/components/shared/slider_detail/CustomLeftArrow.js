import React from 'react';
import styled from "styled-components"

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <Button 
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" 
            onClick={() => onClick()} 
          />
};

const Button = styled.button`
  left: 32%;
  bottom: 15px;
  border: 2px solid white;

  &:before{
    transform: rotate(180deg);
    content: "➜";
    color: white;
  }
`

export default CustomLeftArrow