import React, { useState } from "react"
import { Link } from "gatsby"

const MAX_SCROLL = 0
const MIN_SCROLL = 100
let counter = MIN_SCROLL

const NavigationBar = () => {
  const [isActive, setActive] = useState(false)

  let navbar_collapse_overlay,
    navbar_collapse,
    navbar_holder,
    navbar_holder_scrollder

  function handleAnimation(translate, opacity) {
    navbar_collapse_overlay.style.transform = translate
    navbar_collapse.style.transform = translate
    if (opacity > 0.9) navbar_holder_scrollder.style.opacity = opacity
    else navbar_holder_scrollder.style.opacity = 0
  }

  function handleActiveNav(is_active) {
    setActive(is_active)
    navbar_collapse_overlay = document.getElementsByClassName(
      "navbar-collapse__overlay"
    )[0]
    navbar_collapse = document.getElementsByClassName("navbar-collapse")[0]
    navbar_holder = document.getElementsByClassName(
      "navbar-collapse__holder"
    )[0]
    navbar_holder_scrollder = document.getElementsByClassName(
      "navbar-collapse__scroller"
    )[0]

    if (counter === MAX_SCROLL || counter === MIN_SCROLL)
      handleInterval(is_active)
  }

  function handleInterval(is_active) {
    var st = setInterval(function () {
      if (is_active) {
        console.log(counter)
        counter -= 4
        let opacity = (MIN_SCROLL - counter) / 100
        handleAnimation(`translate(${counter}%, 0px)`, opacity)
        navbar_holder.style.visibility = "inherit"
        if (counter <= MAX_SCROLL) {
          counter = MAX_SCROLL
          clearInterval(st)
          handleAnimation(`translate(${MAX_SCROLL}%, 0px)`, 1)
        }
      } else {
        counter += 4
        let opacity = counter / 100
        handleAnimation(`translate(${counter}%, 0px)`, opacity)
        if (counter >= MIN_SCROLL) {
          counter = MIN_SCROLL
          clearInterval(st)
          handleAnimation("", 0)
          navbar_holder.style.visibility = "hidden"
        }
      }
    }, 10)
  }

  return (
    <div className="navbar-block navbar-expand-lg navbar-light">
      <div className="navbar-collapse__overlay" data-menu-overlay=""></div>
      <div className="navbar-collapse" id="headerNav">
        <div className="navbar-collapse__holder" data-scroll-lock-ignore="">
          <div className="navbar-collapse__scroller">
            <div className="navbar-collapse__menu" role="navigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/about">
                    <a
                      className={`nav-link nav_animation`}
                      data-toggle="collapse"
                      onClick={() => {
                        handleActiveNav(!isActive)
                      }}
                    >
                      Giới thiệu
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/process">
                    <a
                      className={`nav-link nav_animation`}
                      data-toggle="collapse"
                      onClick={() => {
                        handleActiveNav(!isActive)
                      }}
                    >
                      Quy trình
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products">
                    <a
                      className={`nav-link nav_animation`}
                      title="Overflow examples"
                      onClick={() => {
                        handleActiveNav(!isActive)
                      }}
                    >
                      Sản phẩm
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/examples/">
                    <a
                      className={`nav-link nav_animation`}
                      title="Overflow examples"
                      onClick={() => {
                        handleActiveNav(!isActive)
                      }}
                    >
                      Khách hàng
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/examples/">
                    <a
                      className={`nav-link nav_animation`}
                      title="Overflow examples"
                      onClick={() => {
                        handleActiveNav(!isActive)
                      }}
                    >
                      Liên hệ
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`navbar-toggler toggler--${
          isActive ? "active" : "innactive"
        }`}
        type="button"
        aria-controls="headerNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          handleActiveNav(!isActive)
        }}
        data-menu-opener=""
      >
        <span className="navbar-toggler__icon icon-burger"></span>
        <span
          className="navbar-toggler__label"
          data-opened-state="Close"
          data-closed-state="Menu"
        ></span>
      </button>
    </div>
  )
}

export default NavigationBar
