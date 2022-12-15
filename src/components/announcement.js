import React from 'react'

import PropTypes from 'prop-types'

import './announcement.css'

const Announcement = (props) => {
  return (
    <div className={`announcement-announcement ${props.rootClassName} `}>
      <span className="announcement-title">{props.Title}</span>
    </div>
  )
}

Announcement.defaultProps = {
  Title: 'The AI Platform for Platforms',
  rootClassName: '',
}

Announcement.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Announcement
