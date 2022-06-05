import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const BannerBar = () => {
  return (
    <Wrapper>
      <Row className="custom-row">
        <Col md={12} xs={12}>
          <div>
            <Row className="div-center">
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/1.png"
                    width={60}
                    height={60}
                    alt={"Nuoc son Nhap khau"}
                  />
                  <h6 className="text-white ml-1">Nước sơn <br/> Nhập khẩu</h6>
                </Box>
              </Col>
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/2.png"
                    width={60}
                    height={60}
                    alt={"Nuoc son Nhap khau"}
                  />
                  <h6 className="text-white ml-1">Thợ tay <br/>nghề cao</h6>
                </Box>
              </Col>
              <Col md={4} xs={12}>
                <Box>
                  <StaticImage
                    src="../../assets/images/icons/3.png"
                    width={60}
                    height={60}
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
  margin-right: 30%;
  background-color:red;
  background-attachment: fixed;
  padding-top: 65px;
  padding-bottom: 65px;
  padding-left: 40px;
  position: relative;
  bottom: 100px;
  border-radius: 2px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`
const Box = styled.div`
  div{
    float:left;
  }

  h6{
    line-height 30px;
    font-size: 22px;
  }
`

export default BannerBar
