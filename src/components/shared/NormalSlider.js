import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const NormalSlider = ({ images, needParse }) => {
  if (images == null) return <></>

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        ssr
        showDots={true}
        slidesToSlide={1}
        infinite={true}
        containerClass="custom-caroucel"
        itemClass="image-item"
        deviceType={""}
        dotListClass="custom-dot"
        partialVisible={true}
      >
        {images.map((path, index) => {
          const imagePath = needParse ? getImage(path) : path
          return (
            <GatsbyImage
              image={imagePath}
              width={330}
              height={330}
              className="about-img"
            />
          )
        })}
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .custom-caroucel {
    text-align: center;
  }
`

export default NormalSlider
