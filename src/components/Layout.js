import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import FloatingButton from "./floating_button"
import FacebookPluggin from "./FacebookPluggin"

const Layout = ({ children, props }) => {
  useEffect(() => {
    import("../utils/navbar.js")
  }, [])

  return (
    <>
      <FloatingButton />
      <Header />
      {children}
      <FacebookPluggin />
      <Footer />
    </>
  )
}

export default Layout
