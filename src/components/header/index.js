import React from "react"
import Logo from "./logo"
import NavigationBar from "./navbar"

const Header = () => {
  return (
    <div>
      <div className="main_header" id="navbar">
        <Logo />
        <NavigationBar />
      </div>
    </div>
  )
}

export default Header
