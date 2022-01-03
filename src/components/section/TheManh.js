import React from "react"
import Carousel from 'react-multi-carousel'
import imageTheManh from "../../assets/images/backgroun_dv.png"
import TheManhItem from './TheManhItem'
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulDiemManh {
      nodes {
        title
        description {
          description
        }
        image {
          gatsbyImageData(width: 280, height: 200, layout: FIXED, placeholder: BLURRED)
        }
      }
    }
  }
`

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const TheManh = () => {
  const data = useStaticQuery(query)
  const items = data.allContentfulDiemManh.nodes

  return (
    <Wrapper>
      <h4 className="intro-section__title">
        <center>Điểm mạnh cua <span className="text-red">ST HELMET</span></center>
      </h4>
      <Carousel
        responsive={responsive}
        ssr
        showDots={true}
        slidesToSlide={1}
        infinite={true}
        containerClass="container-with-dots"
        itemClass="image-item"
        deviceType={''}
      >
        {
          items.map((item, index) => {
          const { title, description: { description }, image } = item
          return <TheManhItem 
              key={index} 
              url={image} 
              alt={title}
              title={title}
              text={description}
            />
          })
        }
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: url(${imageTheManh});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

export default TheManh
