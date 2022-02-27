import React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { Row, Col, Container } from "react-bootstrap"
import SliderDetail from "../components/shared/slider_detail"
import NormalSlider from "../components/shared/NormalSlider"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import textSplit from "../utils/textSlipt"
import ProductsV2 from "../components/ProductsV2"

const ProductTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    mainImage,
    contentImages,
    clientImages,
    relativeProducts,
  } = data.contentfulProducts
  // will delete
  let images = [getImage(mainImage)]

  if (contentImages != null) {
    contentImages.map(image => {
      const subImagePth = getImage(image)
      images.push(subImagePth)
    })
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <header>
          <div className="headBodyWrapperSub">
            <StaticImage
              className="headerSliderImageSub"
              src="../assets/images/gioi_thieu.png"
              width={1028}
              height={600}
              alt={title}
              placeholder="blurred"
              layout="CONSTRAINED"
            />
            <div className="headerTextContent">
              <h5 className="text-white">{title}</h5>
            </div>
          </div>
        </header>
        <section className="bg-light-grey">
          <Container>
            <Row>
              <Col xs={12} md={5} className="mb-20">
                <SliderDetail images={images} />
              </Col>
              <Col xs={12} md={7}>
                <article>
                  <h5>MÃ SẢN PHẨM: {title}</h5>
                  <HorizonUnderline />
                  <h5>MÔ TẢ CHI TIẾT</h5>
                  <p>
                    {textSplit(description).map((e, i) => {
                      return (
                        <>
                          {e}
                          <br />
                        </>
                      )
                    })}
                  </p>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <article>
                  <h5>SẢN PHẨM CỦA KHÁCH HÀNG</h5>
                  <h5>MÔ TẢ CHI TIẾT</h5>
                  <p>
                    ST Helmet đã tạo dựng uy tín hơn 10 năm trong lĩnh vực sản
                    xuất nón bảo hiểm về chất lượng sản phẩm và dịch vụ. ST
                    Helmet đã trở thành nhà cung cấp sản phẩm cho rất nhiều
                    doanh nghiệp trong nước lẫn ngoài nước.
                  </p>
                </article>
              </Col>
              <Col xs={12} md={5}>
                <NormalSlider images={clientImages} needParse={true} />
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <h5>
            <center>SẢN PHẨM KHÁC</center>
          </h5>
          <ProductsV2 produtcs={relativeProducts} /> }
        </section>
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
        gatsbyImageData(
          width: 550
          height: 550
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      contentImages {
        gatsbyImageData(
          width: 550
          height: 704
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      clientImages {
        gatsbyImageData(
          width: 330
          height: 330
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      relativeProducts {
        id
        title
        mainImage {
          gatsbyImageData(
            width: 220
            height: 220
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`

const HorizonUnderline = styled.hr`
  border: 2px solid black;
  width: 25%;
  margin-top: 20px;
  margin-bottom: 50px;
`

export default ProductTemplate
