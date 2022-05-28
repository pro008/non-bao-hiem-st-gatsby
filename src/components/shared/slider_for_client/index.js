import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const SliderForClient = ({ images }) => {
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
        ssr={false}
        showDots={false}
        slidesToSlide={1}
        infinite={true}
        containerClass="custom-caroucel"
        itemClass="image-item"
        deviceType={""}
        renderButtonGroupOutside={true}
        partialVisible={true}
      >
        {images.map((image, index) => {
          const path = getImage(image)
          return (
            <GatsbyImage
              image={path}
              width={220}
              height={220}
              className="about-img"
              key={index}
            />
          )
        })}
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  .custom-caroucel {
    padding-bottom: 20px;
  }

  button {
    min-width: 30px;
    min-height: 30px;
    top: calc(100% - 50px);
    z-index: 100;
  }

  @media screen and (min-width: 1080px) {
    .react-multiple-carousel__arrow--right {
      right: calc(30% + 1px);
    }

    .react-multiple-carousel__arrow--left {
      left: calc(30% + 1px);
    }
  }

  button::before {
    font-size: 12px;
  }

  .wrapper-caroucel {
    display: flex;
  }

  @media screen and (max-width: 375px) {
    padding-left: 0px;
  }
`

export default SliderForClient
