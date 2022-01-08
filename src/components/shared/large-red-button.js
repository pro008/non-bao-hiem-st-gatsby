import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"

const LargeRedButton = ({ children }) => {
  return <RedButton>{children}</RedButton>
}

const RedButton = styled(Button)`
  color: white;
  background-color: #ed1c24;
  border-color: #ed1c24;

  :hover,
  :focus {
    color: #ed1c24;
    border-color: #ed1c24;
    background: white;
  }
`

export default LargeRedButton
