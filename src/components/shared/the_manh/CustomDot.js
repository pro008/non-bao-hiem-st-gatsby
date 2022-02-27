import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CustomDot = ({ subTitle, onClick, ...rest }) => {
  const { index, active } = rest
  const { smallImages, title } = subTitle[index]
  const subImagePth = getImage(smallImages)

  return (
    <div>
      <div className={active ? "active" : "inactive"}>
        <center>
          {
            <GatsbyImage
              key={index}
              image={subImagePth}
              className="about-img"
              onClick={() => onClick()}
            />
          }
        </center>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default CustomDot
