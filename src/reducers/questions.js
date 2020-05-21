import {
  GET_QUESTION
} from '../types'

const defaultState = {
  currentQuestion: 1
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