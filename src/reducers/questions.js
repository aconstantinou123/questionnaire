import {
  GET_NEXT_QUESTION,
  GET_PREVIOUS_QUESTION,
  SELECT_ANSWER_YOU,
  SELECT_ANSWER_PARTNER,
} from '../types'

import data from '../data/quiz-data.json'

const defaultState = {
  currentQuestion: data.pages[0],
  currentQuestionIndex: 0,
  questions: data.pages,
  currentAnswerYou: 1,
  currentAnswerPartner: 1,
  answers: data.pages
    .filter(page => page.type === 'rating_scale')
    .map(page => ({ 
      identifer: page.collect, 
      youAnswer: page.defaultIndex,
      partnerAnswer: page.defaultIndex
  }))
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentQuestion: data.pages[state.currentQuestionIndex + 1],
      }
    case GET_PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
        currentQuestion: data.pages[state.currentQuestionIndex - 1],
      }
    case SELECT_ANSWER_YOU:
      return {
        ...state,
        answers: state.answers.map(answer => {
          if(answer.identifer === action.payload.identifier){
            return {
              ...answer,
              youAnswer: action.payload.value
            }
          }
          return answer
        })
      }
    case SELECT_ANSWER_PARTNER:
      return {
        ...state,
        answers: state.answers.map(answer => {
          if(answer.identifer === action.payload.identifier){
            return {
              ...answer,
              partnerAnswer: action.payload.value
            }
          }
          return answer
        })
      }
    default:
      return state
  }
}