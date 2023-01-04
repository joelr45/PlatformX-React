import React from 'react'

import PropTypes from 'prop-types'

const Quote = (props) => {
  return (
    <>
      <div className={`quote-quote ${props.rootClassName} `}>
        <div className="quote-quote1">
          <span className="quote-quote2">{props.Quote}</span>
        </div>
        <div className="quote-people">
          <div className="quote-person">
            <img
              alt="person-avatar"
              src={props.Avatar}
              className="quote-avatar"
            />
            <div className="quote-person-details">
              <span id="quote-author" className="quote-text">
                {props.Author}
              </span>
              <span id="quote-title">{props.Title}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .quote-quote {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .quote-quote1 {
            display: flex;
            align-items: center;
            text-overflow: ellipsis;
            flex-direction: column;
          }
          .quote-quote2 {
            font-size: 32px;
            font-style: italic;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 48px;
          }
          .quote-people {
            gap: var(--dl-space-space-sixunits);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .quote-person {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .quote-avatar {
            width: 55px;
            height: 55px;
            border-radius: var(--dl-radius-radius-round);
          }
          .quote-person-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .quote-text {
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 767px) {
            .quote-quote2 {
              font-size: 24px;
              margin-top: var(--dl-space-space-twounits);
              line-height: 36px;
            }
            .quote-person {
              flex-direction: column;
            }
            .quote-person-details {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Quote.defaultProps = {
  Quote:
    '“I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaation ullamco 100%."',
  rootClassName: '',
  Title: 'Manager @Vista Social',
  Author: 'Andy Smith',
  Avatar: '/playground_assets/pastedimage-8jmb-200w.png',
}

Quote.propTypes = {
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Author: PropTypes.string,
  Avatar: PropTypes.string,
}

export default Quote
