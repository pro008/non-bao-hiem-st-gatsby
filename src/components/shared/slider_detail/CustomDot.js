import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

const CustomDot = ({ smallImages, onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <>
      {
        <GatsbyImage
          image={smallImages[index]}
          className="about-img"
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        />
      }
    </>
  )
}


export default CustomDot