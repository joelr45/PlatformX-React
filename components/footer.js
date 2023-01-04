import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <img
                alt={props.pastedImage_alt}
                src={props.pastedImage_src}
                className="footer-pasted-image"
              />
              <span className="footer-text">{props.text1}</span>
            </div>
          </div>
          <div className="footer-links"></div>
        </div>
        <span className="footer-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-text {
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .footer-links {
            gap: var(--dl-space-space-fiveunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-text1 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-space-space-twounits);
            }
            .footer-content {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-pasted-image {
              width: 100px;
            }
            .footer-text {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-links {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: 'AI For Platforms',
  pastedImage_src: '/playground_assets/platformx-white.svg',
  pastedImage_alt: 'pastedImage',
  text: '© 2022 PlatformX. All Rights Reserved.',
}

Footer.propTypes = {
  text1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
