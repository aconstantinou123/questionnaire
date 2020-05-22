import {
  GET_NEXT_QUESTION,
  GET_PREVIOUS_QUESTION,
  SELECT_ANSWER_YOU,
  SELECT_ANSWER_PARTNER,
} from '../types'

export const getPreviousQuestion = () => ({
  type: GET_PREVIOUS_QUESTION,
})

export const getNextQuestion = () => ({
  type: GET_NEXT_QUESTION,
})

export const selectAnswerYou = (payload) => ({
  type: SELECT_ANSWER_YOU,
  payload,
})

export const selectAnswerPartner = (payload) => ({
  type: SELECT_ANSWER_PARTNER,
  payload,
})