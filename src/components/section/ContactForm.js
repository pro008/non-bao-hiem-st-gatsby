import React from "react"
import styled from "styled-components"
import LargeRedButton from "../shared/large-red-button"

const ContactForm = () => {
  return (
    <Section>
      <form method="post" action="https://usebasin.com/f/a04787477e1a">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">HỌ VÀ TÊN</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">SỐ ĐIỆN THOẠI</label>
          <input className="form-control" type="text" name="phone-number" />
        </div>
        <div className="mb-3">
          <label className="form-label">MÃ SẢN PHẨM</label>
          <input className="form-control" type="text" name="phone-number" />
        </div>
        <div className="mb-3">
          <label className="form-label">SỐ LƯỢNG</label>
          <input className="form-control" type="text" name="phone-number" />
        </div>
        <div className="mb-3">
          <label className="form-label">LỜI NHẮN</label>
          <input className="form-control" type="text" name="phone-number" />
        </div>
        <center>
          <LargeRedButton type="submit">Submit</LargeRedButton>
        </center>
      </form>
    </Section>
  )
}

const Section = styled.section`
  form{
    width:600px;
    margin-left:auto;
    margin-right:auto;
  }
  .form-control {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 4px;
  }
  .form-control:disabled {
    background-color: white;
  }

  @media (max-width:600px){
    form{
      width:300px;
    }
  }
`

export default ContactForm
