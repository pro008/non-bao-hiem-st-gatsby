import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import FloatingButton from "./floating_button"
import FacebookPluggin from "./FacebookPluggin"
import UrgentCall from "./UrgentCall"

const Layout = ({ children }) => {
  useEffect(() => {
    import("../utils/navbar.js")
  }, [])

  return (
    <>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WNC5GKJP"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}} />
      </noscript>
      <FloatingButton />
      <Header />
      {children}
      <FacebookPluggin />
      <UrgentCall />
      <Footer />
    </>
  )
}

export default Layout
