import React from 'react';
import { Button } from 'react-bootstrap';
import styled from "styled-components"

const LargeRedTransparentButton = ({ children }) => {
  return (
    <RedButton>
      { children }
    </RedButton>
  )
}

const RedButton = styled(Button)`
  color: white;
  background-color: #ED1C24;
  border-color: #ED1C24;

  :hover, :focus{
    color: #ED1C24;
    border-color: #ED1C24;
    background: transparent;
  }
`

export default LargeRedTransparentButton