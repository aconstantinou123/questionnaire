import React from 'react'

import './Info.css'

const Info = ({ page }) => {
  const partnerName = 'Jenny'
  const bodyWithName = page.body.replace(/<partner name>/g, partnerName)
  return (
    <>
      <h3 className='pageHeader'>{page.label}</h3>
      <p className='pageBody'>{bodyWithName}</p>
    </>
  )
}

export default Info