import React from "react"
import Carousel from "react-multi-carousel"
import SliderItem from "./slider_item"
import "react-multi-carousel/lib/styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import CustomDot from "./CustomDot"

const Slider = () => {
  const data = useStaticQuery(query)
  const sliders = data.allContentfulHomeSlider.nodes

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
    <Carousel
      responsive={responsive}
      ssr={false}
      autoPlaySpeed={4500}
      slidesToSlide={1}
      infinite={true}
      containerClass={"headBodyWrapper"}
      itemClass={"headBodyWrapper"}
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={""}
      customDot={<CustomDot />}
    >
      {sliders.map((item, index) => {
        const { image, title, description } = item
        const pathToImage = getImage(image)
        return (
          <SliderItem
            key={index}
            url={pathToImage}
            alt={title}
            title={title}
            text={description}
          />
        )
      })}
    </Carousel>
  )
}

const query = graphql`
  {
    allContentfulHomeSlider {
      nodes {
        position
        title
        description
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Slider
