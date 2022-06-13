import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import imageChuyenNganh from "../../assets/images/3.png"
import imageChuyenNganhBelow from "../../assets/images/4.png"
import LargeRedTransparentButton from "../shared/large-red-transparent-button"

import { StaticImage } from "gatsby-plugin-image"


const DichVu = () => {
  return (
    <Wrapper id="dich_vu">
      <center>
        <div className="intro-section__title center">
          <span>DỊCH VỤ</span>
        </div>
        <div className="mt-40">
          <h4>CHÚNG TÔI CUNG CẤP DỊCH VỤ SƠN GIA CÔNG TỐT NHẤT THỊ TRƯỜNG VIÊT NAM</h4>
          <p>Tự tin về chất lượng sản phẩm và dịch vụ, chúng tôi đẩy mạnh dịch vụ Gia Công trong các lĩnh vực sau đây:</p>
        </div>
      </center>
      <Box>
        <Row className="custom-row">
          <Col md={5} xs={12}>
            <StaticImage
              src="../../assets/images/icons/9.png"
              width={60}
              height={60}
              alt={"knh nghiem hon 10 nam"}
            />
            <h4 className="text-white">Sơn xe máy</h4>
            <p className="text-white">
              Chuyên nhận sơn xe nguyên chiếc, <br /> các phụ kiện xe máy sỉ và lẻ
            </p>
          </Col>
        </Row>
      </Box>

      <BoxBelow className="mt-20">
        <Row className="custom-row">
          <Col md={{ span: 5, offset: 7 }} xs={12}>
            <StaticImage
              src="../../assets/images/icons/10.png"
              width={60}
              height={60}
              alt={"knh nghiem hon 10 nam"}
            />
            <h4 className="text-white">Sơn phủ tất cả bề mặt</h4>
            <p className="text-white">
              Chuyên nhận sơn gia công trên tất<br /> cả bề mặt nhữa, kim loại,...
            </p>
          </Col>
        </Row>
      </BoxBelow>
      <center className="mt-40">
        <LargeRedTransparentButton>
          Xem thêm
        </LargeRedTransparentButton>
      </center>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  background-color: white;
  margin-top: 200px;
  
  .intro-section__title {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.2rem;
    align-items: center;
    max-width: 400px;
  }

  .intro-section__title::before,
  .intro-section__title::after {
    content: "";
    display: block;
    height: 2px;
    background-color: red;
  }

  h4{
    font-size: 32px;
    font-weight: normal;
  }
`

const Box = styled(Container)`
  background: url(${imageChuyenNganh});
  background-size:cover;
  background-attachment: fixed;
  padding-top: 65px;
  padding-bottom: 65px;
`

const BoxBelow = styled(Container)`
  text-align: right;
  background: url(${imageChuyenNganhBelow});
  background-size:cover;
  background-attachment: fixed;
  padding-top: 65px;
  padding-bottom: 65px;
`

export default DichVu
