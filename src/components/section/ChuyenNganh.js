import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import imageChuyenNganh from "../../assets/images/2.png"
import { StaticImage } from "gatsby-plugin-image"

const ChuyenNganh = () => {
  return (
    <Wrapper id="chuyen_nganh">
      <Row className="custom-row">
        <Col md={12} xs={12}>
          <div>
            <Row className="div-center">
              <Col md={3} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/5.png"
                  width={100}
                  height={100}
                  alt={"Top 3 thi truong viet nam"}
                />
                <h6 className="text-white mt-20">HỢP TÁC</h6>
                <p className="text-white">Hơn 100 doanh nghiệp</p>
              </Col>
              <Col md={3} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/6.png"
                  width={100}
                  height={100}
                  alt={"hop tac hon 1000 ngan doanh nghiep"}
                />
                <h6 className="text-white mt-20">TOP 3</h6>
                <p className="text-white">Thị trường Việt Nam</p>
              </Col>
              <Col md={3} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/7.png"
                  width={100}
                  height={100}
                  alt={"knh nghiem hon 10 nam"}
                />
                <h6 className="text-white mt-20">CÔNG NGHỆ</h6>
                <p className="text-white">Dây chuyền hiện đại</p>
              </Col>
              <Col md={3} xs={12}>
                <StaticImage
                  src="../../assets/images/icons/8.png"
                  width={100}
                  height={100}
                  alt={"knh nghiem hon 10 nam"}
                />
                <h6 className="text-white mt-20">Năng Suất</h6>
                <p className="text-white">Cung cấp số lượng lớn</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 80px;
  background: url(${imageChuyenNganh});
  background-attachment: fixed;
  background-size:cover;
  padding-top: 65px;
  padding-bottom: 65px;
`

export default ChuyenNganh
