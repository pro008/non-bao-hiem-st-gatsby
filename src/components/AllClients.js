import React from "react"
import Clients from "./Clients"
import { graphql, useStaticQuery } from "gatsby"
import { Row } from "react-bootstrap"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulClients(sort: { fields: position, order: ASC }) {
      nodes {
        id
        clientsName
        images {
          gatsbyImageData(
            width: 220
            height: 220
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
        productId {
          productTitle
        }
      }
    }
  }
`
// <Products produtcs={results[key]} />

const AllClients = () => {
  const data = useStaticQuery(query)
  const clients = data.allContentfulClients.nodes

  return (
    <Wrapper>
      <Row>
        {clients.map(client => <Clients key={client.id} client={client}/>)}
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  overflow: hidden;
`

export default AllClients
