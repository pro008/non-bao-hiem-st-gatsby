import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import styled from "styled-components"
import EmailInput from './email_input'
import { StaticImage } from "gatsby-plugin-image"
import LargeBlackButton from '../shared/large-black-button'

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Container className='footer_infor'>
          <Row>
            <Col xs={12} md={4}>
              <a href="tel:0903819987">
                <StaticImage
                  src="../../assets/images/icons/phone_number.png"
                  width={50}
                  height={50}
                  alt={'son tung logo'}
                  className={'mb-20'}
                />
                <p>091.235.4783 (MR. Vũ)</p>
              </a>
            </Col>

            <Col xs={12} md={4}>
              <a href="mailto:nonbaohiemsontung@example.com">
                <StaticImage
                  src="../../assets/images/icons/email.png"
                  width={50}
                  height={50}
                  alt={'email son tung helmade'}
                  className={'mb-20'}
                />
                <p>nonbaohiemsontung@gmail.com</p>
              </a>
            </Col> 

            <Col xs={12} md={4}>
              <StaticImage
                src="../../assets/images/icons/location.png"
                width={50}
                height={50}
                alt={'Location son tung helmade'}
                className={'mb-20'}
              />
              <p className="footer__text">304/38 Hương Lộ 80, P. Bình Hưng Hòa B, Q. Bình Tân, TP.HCM</p>
            </Col>

          </Row>
            <hr />
          <Row>
            <Col xs={6} md={4}>
              <h6 className="footer__title">ST HELMET</h6>
              <Link href="/about"><a className="footer-nav__link">Giới thiệu</a></Link>
              <Link href="/products"><a className="footer-nav__link">Sản phẩm</a></Link>
              <Link href="/"><a className="footer-nav__link">Liên hệ</a></Link> 
            </Col>
            <Col xs={6} md={4}>
              <h6 className="footer__title">CHÍNH SÁCH</h6>
              <Link href="/about"><a className="footer-nav__link">Chính sách thanh toán</a></Link>
              <Link href="/about"><a className="footer-nav__link">Chính sách vận chuyển</a></Link>
              <Link href="/about"><a className="footer-nav__link">Chính sách bảo hành</a></Link> 
            </Col>
            <Col xs={12} md={4}>
              <h6 className="footer__title">SUBSCRIBE</h6>
              <InputGroup className="center-content">
                <FormControl
                  placeholder="NHẬP ĐỊA CHỈ EMAIL"
                  aria-label="NHẬP ĐỊA CHỈ EMAIL"
                  aria-describedby="basic-addon2"
                />
                <LargeBlackButton id="button-addon2">
                  Submit
                </LargeBlackButton>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Wrapper>

      <SocialNetworks>
        <div className="center-content mt-60">
          <a href="https://www.facebook.com/ctysontung" target="_blank">
            <StaticImage
              src="../../assets/images/icons/facebook_icon.png"
              width={50}
              height={50}
              alt={'email son tung helmade'}
              className={'mb-20'}
            />
          </a>

          <a href="https://www.youtube.com/c/S%C6%A1nT%C3%B9nghelmet" target="_blank">
            <StaticImage
              src="../../assets/images/icons/youtube_icon.png"
              width={50}
              height={50}
              alt={'email son tung helmade'}
              className={'mb-20'}
            />
          </a>

          <a href="">
            <StaticImage
              src="../../assets/images/icons/instagram_icon.png"
              width={50}
              height={50}
              alt={'email son tung helmade'}
              className={'mb-20'}
            />
          </a>

          <a href="">
            <StaticImage
              src="../../assets/images/icons/pinterest_icon.png"
              width={50}
              height={50}
              alt={'email son tung helmade'}
              className={'mb-20'}
            />
          </a>
        </div>
        <div className="footer__copy mb-0_5 mb-md-1 d-lg-inline">
          <center>© 2021 COPYRIGHT BOI73 CONG6 TY TNHH MTV ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ SƠN TÙNG</center>
        </div>
      </SocialNetworks>
    </footer>
  )
}

const Wrapper = styled.div`
  color: black;
  background-color: #f4f4f4;
  text-align:center;

  a, p ,h6{
    display: block;
    color:black;
  }

  a:hover, a:hover p{
    color: #ED1C24;
  }

  hr{
    border:1px solid grey;
    width:72%;
    margin:auto;
    margin-top:20px;
    margin-bottom:50px;
  }

`

const SocialNetworks = styled.div`
  padding-bottom: 40px;
  a{
    padding-right:20px;
    padding-left:20px;
  }

`

export default Footer
