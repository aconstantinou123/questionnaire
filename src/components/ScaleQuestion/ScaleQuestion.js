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
      <p className='caption'>{question.caption}</p>
      <p className='label'>{question.label}</p>
      <div className='scaleContainer'>
        <p className='title'>{question.scaleTitle}</p>
        <p className='answer'>{currentAnswer.userAnswerText}</p>
        <input 
          type="range" 
          id="answer" 
          name="answer" 
          min="1" 
          value={Number(currentAnswer.userAnswer)}
          max={question.values.length}
          onChange={handleChangeYou}>
        </input>
        <p className='title'>{question.scaleTitle2}</p>
        <p className='answer'>{currentAnswer.partnerAnswerText}</p>
        <input 
          type="range" 
          id="answer" 
          name="answer" 
          min="1" 
          value={Number(currentAnswer.partnerAnswer)}
          max={question.values.length}
          onChange={handleChangePartner}>
        </input>
      </div>
      <br/>
   </>
  )
}

export default ScaleQuestion