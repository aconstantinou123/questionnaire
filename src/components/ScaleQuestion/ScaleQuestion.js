import React from 'react'

import './ScaleQuestion.css'

const ScaleQuestion = ({ 
  currentQuestion, 
  currentAnswerYou,
  currentAnswerPartner,
  selectAnswerYou,
  selectAnswerPartner,
}) => {
  const handleChange = (e) => {
    selectAnswerYou(e.target.value)
  }
  return (
    <>
    <h3>{currentQuestion.caption}</h3>
    <h2>{currentQuestion.label}</h2>
    <h4>{currentQuestion.options[currentAnswerYou]}</h4>
    <input 
      type="range" 
      id="answer" 
      name="answer" 
      min="0" 
      value={currentAnswerYou}
      max={currentQuestion.values.length - 1}
      onChange={handleChange}>
    </input>
    <br/>
  </>
)}

export default ScaleQuestion