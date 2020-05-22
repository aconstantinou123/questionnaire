import React from 'react'

import './ScaleQuestion.css'

const ScaleQuestion = ({ 
  currentQuestion, 
  selectAnswerYou,
  currentAnswer,
}) => {
  const handleChange = (e) => {
    const identifier = currentQuestion.collect
    selectAnswerYou({
        identifier,
        value: e.target.value
      })
  }
  return (
    <>
    <h3>{currentQuestion.caption}</h3>
    <h2>{currentQuestion.label}</h2>
    <h4>{currentQuestion.options[currentAnswer.answerYou]}</h4>
    <input 
      type="range" 
      id="answer" 
      name="answer" 
      min="0" 
      value={currentAnswer.youAnswer}
      max={currentQuestion.values.length - 1}
      onChange={handleChange}>
    </input>
    <br/>
  </>
)}

export default ScaleQuestion