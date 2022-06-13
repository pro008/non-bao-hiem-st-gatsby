import React from "react"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const WhyMe = () => {
  return (
    <Wrapper>
      <Row>
        <Col md={6} xs={12}>
          <Row>
            <div className="medalion">
              <StaticImage
                src="../../assets/images/6.png"
                alt={"email son tung helmade"}
                className={"mb-20"}
              />
            </div>
          </Row>
        </Col>
        <Col md={6} xs={12} className="pl-60">
          <div className="intro-section__title">
            <span>Tại sao chọn chúng tôi</span>
          </div>
          <h4 className="mt-40">
            CHÚNG TÔI CUNG CẤP DỊCH VỤ SƠN GIA CÔNG TỐT NHẤT TRÊN THỊ TRƯỜNG VIỆT NAM
          </h4>

          <Row className="mt-40">
            <Col md={8}>
              <h6>Chất lượng nguyên liệu sơn</h6>
            </Col>
            <Col md={4} className="right">
              <h6>98%</h6>
            </Col>
            <Col md={12}>
              <div className="progressBar">
                <ProgressBar striped variant="danger" now={90}  className="pr-b"/>
              </div>
            </Col>
          </Row>

          <Row className="mt-40">
            <Col md={8}>
              <h6>Độ bền của màu sơn</h6>
            </Col>
            <Col md={4} className="right">
              <h6>97%</h6>
            </Col>
            <Col md={12}>
              <div className="progressBar">
                <ProgressBar striped variant="danger" now={89}  className="pr-b"/>
              </div>
            </Col>
          </Row>

          <Row className="mt-40">
            <Col md={8}>
              <h6>Trình độ kỹ thuật</h6>
            </Col>
            <Col md={4} className="right">
              <h6>99%</h6>
            </Col>
            <Col md={12}>
              <div className="progressBar">
                <ProgressBar striped variant="danger" now={91}  className="pr-b"/>
              </div>
            </Col>
          </Row>

          <Row className="mt-40">
            <Col md={8}>
              <h6>Độ chính xác màu</h6>
            </Col>
            <Col md={4} className="right">
              <h6>98%</h6>
            </Col>
            <Col md={12}>
              <div className="progressBar">
                <ProgressBar striped variant="danger" now={90}  className="pr-b"/>
              </div>
            </Col>
          </Row>
        </Col>
        
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  background-color: white;
  margin-top: 200px;

  .progressBar{
    height:20px;
    background-color:black;
    border-radius: 2px;
  }

  .progress-bar{
    height:20px;
    position:absolute;
    top:0px;
    left: 0.8rem;
    background-color: red!important;
    border-radius: 2px 0px 0px 2px;
  }

  .intro-section__title {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 0fr max-content 1fr;
    grid-column-gap: 0rem;
    align-items: center;
  }

  .intro-section__title::before,
  .intro-section__title::after {
    content: "";
    display: block;
    height: 2px;
    background-color: red;
  }

  .intro-section__title::after{
    margin-left: 1.2rem;
  }

  .right{
    text-align:right;
  }


  h3{
    position:relative;
    width:fit-content
  }

  h4{
    font-size: 32px;
    font-weight: normal;
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
`

export default WhyMe
