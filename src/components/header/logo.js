import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <StaticImage
          src="../../assets/images/LOGO_SON_TUNG.png"
          width={76}
          height={61}
          alt={"son tung logo"}
        />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 0.7rem;
  margin-left: 1rem;
  float: left;
  cursor: pointer;
`

export default Logo
