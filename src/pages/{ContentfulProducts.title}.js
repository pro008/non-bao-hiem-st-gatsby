import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const ProductTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    mainImage,
  } = data.contentfulProducts
  const pathToImage = getImage(mainImage)

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <header>
          <div className='headBodyWrapper'>
            <StaticImage
              className='headerSliderImage'
              src='../assets/images/gioi_thieu.png'
              alt={title}
              placeholder="blurred"
              layout="CONSTRAINED"
            />
            <div className='headerTextContent'>
              <h5 className="text-white">{title}</h5>
            </div>
          </div>
        </header>
        <div className="recipe-page div-center">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          </section>
          {/* rest of the content */}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($title: String) {
    contentfulProducts(title: { eq: $title }) {
      title
      description {
        description
      }
      mainImage {
        gatsbyImageData(width: 330, height: 330, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default ProductTemplate
