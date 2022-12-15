import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
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
