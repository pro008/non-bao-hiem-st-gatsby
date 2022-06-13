import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import textSplit from "../../utils/textSlipt"
import { Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"


const CardBlock = () => {
  const data = useStaticQuery(query)
  const cards = data.allContentfulGioiThieu.nodes

  return (
    <>
      <center>
        <Wrapper className="mt-60">
          <span>VỀ CHÚNG TÔI</span>
        </Wrapper>
      </center>
      {cards.map((card, index) => {
        const {
          title,
          description: { description },
          image,
        } = card
        const pathToImage = getImage(image)
        const align = index % 2 === 1 ? "left" : "right"
        return (
          <section
            className="site-section site-section--white site-section--present"
            key={index}
          >
            <div className="site-section__holder">
              <div className="site-section__container container">
                <div
                  className={`text-image-block text-image-block--image-offset-md text-image-block--align-center text-image-block--content-${align}`}
                >
                  <div className="text-image-block__holder">
                    <Col
                      xs={12}
                      md={6}
                      className="text-image-block__content-part is-inview"
                    >
                      <div className="text_image_block__description">
                        <div className="text-image-block__text-box">
                          <h3 className="text-image-block__subtitle is-inview">
                            <span
                              className={`text-image-block__hidden_span_${align}`}
                            >
                              0{index + 1}
                            </span>
                            {title}
                          </h3>
                          <ul className="text-image-block__text is-inview">
                            {textSplit(description).map((e, i) => {
                              return <li key={i}>{e}</li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="text-image-block__visual-part overflow-x-hidden"
                    >
                      <div className="text-image-block__image-holder">
                        <GatsbyImage
                          className="slider_image"
                          alt={title}
                          image={pathToImage}
                        />
                      </div>
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

const Wrapper = styled.div`
    font-size: 2rem;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.2rem;
    align-items: center;
    max-width: 400px;

  ::before, ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: red;
  }

`

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

export default CardBlock
