import React from "react"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulBrands(limit: 12, sort: { order: ASC, fields: position }) {
      nodes {
        title
        logo {
          gatsbyImageData(
            width: 166
            height: 100
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`

const Brand = () => {
  const data = useStaticQuery(query)
  const brands = data.allContentfulBrands.nodes

  const brandContainer = (nodes, index) => {
    const { title, logo } = nodes
    const pathImage = getImage(logo)

    return (
      <Col xs={6} md={2} key={index}>
        <div className="div-center">
          <GatsbyImage image={pathImage} alt={title} />
        </div>
      </Col>
    )
  }

  return (
    <Wrapper>
      <div className="brand-logos-section__holder brand-logos-section--blue">
        <h4 className="intro-section__title">
          <center>Khách hàng thân thiết</center>
        </h4>
        <div className="brand-logos-section__images">
          <Row>{brands.map(brandContainer)}</Row>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`

export default Brand
