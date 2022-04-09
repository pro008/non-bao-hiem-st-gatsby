import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import SEO from "../components/SEO"
import AllProductsV2 from "../components/AllProductsV2"
import styled from "styled-components"

const Products = () => {
  const data = useStaticQuery(query).contentfulProducts.mainImage
  const CardImage = getImage(data)
  const headerText = "CHẤT LƯỢNG CAO - GIÁ THÀNH HỢP LÝ"

  return (
    <Layout>
      <SEO title="Products" description={headerText}/>
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
        <WhyChooseUs className="div-center">
          <h4 className="intro-section__title">
            <center>WHY CHOOSE US</center>
          </h4>
          <p>
            {" "}
            Vì sao khách hàng chọn ST Helmet làm
            <br />
            nhà cung cấp sản phẩm nón bảo hiểm
          </p>
          <Container className="div-center mt-60">
            <GatsbyImage
              className="slider_image"
              alt="non bao hiem nua dau"
              className="hide-mobile"
              image={CardImage}
            />
            <div className="card-standard">
              <h5 className="text-image-block__subtitle is-inview">
                ST HELMET
              </h5>
              <p>
                Mục tiêu của ST Helmet là đảm bảo an toàn tuyệt đối và thoải mái
                cho người sử dụng
              </p>
              <ul>
                <li>Sản xuất từ nhựa ABS chuyên dụng</li>
                <li>Đạt chuẩn quốc gia QCVN 2:2008/BKHCN</li>
                <li>Thiết kế sáng tạo</li>
                <li>Chất lượng cao - Giá thành hợp lý</li>
                <li>Nguyên liệu sơn nhập khẩu</li>
              </ul>
            </div>
          </Container>
        </WhyChooseUs>

        <h3 className="intro-section__title mt-60">
          <center>SẢN PHẨM</center>
        </h3>
        <AllProductsV2 />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulProducts(title: { eq: "ST34-B" }) {
      mainImage {
        gatsbyImageData(
          width: 330
          height: 330
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
    }
  }
`

const WhyChooseUs = styled.div`
  display: block;
  padding-top: 60px;
  padding-bottom: 90px;
  background-color: #f4f4f4;

  .card-standard {
    text-align: left;
    margin-left: 60px;
    position: relative;
    z-index: 1;
    padding: 40px 50px;
    background-color: white;
    max-width: 500px;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  }

  ul {
    list-style: none;
  }

  ul li {
    padding-left: 0.5rem;
  }

  ul li::before {
    top: 0px;
    background-color: transparent;
    content: "√";
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (max-width: 375px) {
    .card-standard {
      margin-left: 0px;
    }
  }
`

export default Products
