import React from 'react';

import ScaleQuestion from '../../components/ScaleQuestion/ScaleQuestion'
import './QuestionContainer.css';

const QuestionContainer = ({ 
  currentQuestion,
  getNextQuestion,
  getPreviousQuestion,
  currentQuestionIndex,
  questions,
  answers,
  currentAnswerYou,
  currentAnswerPartner,
  selectAnswerYou,
  selectAnswerPartner,
}) => {
  const getCurrentAnswer = () => {
    return answers
    .find(answer => answer.identifer === currentQuestion.collect)
  }
  return (
    <div>
    {
      currentQuestion.type === 'info' &&
      <div className="info">Info</div>
    }
    {
      currentQuestion.type === 'rating_scale' &&
      <ScaleQuestion
        currentQuestion={currentQuestion}
        currentAnswer={getCurrentAnswer()}
        currentAnswerYou={currentAnswerYou}
        currentAnswerPartner={currentAnswerPartner}
        selectAnswerYou={selectAnswerYou}
        selectAnswerPartner={selectAnswerPartner}
      />
    }
    {
      currentQuestion.type === 'attachment_result' &&
      <div>Result</div>
    }
    {
      currentQuestionIndex !== 0 &&
      <button className="next" onClick={getPreviousQuestion}>Back</button>
    }
    {
      currentQuestionIndex + 1 !== questions.length && 

        <button className="next" onClick={getNextQuestion}>Next</button>
    }
    </div>
  )
}

export default QuestionContainer
