import React from 'react'

import PropTypes from 'prop-types'

const Point = (props) => {
  return (
    <>
      <div className="point-point">
        <div className="point-check">
          <svg viewBox="0 0 1024 1024" className="point-icon">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <span className="point-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .point-point {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .point-check {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ebfaf9;
          }
          .point-icon {
            width: 12px;
            height: 12px;
          }
          .point-text {
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

Point.defaultProps = {
  text: 'Duis aute irure dolor in reprehenderit',
}

Point.propTypes = {
  text: PropTypes.string,
}

export default Point
