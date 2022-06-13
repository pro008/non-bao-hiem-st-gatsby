import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const BannerBar = () => {
  return (
    <Wrapper id="about">
      <Row className="custom-row">
        <Col md={12} xs={12}>
          <div>
            <Row className="div-center">
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/1.png"
                    width={40}
                    height={40}
                    alt={"Nuoc son Nhap khau"}
                  />
                  <h6 className="text-white ml-1">Nước sơn <br/> Nhập khẩu</h6>
                </Box>
              </Col>
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/2.png"
                    width={40}
                    height={40}
                    alt={"Nuoc son Nhap khau"}
                  />
                  <h6 className="text-white ml-1">Thợ tay <br/>nghề cao</h6>
                </Box>
              </Col>
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/3.png"
                    width={40}
                    height={40}
                    alt={"Nuoc son Nhap khau"}
                  />
                  <h6 className="text-white ml-1">Cam kết <br/>chất lượng</h6>
                </Box>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-right: 50%;
  background-color:red;
  background-attachment: fixed;
  padding-top:40px;
  padding-bottom: 0px;
  height: 120px;
  padding-left: 40px;
  position: relative;
  bottom: 70px;

  .custom-row{
    margin-top: auto;
    margin-bottom: auto;
  }
  
  :after {
    content: "";
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 0;
    height: 0;
    display: inline-block;
    line-height: 0;
    border-width: 60px;
    border-style: solid;
    border-color: transparent red red transparent;
    transform: rotate(180deg);
}

  @media screen and (max-width: 960px) {
    display: none;
  }
`
const Box = styled.div`
  div{
    float:left;
  }

  h6{
    line-height 22px;
    font-size: 18px;
  }

  @media screen and (max-width: 100px) {
    font-size: 14px;
  }
`

export default BannerBar
