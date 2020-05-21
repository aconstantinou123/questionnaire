import React from 'react';
import './QuestionContainer.css';

const QuestionContainer = ({ 
  currentQuestion,
  getQuestion,
  questions,
}) => {
  const loop = () => {
    questions.pages.forEach(question => {
      console.log(question)
    })
  }
  loop()
  if (currentQuestion === 1){
      getQuestion()
  }
  return (
    <div>
      Hello
    </div>
  );
}

export default QuestionContainer
