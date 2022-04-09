import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const CustomDot = ({ smallImages, onClick, ...rest }) => {
  const { index, active } = rest

  return (
    <>
      {
        <GatsbyImage
          key={index}
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
