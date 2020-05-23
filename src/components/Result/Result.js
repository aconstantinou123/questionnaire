import React from 'react'

import './Result.css'

const Result = ({
  answers,
  page,
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
  const userMostCommonAnswer = findCommonAnswer(false)
  const partnerMostCommonAnswer = findCommonAnswer(true)
  const userStringResult = page.bodyBold
    .replace('<total_score>', totalScores.userTotal)
    .replace('<common_score>', `${userMostCommonAnswer.text} (${userMostCommonAnswer.total})`)
  const partnerStringResult = `Your partner's total score was ${totalScores.partnerTotal} and their most common score was ${partnerMostCommonAnswer.text} (${partnerMostCommonAnswer.total})`
  return (
    <>
      <p className='resultBody'>{page.body.replace(',', '')}</p>
      <div className='resultContainer'>
        <p className='result'>{userStringResult}</p>
        <p className='result'>{partnerStringResult}</p>
      </div>
    </>
  )
}

export default Result