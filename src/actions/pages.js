import {
  GET_NEXT_PAGE,
  GET_PREVIOUS_PAGE,
  SELECT_ANSWER_YOU,
  SELECT_ANSWER_PARTNER,
  RESET_STATE,
} from '../types'

export const getPreviousPage = () => ({
  type: GET_PREVIOUS_PAGE,
})

export const getNextPage = () => ({
  type: GET_NEXT_PAGE,
})

export const selectAnswerYou = (payload) => ({
  type: SELECT_ANSWER_YOU,
  payload,
})

export const selectAnswerPartner = (payload) => ({
  type: SELECT_ANSWER_PARTNER,
  payload,
})

export const resetState = () => ({
  type: RESET_STATE,
})