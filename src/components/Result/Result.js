import React from 'react'

import './Result.css'

const Result = ({
  answers,
}) => {
  
  const findCommonAnswer = (isPartner) => {
    const totals = answers.reduce((acc, answer) => {
      const key = isPartner ? answer.partnerAnswerText : answer.userAnswerText
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

  const findTotalScore= () => {
    return answers.reduce(((acc, answer) => ({
      userTotal: acc.userTotal + answer.userAnswer,
      partnerTotal: acc.partnerTotal + answer.partnerAnswer,
    })), {
      userTotal: 0,
      partnerTotal: 0,
    })
  }

  const totalScores = findTotalScore()
  const youMostCommonAnswer = findCommonAnswer(false)
  const partnerMostCommonAnswer = findCommonAnswer(true)
  return (
    <>
      <h2>Results</h2>
      <h3>You</h3>
      <h3>Most common answer: {youMostCommonAnswer.text} ({youMostCommonAnswer.total})</h3>
      <h3>Total score: {totalScores.userTotal}</h3>
      <h3>Your Partner</h3>
      <h3>Most common answer: {partnerMostCommonAnswer.text} ({partnerMostCommonAnswer.total})</h3>
      <h3>Total score: {totalScores.partnerTotal}</h3>
    </>
  )
}

export default Result