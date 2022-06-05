import React from "react"
import styled from "styled-components"
import imageBackground from "../../assets/images/BANNER.png"
import BannerBar from "./banner_bar"

const Slider = () => {

  return (
    <WrapperContainer className="headBodyWrapper">
      <div className="slider_text_content">
          <Wrapper>
            <h4>
              ST COMPANY <hr />
            </h4>
            <h2>DỊCH VỤ SƠN GIA CÔNG TẤT CẢ MẶT HÀNG NHỰA, KIM LOẠI, ...</h2>
            <h5>Chuyên nhân sơn gia công trên tất cả bề mặt bằng súng phun sơn Tubular với dây chuyền hiện đại cùng hệ thống sấy chuyên nghiệp</h5>
          </Wrapper>
      </div>
      <BannerBar />
    </WrapperContainer>
  )
}

const WrapperContainer = styled.aside`
  background: url(${imageBackground});
`
const Wrapper = styled.aside`
  padding-left:50%;
  padding-right: 10%;
  text-align:left;

  @media screen and (max-width: 960px) {
    padding-left: 0px;
    padding-right: 0px;
    text-align:center;
  }

  @media screen and (max-width: 720px) {
    h5{
      display:none;
    }
  }

  h4{
    font-size: 24px;
    font-weight: normal;
    color: #D3D3D3;
    position:relative;
    width:fit-content
  }

  h4 hr{
    bottom:0px;
    width:80%;
    height:50%;
    text-align:left;
    position:absolute;
    left:112%;
    border-top: 2px solid red;
  }

  h2{
    font-size: 32px;
    color:white;
  }

  h5{
    font-size: 22px;
    font-weight: normal;
    color: #D3D3D3;
  }
`


export default Slider
