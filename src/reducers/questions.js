import {
  GET_QUESTION
} from '../types'

import data from '../data/quiz-data.json'

const defaultState = {
  currentQuestion: 1,
  questions: data,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    default:
      return state
  }
}