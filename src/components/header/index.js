import React from "react"
import Logo from './logo'
import NavigationBar from './navbar'
import Slider from './slider'
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <div className='main_header' id="navbar">
        <Logo/>
        <NavigationBar />
      </div>
    </div>
  )
}


export default Header