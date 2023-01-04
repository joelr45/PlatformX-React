import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar-navbar">
        <div className="navbar-desktop">
          <div className="navbar-main"></div>
          <div className="navbar-quick-actions">
            <img
              id="open-mobile-menu"
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="navbar-hamburger-menu"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile">
          <div className="navbar-top">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="navbar-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="navbar-links">
            <Link href="/">
              <a className="navbar-link">{props.text1}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link1">{props.text11}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link2">{props.text12}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link3">{props.text13}</a>
            </Link>
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link4">
                  <div className="navbar-btn">
                    <span className="navbar-text">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="navbar-link5">
                  <div className="navbar-btn1">
                    <span className="navbar-text1">{props.text1311}</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-main {
            gap: var(--dl-space-space-fiveunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-quick-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .navbar-mobile {
            gap: var(--dl-space-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 150px;
            object-fit: cover;
          }
          .navbar-icon {
            width: 28px;
            height: 28px;
          }
          .navbar-links {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link {
            text-decoration: none;
          }
          .navbar-link1 {
            text-decoration: none;
          }
          .navbar-link2 {
            text-decoration: none;
          }
          .navbar-link3 {
            text-decoration: none;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .navbar-link4 {
            display: contents;
          }
          .navbar-btn {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link5 {
            display: contents;
          }
          .navbar-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text1 {
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .navbar-navbar {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-hamburger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
            }
            .navbar-mobile {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text1: 'Features',
  text12: 'Prices',
  text131: 'Log in',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Contact',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/pastedimage-cx4wqj.svg',
  text11: 'How it works',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  text12: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
