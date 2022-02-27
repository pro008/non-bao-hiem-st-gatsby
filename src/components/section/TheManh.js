import React from "react"
import Carousel from "react-multi-carousel"
import imageTheManh from "../../assets/images/backgroun_dv.png"
import Item from "../shared/the_manh/Item"
import CustomDot from "../shared/the_manh/CustomDot"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulDiemManh {
      nodes {
        title
        iconTitle
        description {
          description
        }
        image {
          gatsbyImageData(
            width: 280
            height: 200
            layout: FIXED
            placeholder: BLURRED
          )
        }
        icon {
          gatsbyImageData(
            width: 62
            height: 62
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  }
`

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

const TheManh = () => {
  const data = useStaticQuery(query)
  const items = data.allContentfulDiemManh.nodes
  const tabData = items.map(item => {
    const { icon, iconTitle } = item
    return ({ smallImages: icon, title: iconTitle })
  })

  return (
    <Wrapper>
      <h4 className="intro-section__title">
        <center>
          Điểm mạnh cua <span className="text-red">ST HELMET</span>
        </center>
      </h4>
      <div className="reverse-order">
        <Carousel
          responsive={responsive}
          ssr
          arrows={false}
          showDots={true}
          slidesToSlide={1}
          infinite={true}
          containerClass="container-with-dots"
          itemClass="image-item"
          partialVisible={true}
          deviceType={""}
          dotListClass="custom-dot-list-style"
          renderDotsOutside={true}
          customDot={<CustomDot subTitle={tabData} />}
        >
          {items.map((item, index) => {
            const {
              title,
              description: { description },
              image,
            } = item
            return (
              <Item
                key={index}
                url={image}
                alt={title}
                title={title}
                text={description}
              />
            )
          })}
        </Carousel>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: url(${imageTheManh});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .reverse-order{
    display: flex;
    margin-top: 42px;
    flex-direction: column-reverse;
  }

  .custom-dot-list-style{
    position:relative;
    margin-bottom: 62px;
  }

  .custom-dot-list-style > div{
    padding:22px 80px;
  }

  .custom-dot-list-style > div:not(:last-child){
    border-right:1px solid #d7d7d7;
  }

  .custom-dot-list-style p{
    margin: 0px;
    margin-top:15px;
    text-transform: uppercase;
  }
  
  .custom-dot-list-style .inactive{
    opacity: 0.2;
  }

  @media screen and (max-width: 960px) {
    .custom-dot-list-style > div{
      padding:12px 40px;
    }
  }

  @media screen and (max-width: 391px) {
    .custom-dot-list-style > div{
      padding:10px 20px;
    }

    .custom-dot-list-style > div > div{
      width: 42px !important;
      height: 42px !important;
    }
  }
`

export default TheManh
