import React from 'react'
import Head from 'next/head'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>PlatformX</title>
          <meta
            name="description"
            content="AI for Platforms. Scale enrichment, classification, analysis, generation, and more..."
          />
          <meta property="og:title" content="PlatformX" />
          <meta
            property="og:description"
            content="AI for Platforms. Scale enrichment, classification, analysis, generation, and more..."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d67e547d-7097-4378-ab3e-766248a4adbb/e5444f4d-8662-4068-a68a-f1245e9856c1?org_if_sml=1"
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div className="home-notification">
              <a
                href="https://meetings.hubspot.com/jdokkestul"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Announcement
                  rootClassName="announcement-root-class-name"
                  className="home-component"
                ></Announcement>
              </a>
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
              <h2 className="home-title1">Turn complexity into clarity</h2>
              <div id="#contact" className="home-hero-buttons">
                <a
                  href="https://meetings.hubspot.com/jdokkestul"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div id="contact" className="home-i-o-s-btn">
                    <span className="home-caption">Learn More</span>
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
            <span className="home-caption3">40%</span>
            <span className="home-description2">*AI Market CAGR</span>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-header {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            z-index: 20;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-image {
            width: var(--dl-size-size-xlarge);
            object-fit: cover;
          }
          .home-title {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 600;
            line-height: 76px;
          }
          .home-title1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 30px;
          }
          .home-hero-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link1 {
            display: contents;
          }
          .home-i-o-s-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .home-i-o-s-btn:hover {
            background-color: var(--dl-color-gray-900);
          }
          .home-caption {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-stats {
            width: 100%;
            display: flex;
            z-index: 10;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption1 {
            color: #ffffff;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-caption2 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-left-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption3 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-title1 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-hero-buttons {
              width: 100%;
            }
            .home-i-o-s-btn {
              flex: 1;
            }
            .home-stats {
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption1 {
              text-align: center;
              line-height: 32px;
            }
            .home-text {
              text-align: center;
              line-height: 32px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption2 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption3 {
              text-align: center;
              line-height: 32px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-title1 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption1 {
              font-size: 32px;
            }
            .home-text {
              font-size: 32px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption2 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption3 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-title {
              text-align: center;
            }
            .home-title1 {
              text-align: center;
            }
            .home-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-i-o-s-btn {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
