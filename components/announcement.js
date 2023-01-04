import React from 'react'

import PropTypes from 'prop-types'

const Announcement = (props) => {
  return (
    <>
      <div className={`announcement-announcement ${props.rootClassName} `}>
        <span className="announcement-title">{props.Title}</span>
      </div>
      <style jsx>
        {`
          .announcement-announcement {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 16px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
            background-color: #1f1f1f;
          }
          .announcement-announcement:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .announcement-title {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
          }
          .announcement-root-class-name {
            flex: 0 0 auto;
            width: 100%;
          }
          .announcement-root-class-name1 {
            flex: 0 0 auto;
            width: 100%;
          }
          @media (max-width: 479px) {
            .announcement-announcement {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Announcement.defaultProps = {
  Title: 'Scale enrichment, classification, analysis, generation, and more...',
  rootClassName: '',
}

Announcement.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Announcement
