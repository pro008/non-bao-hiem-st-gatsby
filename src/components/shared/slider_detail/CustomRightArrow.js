import React from "react"
import styled from "styled-components"

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <Button
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      onClick={() => onClick()}
    />
  )
}

const Button = styled.div`
  right: 32%;
  bottom: 15px;
  border: 2px solid white;

  &:before {
    content: "➜";
    color: white;
    height: 35px;
  }
`

export default CustomRightArrow
