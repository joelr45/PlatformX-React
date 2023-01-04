import React from 'react'

import PropTypes from 'prop-types'

const Check = (props) => {
  return (
    <>
      <div className={`check-check ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="check-icon">
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
        <span className="check-text">{props.Feature}</span>
      </div>
      <style jsx>
        {`
          .check-check {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .check-icon {
            width: 18px;
            height: 18px;
          }
          .check-text {
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .check-text {
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Check.defaultProps = {
  rootClassName: '',
  Feature: 'Sed ut perspiciatis unde',
}

Check.propTypes = {
  rootClassName: PropTypes.string,
  Feature: PropTypes.string,
}

export default Check
