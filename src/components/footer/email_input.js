import React from "react"
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl
} from "react-bootstrap"
import styled from "styled-components"
import LargeBlackButton from "../shared/large-black-button"

const EmailInput = ({ containerSize }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p className={`text-white div-center`}>
              <strong>TINH TẾ BỞI ĐƯỜNG NÉT - ĐẲNG CẤP VỀ CHẤT LƯỢNG</strong>
            </p>
          </Col>

          <Col xs={12} md={5}>
            <InputGroup className="div-center">
              <FormControl
                placeholder="NHẬP ĐỊA CHỈ EMAIL"
                aria-label="NHẬP ĐỊA CHỈ EMAIL"
                aria-describedby="basic-addon2"
              />
              <LargeBlackButton id="button-addon2">Submit</LargeBlackButton>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #ed1c24;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 24px;
    color: white;
    margin: 0px;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  input {
    height: auto;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
    margin: 0px;
  }
`

export default EmailInput
