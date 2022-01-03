import React from "react"
import ProductsV2 from "./ProductsV2"
import setupTags from "../utils/setupTags"
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from "gatsby"
import LargeRedButton from './shared/large-red-button'
import styled from "styled-components"

const query = graphql`
  {
    allContentfulProducts(limit: 100, sort: {fields: position, order: ASC}) {
      group(field: categoryId___categoryName, limit: 8) {
        fieldValue
        nodes {
          id
          title
          description {
            description
          }
          mainImage {
            gatsbyImageData(width: 220, height: 220, layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
          categoryId {
            categoryName
          }
        }
      }
    }
    allContentfulProductCategories(sort: {fields: position}) {
      nodes {
        categoryName
        categoryHeader
      }
    }
  }
`

const AllProducts = () => {
  const data = useStaticQuery(query)
  const groupProducts = data.allContentfulProducts.group
  const categories = data.allContentfulProductCategories.nodes
  let results = {}

  categories.map(category =>{
    const { categoryName, categoryHeader } = category
    groupProducts.forEach(products =>{
      const { fieldValue, nodes } = products
      if(fieldValue === categoryName)
        results[categoryHeader] = nodes
    })
  })

  const clusterProduct = (key) => {
    return(
      <div key={key}>
        <h3 className='intro-section__title mt-40'><center>{key}</center></h3>
        <ProductsV2 produtcs={results[key]} />
        <center><LargeRedButton>Xem them</LargeRedButton></center>
      </div>
    )
  }

  return (
    <Wrapper>
      <Container>
        <div className='h_before_underline'>
          <h4 className='h_underline'>Thiết kế theo thương hiệu</h4>
        </div>
        { Object.keys(results).map(clusterProduct) }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: white;
  overflow: hidden;

  .h_before_underline{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .h_underline{
    font-size: 1.1rem;
    color: #ED1C24;
    font-style: italic;
    letter-spacing: 3px;
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .h_underline:after{
    background: #ED1C24;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    bottom: -9px;
    left: -5px;
    right: -5px;
    width: 80%;
    margin: auto;
    z-index: -1;
  }
`

export default AllProducts
