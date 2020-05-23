import React from 'react'

import './Info.css'

const Info = ({ page }) => {
  const partnerName = 'Jenny'
  const bodyWithName = page.body.replace(/<partner name>/g, partnerName)
  return (
    <>
      <p className='pageHeader'>{page.label}</p>
      <p className='pageBody'>{bodyWithName}</p>
    </>
  )
}

export default Info