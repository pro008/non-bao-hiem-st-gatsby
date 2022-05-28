import React from "react"
import SliderForClient from "./shared/slider_for_client"
import { Col } from "react-bootstrap"
import styled from "styled-components"

const Clients = ({ client }) => {
  if (client == null) return <></>
  const { clientsName, images, productId: {productTitle} } = client
  return (
    <Wrapper xs={12} md={3}className="center-content">
      <figure>
        <SliderForClient images={images} />
        <hr />
        <figcaption>
          <p><strong>Mã nón</strong></p>
          <p>{productTitle || ''}</p>
          <p><strong>Khách hàng</strong></p>
          <p>{clientsName}</p>
        </figcaption>
      </figure>
    </Wrapper>
  )
}

const Wrapper = styled(Col)`
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 65px;
  margin-bottom: 25px;
  padding-top: 20px;

  hr{
    border-top: 2px solid grey;
    width:90%;
    margin:auto;
    margin-bottom: 20px;
  }

  a {
    margin-right: 10px;
    margin-bottom: 14px;
  }

  figure {
    padding-top: 20px;
    padding-right: 12px;
    padding-left: 12px;
    padding-bottom: 0px;
    width: 80%;
    background-color: white;
    color: black;
    border-bottom: 2px solid #ed1c24;
    border-radius: 15px;
    box-shadow: -2px -2px 15px 0 rgb(218 218 218);
  }

  figure:hover {
    transform: scale(1.1);
    transition: transform 0.4s;
  }
  
  figure p:nth-child(1), figure p:nth-child(2){
    height: fit-content;
    margin:0px;
  }

  figcaption{
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 10px;
    min-height: 150px;
  }

  @media screen and (min-width: 768px) {
    figcaption p{
      font-size: 14px;
    }
  }


  @media screen and (max-width: 400px) {
    figure{
      width:100px
    }
  }

  @media screen and (max-width: 960px) {
    figure{
      width:150px
    }
  }
`

export default Clients
