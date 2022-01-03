import React from 'react';
import { Button } from 'react-bootstrap';
import styled from "styled-components"

const LargeWhiteButton = ({ children }) => {
  return (
    <WhiteButton>
      { children }
    </WhiteButton>
  )
}

const WhiteButton = styled(Button)`
  color: #080808;
  border-color: white;
  background-color: white;
  transition: 0.3s;
  padding: 0.9rem;

  :hover, :focus{
    color: white;
    border-color: white;
    background: transparent;
  }
`

export default LargeWhiteButton