import React from "react"
import LargeWhiteButton from "../shared/large-white-button"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const SliderItem = ({ url, alt, title, text }) => {
  return (
    <Wrapper>
      <GatsbyImage className="slider_image" alt={title} image={url} />
      <div className="slider_text_content">
        <div>
          <p className="high_light_header" style={{ margin: "auto" }}>
            <small>ST HELMET</small>
          </p>
          <br />
          {text.split("\n").map(e => {
            return (
              <h5 key={e} className="text-white">
                {e}
              </h5>
            )
          })}
          <div className="div-center mt-40">
            <LargeWhiteButton>LIÊN HỆ NGAY</LargeWhiteButton>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  height: 100vh;
  overflow: hidden;
  clear: both;

  .slider_image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider_text_content {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    width: 100vw;
    height: 600px;

    h5 {
      font-size: 20px;
      text-align: center;
    }
  }
`

export default SliderItem
