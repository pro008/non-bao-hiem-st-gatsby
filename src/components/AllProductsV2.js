import React from "react"
import ProductsV2 from "./ProductsV2"
import setupTags from "../utils/setupTags"
import { Container } from 'react-bootstrap';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import LargeRedButton from './shared/large-red-button'
import styled from "styled-components"

const query = graphql`
  {
    allContentfulProducts(sort: {fields: position, order: ASC}) {
      group(field: categoryId___categoryName) {
        fieldValue
        nodes {
          id
          title
          description {
            description
          }
          mainImage {
            gatsbyImageData(width: 330, height: 330, layout: CONSTRAINED, placeholder: TRACED_SVG)
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
        description {
          description
        }
      }
    }
  }
`
// <Products produtcs={results[key]} />

const AllProductsV2 = () => {
  const data = useStaticQuery(query)
  const groupProducts = data.allContentfulProducts.group
  const categories = data.allContentfulProductCategories.nodes
  let results = {}

  categories.map(category =>{
    const { categoryName, categoryHeader, description: {description} } = category
    groupProducts.forEach(products =>{
      const { fieldValue, nodes } = products
      if(fieldValue === categoryName)
        results[categoryHeader] = {"data": nodes, "description": description}
    })
  })

  const clusterProduct = (key) => {
    const priorityData = results[key]['data'][0]
    const description = results[key]['description']
    const { mainImage } = priorityData
    const pathToImage = getImage(mainImage)

    return(
      <div>
        <div key={key} className="div-center">
          <GatsbyImage
            image={pathToImage}
            alt={'non boa hiem'}
            className='hide-mobile'
          />
          <CardBlock>
            <h3 className='intro-section__title'>{key}</h3>
            <p>{description}</p>
          </CardBlock>
        </div>
        <ProductsV2 produtcs={results[key]['data']} />
      </div>
    )
  }

  return (
    <Wrapper>
      <Container>
        { Object.keys(results).map(clusterProduct) }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  overflow: hidden;
`

const CardBlock = styled.div`
  text-align: left;
  margin-left: 60px;
  position:relative;
  z-index:1;
  padding: 40px 50px;
  max-width: 500px;

  @media screen and (max-width:375px) {
    margin-left: 0px;
  }
`

export default AllProductsV2
