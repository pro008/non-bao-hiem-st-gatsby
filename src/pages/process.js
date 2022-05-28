import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import SEO from "../components/SEO"
import CardBlock from "../components/shared/CardBlock"

const Process = () => {
  const data = useStaticQuery(query)
  const items = data.allContentfulQuyTrinh.nodes
  const headerText = "QUY TRÌNH SẢN XUẤT CÔNG TY SƠN TÙNG"

  return (
    <Layout>
      <SEO title="Quy Trình" description={headerText} />
      <main className="page">
        <header>
          <div className="headBodyWrapperSub">
            <StaticImage
              className="headerSliderImageSub"
              src="../assets/images/quy_trinh.png"
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
          <CardBlock cards={items} />
        </Container>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulQuyTrinh(sort: { fields: position }) {
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

export default Process
