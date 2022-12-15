import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PlatformX</title>
        <meta name="description" content="AI for Platforms" />
        <meta property="og:title" content="PlatformX" />
        <meta property="og:description" content="AI for Platforms" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification">
            <Link to="/">
              <Announcement
                rootClassName="announcement-root-class-name"
                className="home-component"
              ></Announcement>
            </Link>
          </div>
          <Navbar></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <img
              alt="image"
              src="/playground_assets/platformx-white.svg"
              className="home-image"
            />
            <h1 className="home-title">AI For Platforms</h1>
            <div id="#contact" className="home-hero-buttons">
              <a
                href="https://calendly.com/d/g7h-snb-zd4"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div id="contact" className="home-i-o-s-btn">
                  <span className="home-caption">Contact us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption1">
            <span className="home-text">4.74 Billion</span>
            <br></br>
          </span>
          <span className="home-description">Users worldwide</span>
        </div>
        <div className="home-stat1">
          <span className="home-caption2">$39.1 Billion</span>
          <span className="home-description1">*23.6% Annual Growth</span>
        </div>
        <div className="home-stat2">
          <span className="home-caption3">35%</span>
          <span className="home-description2">*AI Growth in 2022</span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
