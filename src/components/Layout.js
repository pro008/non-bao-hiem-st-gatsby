import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import FloatingButton from "./floating_button"
import FacebookPluggin from "./FacebookPluggin"

const Layout = ({ children }) => {
  useEffect(() => {
    import("../utils/navbar.js")
    import("../utils/facebookChat.js")
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
