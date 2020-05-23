import React from 'react'

import './ScaleQuestion.css'

const ScaleQuestion = ({ 
  question, 
  selectAnswerYou,
  selectAnswerPartner,
  currentAnswer,
}) => {
  const handleChangeYou = (e) => {
    const identifier = question.collect
    selectAnswerYou({
        identifier,
        value: e.target.value
      })
  }
  const handleChangePartner = (e) => {
    const identifier = question.collect
    selectAnswerPartner({
        identifier,
        value: e.target.value
      })
  }
  return (
    <>
      <h3>{question.caption}</h3>
      <h2>{question.label}</h2>
      <h2>{question.scaleTitle}</h2>
      <h4>{currentAnswer.userAnswerText}</h4>
      <input 
        type="range" 
        id="answer" 
        name="answer" 
        min="0" 
        value={currentAnswer.userAnswer}
        max={question.values.length - 1}
        onChange={handleChangeYou}>
      </input>
      <h2>{question.scaleTitle2}</h2>
      <h4>{currentAnswer.partnerAnswerText}</h4>
      <input 
        type="range" 
        id="answer" 
        name="answer" 
        min="0" 
        value={currentAnswer.partnerAnswer}
        max={question.values.length - 1}
        onChange={handleChangePartner}>
      </input>
      <br/>
   </>
  )
}

export default ScaleQuestion