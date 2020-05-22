import React from 'react'

import './Result.css'

const Result = ({
  questions,
  answers,
}) => {
  
  const findYourCommonAnswer = (isPartner) => {
    const totals = answers.reduce((acc, answer) => {
      const key = isPartner ? answer.partnerAnswerText : answer.youAnswerText
      if(!acc.hasOwnProperty(key)) {
        return {
          ...acc,
          [key]: 1,
        }
      }
      return {
        ...acc,
        [key]: acc[key] + 1,
      }
    }, {})
    const sorted = Object.keys(totals)
      .map(key => ({ text: key, total: totals[key] }))
      .sort((a, b) => b.total - a.total)
    return sorted[0]
  }

  const youMostCommonAnswer = findYourCommonAnswer(false)
  const partnerMostCommonAnswer = findYourCommonAnswer(true)
  return (
    <>
      <h2>Results</h2>
      <h3>Most common answers</h3>
      <h3>You</h3>
      <h3>{youMostCommonAnswer.text}: {youMostCommonAnswer.total}</h3>
      <h3>Your Partner</h3>
      <h3>{partnerMostCommonAnswer.text}: {partnerMostCommonAnswer.total}</h3>
    </>
  )
}

export default Result