import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugifyUrl from "../utils/slugifyUrl"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const ProductDetail = ({ produtcs = [] }) => {
  return (
    <Wrapper>
      {produtcs.map(recipe => {
        const { id, title, mainImage } = recipe
        const pathToImage = getImage(mainImage)
        const slug = slugifyUrl(title)
        return (
          <Col xs={6} md={3} key={id} className="center-content">
            <Link key={id} to={`/${slug}`}>
              <figure className="gallery-image">
                <GatsbyImage image={pathToImage} alt={title} />
                <figcaption>
                  <p>{title}</p>
                </figcaption>
              </figure>
            </Link>
          </Col>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled(Row)`
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 65px;
  margin-bottom: 25px;

  a {
    margin-right: 10px;
    margin-bottom: 14px;
  }

  figcaption {
    opacity: 0;
    position: absolute;
    top: 0px;
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  figcaption:hover {
    opacity: 1;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    background: rgb(8, 8, 8, 0.5);
    background-filter: blur(8px);
  }

  figcaption p {
    padding: 5px 12px;
    font-size: 2.2rem;
    font-weight: 800;
    border-radius: 10px;
    border: 2px solid white;
  }
`

export default ProductDetail
