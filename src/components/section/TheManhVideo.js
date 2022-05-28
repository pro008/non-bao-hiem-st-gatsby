import React from "react"
import styled from "styled-components"

const TheManhVideo = () => {
  return (
    <>
      <h4 className="intro-section__title mt-60">
        <center>
          Điểm mạnh cua <span className="text-red">ST HELMET</span>
        </center>
      </h4>
      <center className="mt-40">
        <FieldSet>
          <iframe
            src="https://www.youtube.com/embed/oEVnPeP_DCQ"
            title="Quy trinh san xuat non bao hiem cong ty Son tung"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </FieldSet>
      </center>
    </>
  )
}

const FieldSet = styled.fieldset`
  width:100%;
  height:100%;

  iframe {
    width:800px;
    height:400px;
  }

  @media (max-width:800px){
    width:100%;
    height:100%;

    iframe{
      width:100%;
    }
  }
`


export default TheManhVideo
