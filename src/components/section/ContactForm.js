import React from "react"
import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import LargeRedButton from "../shared/large-red-button"

const ContactForm = ({ children }) => {
  return (
    <Section>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>HỌ VÀ TÊN</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>SỐ ĐIỆN THOẠI</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>MÃ SẢN PHẨM</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>SỐ LƯỢNG</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>LỜI NHẮN</Form.Label>
        <Form.Control placeholder="hiện đang được bảo trì" disabled />
      </Form.Group>
      <center><LargeRedButton type="submit">Submit</LargeRedButton></center>
    </Section>
  )
}

const Section = styled.section`
  .form-control{
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-radius:4px;
  }
  .form-control:disabled{
    background-color:white;
  }
`

export default ContactForm
