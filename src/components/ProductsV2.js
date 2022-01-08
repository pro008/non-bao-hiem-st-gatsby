import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugifyUrl from "../utils/slugifyUrl"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const ProductsV2 = ({ produtcs = [] }) => {
  if (produtcs == null) return <></>

  return (
    <Wrapper>
      {produtcs.map(product => {
        const { id, title, mainImage } = product
        const pathToImage = getImage(mainImage)
        const slug = slugifyUrl(title)
        return (
          <Col xs={6} md={3} key={id} className="center-content">
            <Link key={id} to={`/${slug}`}>
              <figure className="gallery-image">
                <GatsbyImage image={pathToImage} alt={title} />
                <figcaption>
                  <p>
                    <center>{title}</center>
                  </p>
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
  background-color: #f4f4f4;
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
  padding-top: 20px;

  a {
    margin-right: 10px;
    margin-bottom: 14px;
  }

  figure {
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 0px;
    width: 200px;
    background-color: white;
    color: black;
    border-bottom: 2px solid #ed1c24;
    border-radius: 15px;
  }
`

export default ProductsV2
