import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import SEO from "../components/SEO"
import AllClients from "../components/AllClients"

const Client = () => {
  const data = useStaticQuery(query)
  const headerText = "KHÁCH HÀNG CỦA CÔNG TY SƠN TÙNG"

  return (
    <Layout>
      <SEO title="Khách Hàng" />
      <main className="page">
        <header>
          <div className="headBodyWrapperSub">
            <StaticImage
              className="headerSliderImageSub"
              src="../assets/images/gioi_thieu.png"
              width={1028}
              height={600}
              alt={headerText}
              placeholder="blurred"
              layout="CONSTRAINED"
            />
            <div className="headerTextContent">
              <h5 className="text-white">{headerText}</h5>
            </div>
          </div>
        </header>
        <Container>
          <AllClients />
        </Container>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGioiThieu(sort: { fields: position }) {
      nodes {
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Client
