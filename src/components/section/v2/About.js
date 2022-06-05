import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"


const About = () => {

  return (
    <Wrapper>
      <Row>
        <Col md={7} xs={12}>
          <h3 className="intro-section__title">
            VỀ CHÚNG TÔI <hr />
          </h3>
          <h4 className="mt-40">
            CÔNG TY SƠN TÙNG THÀNH LẬP TỪ NĂM 2010 VỚI NHIỀU NĂM KINH NGHIỆM VỀ NGÀNH SƠN
          </h4>
          <Row className="mt-40">
            <Col md={4} xs={12}>
              <ul>
                <li>Có hệ thống sấy (hấp)</li>
                <li>Màu sơn chuẩn</li>
                <li>Dây chuyền hiện đại</li>
              </ul>
            </Col>
            <Col md={7} xs={12}>
              <ul>
                <li>Nguyên liệu sơn nhậ khẩu</li>
                <li>Đội ngũ nhân viên giàu kinh nghiệm</li>
                <li>Cam kết sơn không phai màu</li>
              </ul>
            </Col>
          </Row>
        </Col>

        <Col md={5} xs={12}>
          <Row>
            <Col md={12} xs={12} className="mb-20">
              <StaticImage
                src="../../../assets/images/1.png"
                aspectRatio={16/8} 
                alt={"Top 3 thi truong viet nam"}
              />
            </Col>
            <Col md={6}>
              <StaticImage
                aspectRatio={16/14} 
                src="../../../assets/images/2.png"
                alt={"Top 3 thi truong viet nam"}
              />
            </Col>
            <Col md={6}>
              <StaticImage
                aspectRatio={16/14} 
                src="../../../assets/images/3.png"
                alt={"Top 3 thi truong viet nam"}
              />
            </Col>
            <div className="medalion">
              <StaticImage
                src="../../../assets/images/icons/4.png"
                width={40}
                height={40}
                alt={"email son tung helmade"}
                className={"mb-20"}
              />
              <h6><span className="yellow">10</span> + </h6>
              <p>Năm kinh nghiệm</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  background-color: white;
  margin-top: 200px;

  .medalion{
    background-color:red;
    position:absolute;
    top:-15%;
    right:12%;
    text-align: center;
    color:white;
    padding:12px;
    border-radius:2px;
  }

  .medalion .yellow{
    color: yellow;
  }

  .medalion p{
    margin: 0px;
  }

  h3{
    position:relative;
    width:fit-content
  }

  h4{
    font-size: 32px;
    font-weight: normal;
  }

  hr{
    bottom:0px;
    width:6em;
    height:50%;
    text-align:left;
    position:absolute;
    left:112%;
    border-top: 3px solid red;
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

export default About
