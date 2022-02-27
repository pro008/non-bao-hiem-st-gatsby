import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import SEO from "../components/SEO"
import ContactForm from "../components/section/ContactForm"


const Contact = () => {
  const headerText = "LIÊN HỆ VỚI CHÚNG TÔI"

  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <header>
          <div className="headBodyWrapperSub">
            <StaticImage
              className="headerSliderImageSub"
              src="../assets/images/gioi_thieu.png"
              width={1028}
              height={600}
              alt={headerText}
              placeholder="blurred"
              layout="CONSTRAINED"
            />
            <div className="headerTextContent">
              <h5 className="text-white"><center>{headerText}</center></h5>
            </div>
          </div>
        </header>
        <Container>
          <ContactForm />
          <div class="map mb-60">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.910993445024!2d106.5827336145468!3d10.818123261381434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ba032d18de7%3A0xd9fe2b7f98473dd5!2zMzA0IMSQSDgwLCBCw6xuaCBIxrBuZyBIb8OgIEIsIELDrG5oIENow6FuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1641995415742!5m2!1svi!2s" width="800" height="450" />
          </div>
        </Container>
      </main>
    </Layout>
  )
}

export default Contact
