import React from 'react';

import ScaleQuestion from '../../components/ScaleQuestion/ScaleQuestion'
import './QuestionContainer.css';

const QuestionContainer = ({ 
  currentQuestion,
  getNextQuestion,
  currentQuestionIndex,
  questions,
  currentAnswerYou,
  currentAnswerPartner,
  selectAnswerYou,
  selectAnswerPartner,
}) => {
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
      currentQuestionIndex + 1 !== questions.length &&
      <button className="next" onClick={getNextQuestion}>Next</button>
    }
    </div>
  )
}

export default QuestionContainer
