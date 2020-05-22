import React from 'react'

import './ScaleQuestion.css'

const ScaleQuestion = ({ 
  question, 
  selectAnswerYou,
  currentAnswer,
}) => {
  const handleChange = (e) => {
    const identifier = question.collect
    selectAnswerYou({
        identifier,
        value: e.target.value
      })
  }
  return (
    <>
    <h3>{question.caption}</h3>
    <h2>{question.label}</h2>
    <h4>{question.options[currentAnswer.answerYou]}</h4>
    <input 
      type="range" 
      id="answer" 
      name="answer" 
      min="0" 
      value={currentAnswer.youAnswer}
      max={question.values.length - 1}
      onChange={handleChange}>
    </input>
    <br/>
  </>
)}

export default ScaleQuestion