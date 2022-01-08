import React from 'react';
import styled from "styled-components"

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <Button 
            className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" 
            onClick={() => onClick()} 
          />;
};

const Button = styled.div`
  right: 32%;
  bottom: 15px;
  border: 2px solid white;

  &:before{
    content: "➜";
    color: white;
  }
`

export default CustomRightArrow