import React, { useEffect } from "react"
import Header from './header'
import Footer from "./footer"

const Layout = ({ children }) => {
  useEffect(() => {
    import("../utils/navbar.js");
  }, []);
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
