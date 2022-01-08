import React from 'react';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import CustomDot from './CustomDot'
import CustomLeftArrow from './CustomLeftArrow'
import CustomRightArrow from './CustomRightArrow'

const SliderDetail = ({images}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
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
        deviceType={''}
        dotListClass="custom-dot"
        partialVisible={true}
        renderDotsOutside={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot smallImages={images}/>}
      >
        {
          images.map((path, index) => {
          return <GatsbyImage
                  image={path}
                  width={550} 
                  height={550}
                  className="about-img"
                />
          })
        }
      </Carousel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-left:76px;

  .custom-caroucel{
    text-align:center;
    border: 6px solid white;
    border-radius:8px;
  }

  .custom-dot {
    height:100%;
    max-width:50px;
    display:block;
    float:left;
  }

  .custom-dot div{
    width: 100%;
    margin-top:7px;
    margin-bottom:7px;
  }

  .custom-dot .active{
    transform: scale(1.2);
    transition: transform 1.2s; 

  }

  .wrapper-caroucel{
    display:flex;
  }

  @media screen and (max-width:375px) {
    padding-left: 0px;
    .custom-dot {
      display: flex;
      max-width: 100%;
      position: inherit;
    }

    .custom-dot div{
      margin-left:4px;
      margin-right:4px;
    }
  }
`

export default SliderDetail