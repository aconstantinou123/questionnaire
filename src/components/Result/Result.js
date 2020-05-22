import React from 'react'

import './Result.css'

const Result = ({
  questions,
  answers,
}) => {
  
  const findYourCommonAnswer = () => {
    const totals = answers.reduce((acc, answer) => {
      if(!acc.hasOwnProperty(answer.youAnswerText)) {
        return {
          ...acc,
          [answer.youAnswerText]: 1,
        }
      }
      return {
        ...acc,
        [answer.youAnswerText]: acc[answer.youAnswerText] + 1,
      }
    }, {})
    const sorted = Object.keys(totals)
      .map(key => ({ text: key, total: totals[key] }))
      .sort((a, b) => b.total - a.total)
    return sorted[0]
  }

  const mostCommonAnswer = findYourCommonAnswer()
  return (
    <>
      <h2>Results</h2>
      <h3>Most common answers</h3>
      <h3>You</h3>
      <h3>{mostCommonAnswer.text}: {mostCommonAnswer.total}</h3>
    </>
  )
}

export default Result