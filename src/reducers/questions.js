import {
  GET_NEXT_QUESTION,
  SELECT_ANSWER_YOU,
  SELECT_ANSWER_PARTNER,
} from '../types'

import data from '../data/quiz-data.json'

const defaultState = {
  currentQuestion: data.pages[0],
  currentQuestionIndex: 0,
  questions: data.pages,
  currentAnswerYou: 3,
  currentAnswerPartner: Math.floor(data.pages[0]),
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentQuestion: data.pages[state.currentQuestionIndex + 1],
      }
    case SELECT_ANSWER_YOU:
      return {
        ...state,
        currentAnswerYou: action.payload,
      }
    case SELECT_ANSWER_PARTNER:
      return {
        ...state,
        currentAnswerPartner: action.payload,
      }
    default:
      return state
  }
}