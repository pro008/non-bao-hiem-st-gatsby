import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"

const LargeBlackButton = ({ children }) => {
  return <BlackButton>{children}</BlackButton>
}

const BlackButton = styled(Button)`
  color: white;
  background-color: #080808;
  border-color: #080808;

  :hover,
  :focus {
    color: white;
    background-color: #080808;
    border-color: #080808;
  }
`

export default LargeBlackButton
