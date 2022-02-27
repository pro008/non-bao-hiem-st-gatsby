import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import LargeRedTransparentButton from "../shared/large-red-transparent-button"
import styled from "styled-components"
import imageChuyenNganh from "../../assets/images/chuyen_nganh.png"
import { StaticImage } from "gatsby-plugin-image"

const ChuyenNganh = () => {
  return (
    <Wrapper id="chuyen_nganh">
      <Row className="custom-row">
        <Col md={5} xs={12}>
          <Container>
            <h4 className="intro-section__title text-white">Chuyên Ngành</h4>
            <p className="text-white">
              Sản xuất mũ bảo hiểm quảng cáo theo thương hiệu uy tín hàng đầu
              Việt Nam
            </p>
            <Link to="/about">
              <LargeRedTransparentButton>
                GIỚI THIỆU VỀ CÔNG TY SƠN TÙNG
              </LargeRedTransparentButton>
            </Link>
          </Container>
        </Col>
        <Col md={7} xs={12}>
          <div>
            <Row className="div-center">
              <Col md={4} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/chuyen_nganh_1.png"
                  width={100}
                  height={100}
                  alt={"Top 3 thi truong viet nam"}
                />
                <h6 className="text-white mt-20">TOP 3</h6>
                <p className="text-white">Thị trường Việt Nam</p>
              </Col>
              <Col md={4} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/chuyen_nganh_2.png"
                  width={100}
                  height={100}
                  alt={"hop tac hon 1000 ngan doanh nghiep"}
                />
                <h6 className="text-white mt-20">HỢP TÁC</h6>
                <p className="text-white">Hơn 1000 doanh nghiệp</p>
              </Col>
              <Col md={4} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/chuyen_nganh_3.png"
                  width={100}
                  height={100}
                  alt={"knh nghiem hon 10 nam"}
                />
                <h6 className="text-white mt-20">KINH NGHIỆM</h6>
                <p className="text-white">Hơn 10 năm thành lập</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: url(${imageChuyenNganh});
  background-attachment: fixed;
  padding-top: 65px;
  padding-bottom: 65px;
`

export default ChuyenNganh
