import React from 'react'

import PropTypes from 'prop-types'

const Highlight = (props) => {
  return (
    <>
      <div className="highlight-highlight">
        <span className="highlight-text">{props.Title}</span>
        <span className="highlight-text1">{props.Description}</span>
      </div>
      <style jsx>
        {`
          .highlight-highlight {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .highlight-text {
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .highlight-text1 {
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
          }
          @media (max-width: 767px) {
            .highlight-text {
              font-size: 16px;
              text-align: center;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Highlight.defaultProps = {
  Description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  Title: 'Everything you get with Finbest',
}

Highlight.propTypes = {
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Highlight
