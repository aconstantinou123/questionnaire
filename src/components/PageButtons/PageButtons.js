import React from 'react'

import './PageButtons.css'

const PageButtons = ({
  currentPageIndex,
  pages,
  getPreviousPage,
  getNextPage,
  resetState,
  progress,
}) => {
  const progressMeterWidth = {
    width: `${progress}%`
  }
  return(
      <div className='buttonContainer'>
        {
          currentPageIndex !== 0 &&
          <button className="pageButton" onClick={getPreviousPage}>Back</button>
        }
        {
          (currentPageIndex !== 0 && currentPageIndex + 1 !== pages.length) &&
          <div className="meterContainer">
            <div className="meter">
              <span style={progressMeterWidth}></span>
            </div>
          </div>
        }
        {
          currentPageIndex + 1 !== pages.length && 
          <button className="pageButton" onClick={getNextPage}>Next</button>
        }
        {
          currentPageIndex + 1 === pages.length && 
          <button className="pageButton" onClick={resetState}>Reset</button>
        }
      </div>
    )
  }

export default PageButtons