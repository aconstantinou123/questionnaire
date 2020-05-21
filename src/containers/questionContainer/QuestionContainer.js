import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './QuestionContainer.css';
// import store from '../../store'

const QuestionContainer = ({ 
  currentQuestion,
  getQuestion,
}) => {
  console.log(currentQuestion)
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
