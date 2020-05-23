import React from 'react'

import './PageButtons.css'

const PageButtons = ({
  currentPageIndex,
  pages,
  getPreviousPage,
  getNextPage,
  resetState,
}) => (
  <div className='buttonContainer'>
    {
      currentPageIndex !== 0 &&
      <button className="pageButton" onClick={getPreviousPage}>Back</button>
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

export default PageButtons