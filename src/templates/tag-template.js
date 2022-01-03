import React from "react"
import { graphql } from "gatsby"
import Products from "../components/Products"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  // const recipes = data.allContentfulProducts.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <Products products={recipes} />
        </div>
      </main>
    </Layout>
  )
}

// export const query = graphql`
//   query GetRecipeByTag($tag: String) {
//     allContentfulProducts(
//       sort: { fields: title, order: ASC }
//     ) {
//       nodes {
//         title
//         id
//         cookTime
//         prepTime
//         image {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//         }
//       }
//     }
//   }
// `

export default TagTemplate
